import express from 'express'
import multer from "multer";

import Project from '../models/project.js';


const router = express.Router();

// Configure Multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });





//Get all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.status(200).json(projects);
    } catch (error) {
      res.status(500).json({ message: "Error fetching projects", error });
    }
  });


// Route to add a project with an image
router.post("/add", upload.single("image"), async (req, res) => {
  try {
    const { title, description, url } = req.body;
    const imagePath = req.file ? `/uploads/${req.file.filename}` : null;

    const project = new Project({ title, description, url, image: imagePath });

    await project.save();
    res.status(201).json({ message: "Project added successfully", project });
  } catch (error) {
    res.status(500).json({ message: "Error adding project", error });
  }
});


// Delete project
router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProject = await Project.findByIdAndDelete(id);

    if (!deletedProject) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json({ message: 'Project deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting project', error });
  }
})





export default router


