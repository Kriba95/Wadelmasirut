// pages/api/contact.js

import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, phoneNumber } = req.body;

    if (!email && !phoneNumber) {
      return res.status(400).json({ error: "Missing fields" });
    }

    try {
      const client = await clientPromise;
      const db = client.db("kribansivut");
      const collection = db.collection("contacts");

      const result = await collection.insertOne({
        later: req.body,
        createdAt: new Date(),
      });

      res.status(201).json({ message: "Contact saved", data: result });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
