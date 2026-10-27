import express, { response } from 'express';
import cors from 'cors';
import { MongoClient, ObjectId } from 'mongodb';
import 'dotenv/config';

const app = express();
const port = process.env.PORT || 5000;

console.log(process.env.DB_USER);

// middleware
app.use(cors());
app.use(express.json());

const client = new MongoClient(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.izzybko.mongodb.net/`);

export async function connectToMongoDB() {
    try {
        await client.connect();
        console.log("You successfully connected to MongoDB!");
        return client;
    } 
    catch (err) {
        console.dir(err);
    }
}

const connectedClient = await connectToMongoDB();
const db = connectedClient.db('simpleCrudDB');
const users = db.collection('users');

app.get('/', (req, res) => {
    res.send('Simple CRUD server is running');
});

app.get('/users', async (req, res) => {
    const cursor = users.find({});
    const allUsers = await cursor.toArray();
    res.send(allUsers);
})

app.get('/users/:id', async (req, res) => {
    console.log('Params in the server', req.params);
    const id = req.params.id;

    const query = { _id: new ObjectId(id) }

    const result = await users.findOne(query);
    res.send(result);
})

app.post('/users', async (req, res) => {
    const newUser = req.body;

    console.log('Adding new user: ', newUser);

    const result = await users.insertOne(newUser);
    response.send(result);
})

app.patch('/users/:id', async (req, res) => {
    const id = req.params.id;
    const updateUser = req.body;

    console.log('Update user with ID:', id, 'with data: ', updateUser);
    const filter = {_id: new ObjectId(id)}
    const options = {upsert: true};
    const updateDoc = {
        $set:{
            name: updateUser.name,
            email: updateUser.email
        }
    }
    const result = await users.updateOne(filter, updateDoc, options);
    res.send(result);
})

app.delete('/users/:id', async (req, res) => {
    const id = req.params.id;
    const query = {_id: new ObjectId(id)}
    const result = await users.deleteOne(query);
    res.send(result);
})

app.listen(port, () => {
    console.log(`Simple CRUD Server is running on port: ${port}`);
})
