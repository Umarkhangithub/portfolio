import { useState } from "react";
import ButtonComponent from "../UI/Button";

import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactPage = () => {
  const [result, setResult] = useState("");
  const [errors, setErrors] = useState({});


  // Validation logic
  const validate = (formData) => {
    const tempErrors = {};

    // Validate First Name
    const firstName = formData.get("firstName")?.trim();
    if (!firstName) {
      tempErrors.firstName = "First name is required.";
      // toast.error("First name is required.");
    }

    // Validate Last Name
    const lastName = formData.get("lastName")?.trim();
    if (!lastName) {
      tempErrors.lastName = "Last name is required.";
      // toast.error("Last name is required.");
    }

    // Validate Email
    const email = formData.get("email")?.trim();
    if (!email) {
      tempErrors.email = "Email is required.";
      // toast.error("Email is required.");
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)
    ) {
      tempErrors.email = "Invalid email format.";
      // toast.error("Invalid email format.");
    }

    // Validate Phone Number
    const phoneNumber = formData.get("phoneNumber")?.trim();
    if (!phoneNumber) {
      tempErrors.phoneNumber = "Phone number is required.";
      // toast.error("Phone number is required.");
    } else if (!/^\d{10}$/.test(phoneNumber)) {
      tempErrors.phoneNumber = "Phone number must be 10 digits.";
      // toast.error("Phone number must be 10 digits.");
    }

    // Validate Message
    const message = formData.get("message")?.trim();
    if (!message) {
      tempErrors.message = "Message is required.";
      // toast.error("Message is required.");
    } else if (message.length < 10) {
      tempErrors.message = "Message must be at least 10 characters long.";
      // toast.error("Message must be at least 10 characters long.");
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  // Handle form submission
  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("");

    const formData = new FormData(event.target);
    if (!validate(formData)) {
      setResult("Please fix the errors above.");
      return;
    }

    setResult("Sending...");
    formData.append("access_key", "9ad355e1-ceed-47a3-ba8a-ce1d0b7c49f6");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully!");
        toast.success("Form submitted successfully!");
        event.target.reset();
      } else {
        setResult(data.message || "Something went wrong.");
        toast.error(data.message || "Something went wrong.");
      }
    } catch (error) {
      setResult("An error occurred while submitting the form.");
      toast.error("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center py-20">
      <div className="w-full max-w-2xl backdrop-blur-sm border p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-sky-500 text-center mb-6">
          Contact <span className="text-sky-500">Us</span>
        </h1>

        <form className="space-y-4" onSubmit={onSubmit}>
          <input type="hidden" name="access_key" value="06c0f491-8989-4072-a56e-a00e58ab8852" />
          <div className="grid gap-4 lg:grid-cols-2 sm:grid-cols-1">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-sky-500 mb-2">
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
                {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-sky-500 mb-2">
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
               {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-sky-500 mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-sky-500 mb-2">
              Phone number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
              placeholder="1234567890"
            />
            {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>}
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium text-sky-500 mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full p-2 bg-white text-black rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
            ></textarea>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          <ButtonComponent type="submit" width="100%" bg="white" color="#0284c7">
            Contact
          </ButtonComponent>
        </form>
        <ToastContainer
          position="top-center"
          autoClose={2000}
          transition={Zoom}
        />
      </div>
    </div>
  );
};

export default ContactPage;
