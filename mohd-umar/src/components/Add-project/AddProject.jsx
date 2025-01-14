import { useState, useEffect } from "react";

import axios from "axios";
import ButtonComponent from "../UI/Button";

import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProject = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    url: "",
    image: "",
  });

  // Handle all Input
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle Upload file change
  // const handleFileChange = (e) => {
  //   setFormData({ ...formData, image: e.target.files[0] });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(projects);
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/projects/add`,
        formData
      );
      toast.success(response.data.message);
      setFormData({ title: "", description: "", url: "", image: "" });
      fetchProjects(); // Fetch updated project list
    } catch (error) {
      toast.error("Failed to add project.");
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);
  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/projects`
      );
      setProjects(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching projects", error);
    }
  };

  const deleteProject = async (id) => {
    try {
      await axios.delete(
        `${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/projects/${id}`
      );
      toast.success("Project deleted successfully!");
      fetchProjects(); // Re-fetch projects to update the list
    } catch (error) {
      console.error("Error deleting project", error);
      toast.error("Failed to delete the project!");
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        style={{ marginTop: "50px" }}
      />
      <div className=" grid  grid-flow-row  sm:grid-flow-row md:grid-cols-1 bg-transparent min-h-screen w-11/12  mx-auto p-5 pt-20">
        <div className="grid align-center items-center justify-center   backdrop-blur-sm p-8 rounded-lg shadow-md  w-full ">
          <div className="max-w-[600px]">
            <h1 className="text-3xl font-bold text-sky-500 text-center mb-6">
              Add <span className="text-sky-500">Project</span>
            </h1>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 lg:grid-cols-2 sm:grid-cols-1">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-sky-500 mb-2"
                  >
                    Title:
                  </label>
                  <input
                    className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-sky-500 mb-2"
                  >
                    URL:
                  </label>
                  <input
                    className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                    type="url"
                    name="url"
                    value={formData.url}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-sky-500 mb-2"
                >
                  Description:
                </label>
                <textarea
                  className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                  id="description"
                  name="description"
                  rows="4"
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <div className="grid gap-4 lg:grid-cols-2 sm:grid-cols-1">
                <div>
                  <label className="form-control w-full max-w-xs">
                    {/* <input
                      onChange={handleFileChange}
                      className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-sky-500 
      file-input file-input-bordered file:bg-sky-500 file:text-white file:border-none file:rounded-lg max-w-xs"
                      type="file"
                      name="image"
                    /> */}
                    <label
                      htmlFor="imageUrl"
                      className="block text-sm font-medium text-sky-500 mb-2"
                    >
                      ImageURL:
                    </label>
                    <input
                      className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                      type="url"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      required
                    />
                  </label>
                </div>
                <ButtonComponent
                  type="submit"
                  width="100%"
                  bg="white"
                  color="#0284c7"
                >
                  Add project
                </ButtonComponent>
              </div>
            </form>
          </div>
        </div>

        <div className="grid max-w-[1000px]  mx-auto mb-32 sm:pt-28  p-5">
          <h1 className="  text-3xl font-bold text-sky-500 text-center mb-6">
            Project <span className="text-sky-500">List</span>
          </h1>
          <div className=" ">
            <table className="table border-collapse border border-sky-500 w-full">
              <thead className="w-full grid-flow-rows grid-cols-5">
                <tr className="bg-sky-500 text-white text-center w-full grid-flow-rows grid-cols-5">
                  <th className="border border-sky-600 px-4 py-4 col-span-1">
                    Title
                  </th>
                  <th className="border border-sky-600 px-4 py-2  w-full">
                    Description
                  </th>
                  <th className="border border-sky-600 px-4 py-2 w-full">
                    URL
                  </th>
                  <th className="border border-sky-600 px-4 py-2 col-span-2 ">
                    IMAGE
                  </th>
                  <th className="border border-sky-600 px-4 py-2  col-span-1">
                    DELETE
                  </th>
                </tr>
              </thead>
              <tbody className="text-black">
                {/* Check if the projects array is empty */}
                {projects.length === 0 ? (
                  <tr className="text-center">
                    <td
                      colSpan="4"
                      className="border border-sky-600 px-4 py-2 text-center text-red-500 font-bold"
                    >
                      Projects are empty!
                    </td>
                  </tr>
                ) : (
                  // If projects exist, map through them and display the list
                  projects.map((project) => (
                    <tr
                      key={project._id}
                      className="hover:bg-sky-100 even:bg-gray-50 odd:bg-white transition-all"
                    >
                      <td className="border border-sky-600 px-4 py-2 text-center">
                        {project.title}
                      </td>
                      <td className="border border-sky-600 px-4 py-2 text-center ">
                        {project.description}
                      </td>
                      <td className="border border-sky-600 px-4 py-2 text-center w-full">
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sky-500 hover:underline"
                        >
                          {project.url}
                        </a>
                      </td>
                      <td className="border border-sky-600 px-4 py-2  text-center">
                        {project.image && (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-20 h-20 place-self-center rounded-full "
                          />
                        )}
                      </td>
                      <td className="w-full  border border-sky-600 px-4 py-2  text-center">
                        <IconButton
                          onClick={() => deleteProject(project._id)}
                          color="error"
                          aria-label="delete"
                          className="mt-4 text-sky-500 hover:underline"
                        >
                          <DeleteIcon />
                        </IconButton>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProject;
