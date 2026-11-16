import express from "express";
import { MongoClient, ObjectId } from 'mongodb';
import 'dotenv/config';
import cors from "cors";

const app = express();
const PORT = 8000;

app.use(cors());
app.use(express.json());


const client = new MongoClient(process.env.MONGODB_URI);

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.dir(err);
  }
}

const mongoClient = await connectToMongoDB();

const db = mongoClient.db("wanderlust");
const destinationCollection = db.collection("destination");

app.get('/destinations', async (req, res) => {
  const result = await destinationCollection.find().toArray();
  res.send(result);
})

app.post('/add-destination', async (req, res) => {
  const data = req.body;

  const result = await destinationCollection.insertOne(data);

  console.log(result);

  res.send(result);
})

app.get('/destination/:id', async (req, res) => {
  const {id} = req.params;
  const result = await destinationCollection.findOne({_id: new ObjectId(id)});
  res.send(result);
})

app.patch('/destination/:id', async (req, res) => {
  const { id } = req.params;
  if (!ObjectId.isValid(id)) {
    return res.status(400).send({ message: 'Invalid destination id.' });
  }

  const { name, country, category, price, duration, departureDate, imageUrl, description } = req.body;
  const result = await destinationCollection.updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        name,
        country,
        category,
        price,
        duration,
        departureDate,
        imageUrl,
        description,
      },
    },
  );

  if (result.matchedCount === 0) {
    return res.status(404).send({ message: 'Destination not found.' });
  }

  res.send({ message: 'Destination updated successfully.' });
})

app.delete('/destination/:id', async (req, res) => {
  const { id } = req.params;

  const result = await destinationCollection.deleteOne({ _id: new ObjectId(id) });
  if (result.deletedCount === 0) {
    return res.status(404).send({ message: 'Destination not found.' });
  }

  res.send({ message: 'Destination deleted successfully.' });
})

// app.patch('/destination/:id', async (req, res) => {
//   const { id } = req.params;
//   const updatedData = req.body;

//   const result = await destinationCollection.updateOne(
//     { _id: new ObjectId(id) },
//     { $set: updatedData }
//   );

//   res.json(result);
// });

app.get('/', (req, res) => {
    res.send({message: 'Server is running!'});
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
})