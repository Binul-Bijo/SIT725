var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
const mongoose = require('mongoose');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect('mongodb://localhost:27017/myprojectDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
mongoose.connection.on('connected', () => {
  console.log('Connected to MongoDB');
});

const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  desciption: String,
});

const Project = mongoose.model('Project', ProjectSchema);

app.get('/api/projects', async (req, res) => {
  const projects = await Project.find({});
  res.json({ statusCode: 200, data: projects, message: "Success" });
});

app.post('/api/form', async (req, res) => {
  console.log('Form Data Received:', req.body);
  res.json({ statusCode: 200, message: "Form submitted successfully" });
});

app.listen(port, () => {
  console.log(`App listening to: http://localhost:${port}`);
});