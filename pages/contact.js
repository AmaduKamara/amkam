import { useState } from "react";
import { RiMapPinUserFill } from "react-icons/ri";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";
import Footer from "../components/Footer";

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
    <div className="pb-24">
      <div className="text-white pt-56 flex justify-center">
        <div className="flex justify-center w-9/12">
          <div className="w-1/2 mr-24">
            <h1 className="font-semibold h-text-color text-4xl md:text-5xl lg:text-7xl my-2">
              Let's Connect
            </h1>
            <p>
              Do you need someone with my expertise, please reach out let's get
              started. You can reach me on the social media links at the right
              of the screen or through the following:
            </p>

            <ul className="mt-12">
              <li className="flex mb-4">
                <RiMapPinUserFill className="mr-3 text-4xl h-text-color" />
                <span className="text-xl md:text-2xl font-thin">
                  Freetown, Sierra Leone.
                </span>
              </li>
              <li className="flex mb-4">
                <HiOutlineMail className="mr-3 text-4xl h-text-color" />
                <span className="text-xl md:text-2xl font-thin">
                  amaduskamara@gmail.com
                </span>
              </li>
              <li className="flex mb-4">
                <FaPhoneAlt className="mr-3 text-4xl h-text-color" />
                <span className="text-xl md:text-2xl font-thin">
                  +23276716997
                </span>
              </li>
            </ul>
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
      <Footer />
    </div>
  );
};

export default Contact;
