import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const client = await clientPromise;
      const db = client.db("kribansivut");
      const collection = db.collection("contactimages");

      // Hae kaikki asiakirjat kokoelmasta
      const results = await collection.find({}).toArray();

      // Muunna tulokset haluttuun muotoon
      const files = results.flatMap((result) => {
        return result.data
          ? [
              {
                _id: result._id,
                publicId: result.data.uploadInfo?.public_id,
                name: result.data.name,
                nickname:result.data.user,
                size: result.data.size,
                format:result.data.uploadInfo?.format,
                uploadedAt:result.data.uploadedAt,
                dimensions: result.data.dimensions,
                thumbSrc: result.data.uploadInfo?.thumbnail_url,
                src: result.data.uploadInfo?.secure_url,
                dimensions: result.data.dimensions,
              },
            ]
          : [];
      });

      // Palauta tulokset JSON-muodossa
      res.status(200).json({ files });
    } catch (error) {
      console.error("Failed to fetch data", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    // Vastaus, jos metodi ei ole GET
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
