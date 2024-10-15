const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const formRoutes = require('./routes/formRoutes');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());
app.use('/api/forms', formRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
