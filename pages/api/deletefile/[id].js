import { ObjectId } from "mongodb";
import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
  const { id } = req.query;
  const client = await clientPromise;
  const db = client.db("kribansivut");

  if (req.method === "DELETE") {













    
    if (!id) {
      return res.status(400).json({ message: "ID is required" });
    }

    try {
      const result = await db.collection("contactimages").deleteOne({ _id: new ObjectId(id) });

      if (result.deletedCount === 0) {
        return res.status(404).json({ message: "File not found" });
      }

      return res.status(200).json({ message: "File deleted successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Error deleting file", error });
    }
  } else {
    // Jos metodi ei ole DELETE, palauta 405-virhe
    res.setHeader("Allow", ["DELETE"]);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
