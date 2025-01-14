import { useState, useEffect } from "react";
import { Navigate } from 'react-router-dom'

import ButtonComponent from "../UI/Button";
import axios from "axios";
import AddProject from "../Add-project/AddProject";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserAuth = () => {

const [isLogedIn, setIsLogedIn] = useState(false);
  const [user, setUser] = useState([]);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  useEffect(() => {
    fetchUser();
  }, []);
  const fetchUser = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_URL}/api/auths`);
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching projects", error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!form.firstName || !form.lastName || !form.email || !form.password) {
      toast.error("All fields are required");
      return;
    }

    user.map((user) => {

      if (user.fname !== form.firstName) {
        toast.error('first name not match');
        return;
      }
      if (user.lname !== form.lastName) {
        toast.error('last name not match');
        return;
      }
      if (user.email !== form.email) {
        toast.error('email not match');
        return;
      }
      if (user.password !== form.password) {
        toast.error("password not match");
        return;
      }
      if (
        user.fname === form.firstName &&
        user.lname === form.lastName &&
        user.email === form.email &&
        user.password === form.password
      ) {
        
        toast.success("Logged in successfully");
        setIsLogedIn(true);
        Navigate('/addproject');
        // navigate('/addproject')
       
      }
      // else  { Navigate('/addproject');

      // }

        
     
    });
  };

  return (
<>
   {
    isLogedIn ? <AddProject /> : (

   
    <div className="hero bg-transparent min-h-screen w-11/12 md:9/12 lg:w-9/12 mx-auto pt-20">
       <ToastContainer
       position="top-center"
       autoClose={3000}
       hideProgressBar={false}
       closeOnClick
       pauseOnHover
       draggable
       style={{ marginTop: "50px" }}
        />

      <div className="w-full max-w-2xl backdrop-blur-sm border p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-sky-500 text-center mb-6">
          Admin <span className="text-sky-500">Password</span>
        </h1>
      
          <form className="space-y-4" onSubmit={onSubmit}>
            <div className="grid gap-4 lg:grid-cols-2 sm:grid-cols-1">
              <div>
                <label
                  htmlFor="firstName"
                  className="block text-sm font-medium text-sky-500 mb-2"
                >
                  First name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
              <div>
                <label
                  htmlFor="lastName"
                  className="block text-sm font-medium text-sky-500 mb-2"
                >
                  Last name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-sky-500 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-sky-500 mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>

            <ButtonComponent
              type="submit"
              width="100%"
              bg="white"
              color="#0284c7"
            >
              Save
            </ButtonComponent>
          </form>
      
       
      </div>
    </div>
     )
    }
</>

  );
};

export default UserAuth;
