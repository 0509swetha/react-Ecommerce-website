
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
mongoose.connect('mongodb://localhost:27017/react-shopping', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

app.use(bodyParser.json());

app.post('/Register', async (req, res) => {
  const { email, password } = req.body;

  
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ error: 'User already exists' });
  }

  
  const newUser = new User({ email, password });
  await newUser.save();

  res.json({ message: 'Register successful' });
});


app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});