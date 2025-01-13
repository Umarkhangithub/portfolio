import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    url: { type: String },
    image: { type: String }, // Path to the uploaded image
  });

const Project = mongoose.model('Project', projectSchema);

export default Project;





