import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise;
    const db = client.db("kribansivut");

    switch (req.method) {
      case "GET":
        const { laskurinsivu } = req.query;

        if (laskurinsivu) {
          let allPosts = await db
            .collection("sivut")
            .find({ page: laskurinsivu, kieli: "en" })
            .project({_id: 0}) // Exclude _id field from the result
            .toArray();

          if (allPosts.length === 0) {
            allPosts = await db
              .collection("sivut")
              .find({ page: laskurinsivu })
              .project({_id: 0}) // Exclude _id field from the result
              .toArray();
          }

          res.status(200).json(allPosts);
          return;
        } else {
          let allPosts = await db
            .collection("sivut")
            .find({})
            .project({_id: 0}) // Exclude _id field from the result
            .toArray();

          res.status(200).json(allPosts);
          return;
        }

      default:
        res.status(405).json({ message: "Method Not Allowed" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
    console.error("Error in API route:", error);
  }
}
