import { useEffect, useState } from "react";
import axios from "axios";

import { useTrail, animated } from "react-spring";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`${import.meta.env.REACT_APP_BACKEND_URL}/api/projects`);
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects", error);
      }
    };

    fetchProjects();
  }, []);
  console.log(projects);

  const trail = useTrail(projects.length, {
    opacity: 1,
    transform: "translateY(0px)",
    from: { opacity: 0, transform: "translateY(20px)" },
    delay: 300,
    config: { tension: 200, friction: 20 }, // Customize for smoother/slower animation
  });

  return (
    <div className="hero bg-transparent min-h-screen w-11/12 md:9/12 lg:w-9/12 mx-auto pt-20">
      <div className="container mx-auto px-6">
        <h1 className="text-3xl font-bold text-sky-500 text-center mb-6">
          Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-4 pb-10">
          {trail.map((style, index) => (
            <animated.div key={projects[index].id} style={style}>
              <div className="card bg-sky-500 shadow-xl">
                {projects[index].image && (
                  <figure className="h-80 p-2">
                    <img
                      src={`${projects[index].image}`}
                      alt={projects[index].title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </figure>
                )}
                <div className="card-body">
                  <h2 className="card-title">{projects[index].title}</h2>
                  <p>{projects[index].description}</p>
                  <a
                    href={projects[index].url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-700 underline"
                  >
                    {projects[index].url}
                  </a>
                </div>
              </div>
            </animated.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
