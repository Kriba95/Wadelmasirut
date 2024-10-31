import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const client = await clientPromise;
      const db = client.db("kribansivut");
      const collection = db.collection("contactimages");

      const files = req.body;
      if (!Array.isArray(files)) {
        return res.status(400).json({ message: 'Invalid data format. Expected an array.' });
      }

      const results = [];
      for (const file of files) {
        if (file.uploadInfo && file.uploadInfo.public_id) {
          // Tarkista, onko public_id jo olemassa tietokannassa
          const existingData = await collection.findOne({ 'data.uploadInfo.public_id': file.uploadInfo.public_id });

          if (!existingData) {
            // Jos ei ole olemassa, lisää uusi dokumentti
            const result = await collection.insertOne({ data: file });
            results.push(result);
          } else {
            console.warn('Skipping data with existing public_id:', file.uploadInfo.public_id);
          }
        } else {
          console.warn('Skipping data with missing or empty public_id:', file);
        }
      }

      res.status(200).json({ message: 'Data saved successfully', results });
    } catch (error) {
      console.error('Error inserting data:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
