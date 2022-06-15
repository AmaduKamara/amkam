import React from "react";
import { useState } from "react";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(fullName, email, message);
    setFullName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div className="text-white py-32 flex justify-center">
        <div className="flex justify-center w-9/12">
          <div className="w-1/2">
            <h1 className="font-semibold h-text-color text-4xl md:text-5xl lg:text-7xl my-2">
              Let's Connect
            </h1>
          </div>
          <div className="w-1/2 portfolio-bg-popover rounded-md shadow-xl">
            <form className="w-full p-6" onSubmit={handleSubmit}>
              <div className="mb-6">
                <h2 className="text-2xl md:text-4xl lg:text-5xl">
                  Leave me a message
                </h2>
              </div>
              <label className="mb-4 block">
                <span className="block mb-1 text-lg">Fullname</span>
                <input
                  type="text"
                  value=""
                  placeholder="Enter fullname"
                  className="w-full p-3 rounded-md"
                />
              </label>
              <label className="mb-4 block">
                <span className="block mb-1 text-lg">Email</span>
                <input
                  type="text"
                  value=""
                  placeholder="Enter fullname"
                  className="w-full p-3 rounded-md"
                />
              </label>
              <label className="mb-2 block">
                <span className="block mb-1 text-lg">Message</span>
                <textarea
                  rows="5"
                  className="w-full p-3 rounded-md text-gray-500"
                  placeholder="Write your message..."
                ></textarea>
              </label>
              <button
                type="submit"
                className="bg-sky-500 hover:bg-sky-600 py-3 md:py-4 px-12 text-xl rounded-md text-white my-4 w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
