import express from 'express';
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send(users);
})

const users = [
    {id:1, name: 'Bony Amin', email: 'bonyamin@gmail.com'},
    {id:2, name: 'Bony', email: 'bony@gmail.com'},
    {id:3, name: 'Amin', email: 'amin@gmail.com'},
    {id:4, name: 'Sadia', email: 'sadia@gmail.com'},
]

app.get('/about', (req, res) => {
    res.send('From About Page');
})

app.get('/dashboard', (req, res) => {
    res.send('Dashboard page');
})

app.get('/contact', (req, res) => {
    res.send('Contact page');
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})