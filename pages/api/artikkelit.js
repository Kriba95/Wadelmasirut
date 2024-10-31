import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      title,
      description,
      keywords,
      url,
      transactionsTitle,
      differenceTitle,
      differenceText,
      helpTitle,
      cta1Text,
      author,
      text,
      imagesArray,
    } = req.body;

    // Validate the input data (you can add more validations as needed)
    if (!title || !description || !keywords || !text) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    try {
      const client = await clientPromise;
      const db = client.db("kribansivut");
      const collection = db.collection("artikkelit");

      // Create the article document
      const article = {
        title,
        description,
        keywords,
        url,
        transactionsTitle,
        differenceTitle,
        differenceText,
        helpTitle,
        cta1Text,
        author,
        text,
        imagesArray,
        createdAt: new Date(), // Optional: Add a timestamp
      };
      article.text = article.text
        .replace(/<ul>/g, '<ul class="list-disc pl-5">')
        .replace(/<ol>/g, '<ol class="pl-6 mb-8">')
        .replace(/<h2>/g, '<h2 class="text-2xl font-bold text-gray-900 mb-2">')
        .replace(/<p>/g, '<p class="mb-6">');

      // Insert the article document into the collection
      const result = await collection.insertOne(article);

      // Respond with the inserted document ID
      res.status(201).json({
        message: "Article created successfully",
        id: result.insertedId,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  if (req.method === "GET") {
    try {
      const client = await clientPromise;
      const db = client.db("kribansivut");
      const collection = db.collection("artikkelit");

      const result = await collection
        .find({})
        .project({ _id: 0 }) // Exclude _id field from the result
        .toArray();

      // Respond with the inserted document ID
      res.status(201).json({ result });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
