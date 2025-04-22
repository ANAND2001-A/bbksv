import React, { useState, useEffect } from "react"; // ✅ Keep this one
import { saveContactForm } from '../firebase.jsx'; // Import the Firestore save function
import CustomButton from "../components/CustomButton.jsx"; // Import the custom button component

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "General Inquiry",
    message: "",
    attachment: null,
  });

  // Handle changes to form inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle file upload
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      attachment: file,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Call the function to save data to Firestore
      await saveContactForm(formData);
      alert("Your message has been sent successfully!");

      // Reset the form after submission
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        subject: "General Inquiry",
        message: "",
        attachment: null,
      });
    } catch (error) {
      console.error("Error submitting the form: ", error);
      alert("There was an error submitting your message.");
    }
  };
  return (
    <div className="bg-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-blue-50 rounded-4xl shadow-sm p-8">
            <h2 className="text-2xl font-semibold mb-8">Get in Touch</h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-user text-gray-400"></i>
                  </div>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="!rounded-button block w-full pl-10 py-3 border border-gray-300 focus:ring-custom focus:border-custom"
                    placeholder="Enter your name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-envelope text-gray-400"></i>
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="!rounded-button block w-full pl-10 py-3 border border-gray-300 focus:ring-custom focus:border-custom"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-phone text-gray-400"></i>
                  </div>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="!rounded-button block w-full pl-10 py-3 border border-gray-300 focus:ring-custom focus:border-custom"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="!rounded-button block w-full py-3 border border-gray-300 focus:ring-custom focus:border-custom"
                >
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Billing Question</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="!rounded-button block w-full py-3 border border-gray-300 focus:ring-custom focus:border-custom"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              {/* <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Attachment</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed !rounded-button">
                  <div className="space-y-1 text-center">
                    <i className="fas fa-cloud-upload-alt text-gray-400 text-3xl mb-3"></i>
                    <div className="flex text-sm text-gray-600">
                      <label className="relative cursor-pointer bg-white rounded-md font-medium text-custom hover:text-custom focus-within:outline-none">
                        <span>Upload a file</span>
                        <input
                          type="file"
                          className="sr-only"
                          onChange={handleFileChange}
                        />
                      </label>
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">PNG, JPG, PDF up to 10MB</p>
                  </div>
                </div>
              </div> */}

              <CustomButton type="submit" >
              Submit
              </CustomButton>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-blue-50 rounded-4xl shadow-sm p-8">
              <h3 className="text-xl font-semibold mb-6 ml-10">
                Contact Information
              </h3>
              <div className="space-y-4 ml-14">
                <div className="flex items-start ">
                  <a
                    href="https://maps.app.goo.gl/A2KF66VsUhZRpWr29"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start hover:bg-gray-100 p-2 rounded-lg transition"
                  >
                    <div className="flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-custom w-5 mt-1"></i>
                    </div>
                    <div className="ml-3">
                      <p className="text-gray-900">123 Business Street</p>
                      <p className="text-gray-600">Suite 100</p>
                      <p className="text-gray-600">New York, NY 10001</p>
                    </div>
                  </a>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-phone text-custom w-5"></i>
                  <a
                    href="tel:+916392006343"
                    className="ml-3 text-gray-900 hover:text-custom"
                  >
                    +91 (639) 200-6343
                  </a>
                </div>
                <div className="flex items-center">
                  <i className="fas fa-envelope text-custom w-5"></i>
                  <a
                    href="mailto:anandyadav1782gmail.com"
                    className="ml-3 text-gray-900 hover:text-custom"
                  >
                    anandyadav1782gmail.com
                  </a>
                </div>
                <div className="flex items-start">
                  <i className="fas fa-clock text-custom w-5"></i>
                  <div className="ml-3">
                    <p className="text-gray-900">Monday - Saterday</p>
                    <p className="text-gray-600">10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 ml-10">
                <h4 className="text-lg font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4 ml-6">
                  <a href="#" className="text-gray-400 hover:text-custom">
                    <i className="fab fa-facebook-f text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-custom">
                    <i className="fab fa-twitter text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-custom">
                    <i className="fab fa-linkedin-in text-xl"></i>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-custom">
                    <i className="fab fa-instagram text-xl"></i>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-blue-50 rounded-4xl shadow-sm p-8">
              <h3 className="text-xl font-semibold mb-6">Our Location</h3>
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d114591.37848908069!2d82.811545!3d26.164762!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399056a315555555%3A0xed1c31eb99d0808f!2sBaba%20B%20K%20School!5e0!3m2!1sen!2sin!4v1744197813777!5m2!1sen!2sin"
                  width="100%"
                  height="256"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-64 border-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fixed bottom-4 right-4">
        <button className="!rounded-button bg-custom text-white p-4 shadow-lg hover:bg-opacity-90 transition-colors">
          <i className="fas fa-comments text-xl"></i>
        </button>
      </div>
    </div>
  );
};

export default Contact;
