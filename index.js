const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const itemRoutes = require('./routes/item');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost:27017/warehouse', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connect('mongodb+srv://piyumali99sandunika:gaAZzyaEmSCvX5nr@cluster528.emiulrh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster528');
app.use('/api', itemRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
