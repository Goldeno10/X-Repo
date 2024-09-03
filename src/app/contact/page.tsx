import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-400 to-blue-500 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We&rsquo;d love to hear from you! Whether you have a question about
          features, pricing, or anything else, our team is ready to answer all
          your questions.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold text-gray-800 text-center mb-8">
            Get In Touch
          </h2>
          <form
            className="space-y-6"
            action="https://formspree.io/f/mzzpwzvn"
            method="POST"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="name"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="email"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="subject"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="message"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-blue-500 text-white font-semibold hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Additional Contact Information Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold text-gray-800 mb-6">
            Contact Information
          </h2>
          <p className="text-lg text-gray-600 max-w-xl mx-auto mb-12">
            You can also reach out to us directly through any of the following
            contact details:
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-10">
            <div className="flex items-center justify-center space-x-4 text-gray-700">
              <FaPhone className="w-6 h-6 text-green-500" />
              <span>+2347013013462</span>
            </div>
            <div className="flex items-center justify-center space-x-4 text-gray-700">
              <FaEnvelope className="w-6 h-6 text-green-500" />
              <span>info@company.com</span>
            </div>
            <div className="flex items-center justify-center space-x-4 text-gray-700">
              <FaMapMarkerAlt className="w-6 h-6 text-green-500" />
              <span>1234 Street Name, City, Country</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUsPage;
