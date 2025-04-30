const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/myprojectDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const ProjectSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  desciption: String,
});

const Project = mongoose.model('Project', ProjectSchema);

const sampleProject = new Project({
  title: "Iron Man",
  image: "images/ironman.jpeg",
  link: "Brave warrior",
  desciption: "Iron Man is the alter ego of Tony Stark."
});

sampleProject.save().then(() => {
  console.log("Sample project saved!");
  mongoose.connection.close();
});