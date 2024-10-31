import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, teksti, "mobile-or-email": mobileOrEmail } = req.body;


    if (!name || !teksti || !mobileOrEmail) {
      return res.status(400).json({ error: "Missing fields" });
    }

    try {
      const client = await clientPromise;
      const db = client.db("kribansivut");
      const collection = db.collection("contacts");

      const result = await collection.insertOne({
        name,
        teksti,
        mobileOrEmail,
        createdAt: new Date(),
      });

      res.status(201).json({ message: "ok", data: result });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
