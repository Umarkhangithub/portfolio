import React from 'react'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./components/Home/HomePage";
import Layout from "./components/Layout/Layout";
import AddProject from './components/Add-project/AddProject';

const AboutPage = React.lazy(() => import("./components/About/AboutPage"));
const ContactPage = React.lazy(() => import("./components/Contact/ContactPage"));
const ServicePage = React.lazy(() => import("./components/Services/ServicePage"));
const EducationPage = React.lazy(() => import("./components/Education/EducationPage"));
const ProjectList = React.lazy(() => import("./components/Add-project/ProjectList"));
const UserAuth = React.lazy(() => import("./components/User/UserAuth"));


const App = () => (
  <Router className="backdrop-blur-md">
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicePage />} />
        <Route path="/education" element={<EducationPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projectlist" element={<ProjectList />} />
        {/* <Route path="/addproject" element={<AddProject />} /> */}
        <Route path="/userauth/*" element={<UserAuth />} />


        <Route
          path="*"
          element={
            <div
              className="grid justify-center mt-[-100px]
         h-screen w-full place-items-center"
            >
           
              <h1 className=" grid place-items-center place-content-center text-4xl text-white font-bold mt-20">
                Page Not Found... 404
              </h1>
            </div>
          }
        />
      </Routes>
    </Layout>
  </Router>
);

export default App;
