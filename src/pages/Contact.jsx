import React, { useState } from "react";
import CustomButton from "../components/CustomButton.jsx";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import contactImage from "../assets/icon/boylaptop.json";
import { Player } from "@lottiefiles/react-lottie-player";




// Animation variants (safe for small screens)
const fadeInLeft = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, delay: 0.2 } },
};

const fadeInBottom = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
};

const textFadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    transition: { delay: i * 0.3 },
  }),
};

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    subject: "General Inquiry",
    message: "",
    attachment: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const templateParams = {
        fullName: formData.fullName,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        subject: formData.subject,
        message: formData.message,
      };

      await emailjs.send(
        "service_cvj9gzl",
        "template_vkaz48m",
        templateParams,
        "E3GYJD56fPv4ekq0g"
      );

      alert("Your message has been sent successfully!");
      setFormData({
        fullName: "",
        email: "",
        phoneNumber: "",
        subject: "General Inquiry",
        message: "",
        attachment: null,
      });
    } catch (error) {
      console.error("Error sending message: ", error);
      alert("There was an error sending your message.");
    }
  };

  return (
    <div className="bg-white overflow-hidden">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Section */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#F5FAFA] rounded-4xl shadow-sm p-8 overflow-hidden"
          >
            <motion.h2
              variants={textFadeIn}
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="text-2xl font-semibold mb-8"
            >
              Get in Touch
            </motion.h2>


            <form className="space-y-6" onSubmit={handleSubmit}>
              {["fullName", "email", "phoneNumber"].map((field, i) => (
                <div key={field}>
                  <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                    {field === "fullName" ? "Full Name" : field === "email" ? "Email Address" : "Phone Number"}
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <i
                        className={`fas ${field === "fullName"
                          ? "fa-user"
                          : field === "email"
                            ? "fa-envelope"
                            : "fa-phone"
                          } text-gray-400`}
                      ></i>
                    </div>
                    <input
                      type={field === "email" ? "email" : field === "phoneNumber" ? "tel" : "text"}
                      name={field}
                      value={formData[field]}
                      onChange={handleInputChange}
                      required
                      className="!rounded-button block w-full pl-10 py-3 border border-gray-300 focus:ring-custom focus:border-custom rounded-lg"
                      placeholder={`Enter your ${field}`}
                    />
                  </div>
                </div>
              ))}

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="!rounded-button block w-full py-3 border border-gray-300 focus:ring-custom focus:border-custom rounded-lg"
                >
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Billing Question</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  required
                  className="!rounded-button block w-full py-3 pl-4 border border-gray-300 focus:ring-custom focus:border-custom rounded-lg"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <CustomButton type="submit">Submit</CustomButton>
            </form>
          </motion.div>

          {/* Contact Info + Map */}
          <div className="space-y-8 overflow-hidden">
            {/* Contact Info */}
            <motion.div
              variants={fadeInBottom}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-blue-50 rounded-4xl shadow-sm p-8 overflow-hidden flex"
            >
              {/* Lottie Animation on the left */}
              <div className="w-32 h-32 mr-6 flex-shrink-0">
                <Player
                  autoplay
                  loop
                  src={contactImage}
                  style={{ height: '120%', width: '120%' }}
                />
              </div>

              {/* Info content */}
              <div className="flex-1">
                <motion.h3
                  variants={textFadeIn}
                  custom={1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="text-xl font-semibold mb-6"
                >
                  Contact Information
                </motion.h3>

                <div className="space-y-4">
                  <div className="flex items-start">
                    <a
                      href="https://maps.app.goo.gl/A2KF66VsUhZRpWr29"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-start hover:bg-gray-100 p-2 rounded-lg transition"
                    >
                      <i className="fas fa-map-marker-alt text-custom w-5 mt-1"></i>
                      <div className="ml-3">
                        <p className="text-gray-900">Lahurampur Mahul</p>
                        <p className="text-gray-600">Azamgarh</p>
                        <p className="text-gray-600">U.P In India 223225</p>
                      </div>
                    </a>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-phone text-custom w-5"></i>
                    <a href="tel:+918948557071" className="ml-3 text-gray-900 hover:text-custom">
                      +91 8948557071
                    </a>
                  </div>
                  <div className="flex items-center">
                    <i className="fas fa-envelope text-custom w-5"></i>
                    <a href="mailto:yourbbksv@gmail.com" className="ml-3 text-gray-900 hover:text-custom">
                      yourbbksv@gmail.com
                    </a>
                  </div>
                  <div className="flex items-start">
                    <i className="fas fa-clock text-custom w-5"></i>
                    <div className="ml-3">
                      <p className="text-gray-900">Monday - Saturday</p>
                      <p className="text-gray-600">10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flex space-x-4">
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
            </motion.div>


            {/* Google Map */}
            <motion.div
              variants={fadeInRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="bg-[#F5FAFA] rounded-4xl shadow-sm p-8 overflow-hidden"
            >
              <motion.h3
                variants={textFadeIn}
                custom={1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                className="text-xl font-semibold mb-6"
              >
                Our Location
              </motion.h3>
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d114591.37848908069!2d82.811545!3d26.164762!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399056a315555555%3A0xed1c31eb99d0808f!2sBaba%20B%20K%20School!5e0!3m2!1sen!2sin!4v1744197813777!5m2!1sen!2sin"
                  width="100%"
                  height="256"
                  allowFullScreen=""
                  loading="lazy"
                  className="w-full h-64 border-0"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
