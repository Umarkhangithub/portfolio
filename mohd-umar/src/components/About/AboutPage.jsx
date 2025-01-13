import ButtonComponent from "../UI/Button";
import Icon from "../UI/Icon";
import { DUMMY_ICON } from "../UI/IconData";

import Resume from "../../assets/Resume.pdf";
import Logo from "../../assets/img/umar.png";

import { motion } from "framer-motion";

import "./AboutPage.scss";

const AboutPage = () => {
 
  

  return (
    <div className="hero bg-transparent min-h-screen w-11/12 md:9/12 lg:w-9/12 mx-auto pt-20">
      <div className="  hero-content grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-2">
        <div className="pt-10 lg:pt-0 sm:pt-0 place-items-center mb-10 lg:mb-0 md:mb-0">
          <motion.figure
            className="flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            whileHover={{
              scale: 1.1,
              rotate: -5,
              boxShadow: "0px 15px 30px rgba(0, 132, 199, 0.5)",
            }}
          >
            <motion.img
              src={Logo}
              alt="Logo"
              className="img w-80 h-80 max-w-sm rounded-full shadow-md shadow-sky-500"
              whileHover={{ rotateY: -180 }}
              transition={{ duration: 1, ease: "easeOut" }}
            />
          </motion.figure>
        </div>
        <div className="lg:col-span-2 col-span-1 pl-6   ">
          <motion.h1
            className="text-3xl md:text-3xl lg:text-5xl font-bold mb-2"
            initial={{ opacity: 0, y: -100 }} // Starting animation state
            animate={{ opacity: 1, y: 0 }} // End state
            transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
            whileHover={{
              scale: 1.01, // Slightly enlarges the text on hover
              color: "#0284c7", // Changes text color on hover
              textShadow: "0px 5px 10px rgba(0, 132, 199, 0.5)", // Adds glowing shadow effect
            }}
          >
            About <span className="text-sky-500"> Me</span>
          </motion.h1>

          <motion.h3
            className="text-xl md:text-2xl lg:text-3xl font-bold mt-2 mb-3"
            initial={{ opacity: 0, x: 200 }} // Starting animation state
            animate={{ opacity: 1, x: 0 }} // End state
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }} // Smooth transition
            whileHover={{
              scale: 1.01, // Slightly enlarges the text on hover
              color: "#0284c7", // Changes text color on hover
              textShadow: "0px 5px 10px rgba(0, 132, 199, 0.5)", // Adds glowing shadow effect
            }}
          >
            I'm a <span className="text-sky-500">front-end Developer</span>
          </motion.h3>
          <motion.p
            className=" "
            initial={{ opacity: 0, y: 50 }} // Starting animation state
            animate={{ opacity: 1, y: 0 }} // End state
            transition={{ duration: 0.7, ease: "easeOut" }} // Smooth transition
          >
            Hi, I'm Mohd Umar, a front-end developer from Noida, Uttar Pradesh,
            India. I love building websites that work fast and look great. I
            have strong skills in HTML, CSS, JavaScript, and React, and I enjoy
            creating modern, responsive websites that provide a smooth and
            enjoyable experience for users.
          </motion.p>
          <motion.p
            className=" mt-2 "
            initial={{ opacity: 0, y: 100 }} // Starting animation state
            animate={{ opacity: 1, y: 0 }} // End state
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }} // Smooth transition
          >
            I am skilled in connecting websites to different services using APIs
            and managing app data efficiently with Redux. I have also gained
            practical experience in handling projects smoothly. Some of my work
            includes the <strong>Edge Ledger Website</strong>, a responsive
            business website, and a <strong>To-Do List App</strong> that allows
            users to save tasks even after closing the browser.
          </motion.p>
          <motion.p
            className="mt-2 "
            initial={{ opacity: 0, y: 50 }} // Starting animation state
            animate={{ opacity: 1, y: 0 }} // End state
            transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }} // Smooth transition
          >
            I'm always eager to enhance my skills, especially in cloud
            deployment and scalable application design. Let’s create something
            extraordinary together!
          </motion.p>
          <div className="py-1 lg-py-5 flex flex-row  w-1/2 my-3">
            {DUMMY_ICON.map((icon) => (
              <Icon
                key={icon.id}
                brands={icon.brands}
                iconName={icon.icon}
                link={icon.link}
                title={icon.title}
              />
            ))}
          </div>
          <motion.div
            className="text-3xl md:text-3xl lg:text-5xl font-bold mb-2"
            initial={{ opacity: 0, y: -50 }} // Starting animation state
            animate={{ opacity: 1, y: 0 }} // End state
            transition={{ duration: 0.5,delay:1.2, ease: "easeOut" }} // Smooth transition
            whileHover={{
              scale: 1.01, // Slightly enlarges the text on hover
              color: "#0284c7", // Changes text color on hover
              textShadow: "0px 5px 10px rgba(0, 132, 199, 0.5)", // Adds glowing shadow effect
            }}
          >

          <ButtonComponent
            className="mt-3"
            href={Resume}
            download={"Mohd_Umar.pdf"}
          >
            Resume
          </ButtonComponent>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default AboutPage;
