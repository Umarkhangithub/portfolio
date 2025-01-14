
import { useEffect, useState } from "react";
import axios from "axios";
import { useTrail, animated } from "react-spring";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true); // State to handle loading state

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/projects`);
        setProjects(response.data);
       
      } catch (error) {
        console.error("Error fetching projects", error);
      } finally {
        setLoading(false); // Set loading to false after data is fetched
      }
    };

    fetchProjects();
  }, []);

  const trail = useTrail(projects.length, {
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(20px)" },
    delay: 300,
    config: { tension: 200, friction: 20 },
  });
  // console.log('object', projects)

  return (
  
    <div className="hero bg-transparent min-h-screen w-11/12 md:9/12 lg:w-9/12 mx-auto pt-20">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-sky-500 text-center mb-6">
          Projects
        </h1>
        {loading ? (
          <p className="text-center text-gray-500">Loading projects...</p> // Loading message
        ) : projects.length === 0 ? (
          <p className="text-center text-gray-500">Project is empty</p> // No projects message
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 pb-10">
            {projects.map((project, index) => (
              // console.log(project)
              <animated.div key={project.id} style={trail[index]}>
                <div className="card grid grid-cols-1 w-full h-full bg-sky-500 shadow-xl">
                  {projects[index].image && (
                    <figure className="h-80 p-2">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </figure>
                  )}
                  <div className="card-body ">
                    <h2 className="card-title">{project.title}</h2>
                    <p>{project.description}</p>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 underline"
                    >
                      {project.url}
                    </a>
                  </div>
                </div>
              </animated.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectList;
