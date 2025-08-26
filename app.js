import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Hello from index!'));
app.get('/new', (req, res) => res.send('Hello from new message form!'))

const PORT = 3000;
app.listen(PORT, (error) => {
  if (error) throw error;
  console.log(`Listening on port ${PORT}!`)
})