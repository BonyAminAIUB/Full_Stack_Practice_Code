import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send(users);
})

const users = [
    {id:1, name: 'Bony Amin', email: 'bonyamin@gmail.com'},
    {id:2, name: 'Bony', email: 'bony@gmail.com'},
    {id:3, name: 'Amin', email: 'amin@gmail.com'},
    {id:4, name: 'Sadia', email: 'sadia@gmail.com'},
]

app.get('/users', (req, res) => {
    res.send('From User Page');
})

app.post('/users', (req, res) => {
    console.log('data from client', req.body);
    const newUser = req.body;
    // Temporary data storage
    newUser.id = users.length + 1;
    users.push(newUser);
    
    res.send({success: true, message: 'User added seccessfully'});
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})