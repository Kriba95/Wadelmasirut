import { withApiAuthRequired, getSession } from "@auth0/nextjs-auth0";
import clientPromise from "../../lib/mongodb";

export default withApiAuthRequired(async function myApiRoute(req, res) {
  const session = await getSession(req, res);

  let sub = "";

  try {
    sub = session.session?.user?.sub
      ? session.session?.user?.sub
      : session?.user?.sub;
  } catch {
    sub = session?.user?.sub;
  }

  const user = session.user;

  if (
    user.email === "couponizza@gmail.com" ||
    user.email === "liubovsav0@gmail.com"
  ) {
    try {
      const client = await clientPromise;
      const db = client.db("kribansivut");

      switch (req.method) {
        case "GET":
          const domains = await db.collection("domains").find({}).toArray();
          const excludedEmails = await db
            .collection("excludedEmails")
            .find({})
            .toArray(); // Hae excluded emailit
          res.status(200).json({ protected: true, domains, excludedEmails }); // Palauta myös excluded emailit
          break;

        // POST request to add a new domain or excluded email
        case "POST":
          const { domain, excludedEmail } = req.body;

          // Tarkista, onko annettu domain
          if (domain && typeof domain === "string") {
            // Check if the domain already exists
            const existingDomain = await db
              .collection("domains")
              .findOne({ domain });

            if (existingDomain) {
              res.status(400).json({ error: "Domain already exists" });
              return;
            }

            // Insert the new domain
            const result = await db.collection("domains").insertOne({ domain });
            res.status(201).json({
              protected: true,
              message: "Domain added successfully",
              result,
            });
            return;
          }

          // Tarkista, onko annettu excluded email
          if (excludedEmail && typeof excludedEmail === "string") {
            // Tarkista, onko excluded email jo olemassa
            const existingEmail = await db
              .collection("excludedEmails")
              .findOne({ email: excludedEmail });

            if (existingEmail) {
              res.status(400).json({ error: "Excluded email already exists" });
              return;
            }

            // Lisää uusi excluded email
            await db
              .collection("excludedEmails")
              .insertOne({ email: excludedEmail });
            res.status(201).json({
              protected: true,
              message: "Excluded email added successfully",
            });
            return;
          }

          // Jos ei ole annettu kelvollista domainia tai excluded emailia
          res.status(400).json({ error: "Invalid request" });
          break;

        case "DELETE":
          const { domain: domainToRemove, excludedEmail: emailToRemove } = req.body;

          if (domainToRemove) {
            if (typeof domainToRemove !== "string") {
              res.status(400).json({ error: "Invalid domain" });
              return;
            }
        
            // Poista domain tietokannasta
            const deleteDomainResult = await db
              .collection("domains")
              .deleteOne({ domain: domainToRemove });
        
            if (deleteDomainResult.deletedCount === 0) {
              res.status(404).json({ error: "Domain not found" });
              return;
            }
        
            res.status(200).json({ message: "Domain removed successfully" });
          }
        
          // Tarkista, onko sähköposti poistettavana
          if (emailToRemove) {
            if (typeof emailToRemove !== "string") {
              res.status(400).json({ error: "Invalid email" });
              return;
            }
        
            // Poista sähköposti tietokannasta
            const deleteEmailResult = await db
              .collection("excludedEmails")
              .deleteOne({ email: emailToRemove });
        
            if (deleteEmailResult.deletedCount === 0) {
              res.status(404).json({ error: "Email not found" });
              return;
            }
        
            res.status(200).json({ message: "Email removed successfully" });
          }
          break;
        // Handle any other HTTP methods
        default:
          res.setHeader("Allow", ["GET", "POST"]);
          res.status(405).end(`Method ${req.method} Not Allowed`);
          break;
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }

    return;
  } else {
    // If the user is not allowed to access the domains
    res.json({ protected: false, ses: user.email });
    return;
  }
});
