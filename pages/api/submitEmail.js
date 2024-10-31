import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*"); // Or restrict to specific domains
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  try {
    const client = await clientPromise;
    const db = client.db("kribansivut");

    let laskurinsivu = req.query;
    switch (req.method) {
      case "OPTIONS":
        if (!laskurinsivu) {
          return res
            .status(400)
            .json({ error: "Missing 'laskurinsivu' parameter" });
        }

        const data = await db
          .collection("contacts") // Replace 'collectionName' with your actual collection name
          .insertOne({
            laskurinsivu: laskurinsivu?.email,
            date: new Date(),
            site: "Werkkosivut.fi",
          });

        if (data.acknowledged) {
          return res.status(200).json("ok");
        } else {
          return res.status(404).json({ error: "Data not found" });
        }

      default:
        if (!laskurinsivu) {
          return res
            .status(400)
            .json({ error: "Missing 'laskurinsivu' parameter" });
        }

        const datas = await db
          .collection("contacts") // Replace 'collectionName' with your actual collection name
          .insertOne({
            laskurinsivu: laskurinsivu?.email,
            date: new Date(),
            site: "Werkkosivut.fi",
          });

        if (datas.acknowledged) {
          return res.status(200).json("ok");
        } else {
          return res.status(404).json({ error: "Data not found" });
        }
    }
  } catch (error) {
    console.error("Database query failed:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
