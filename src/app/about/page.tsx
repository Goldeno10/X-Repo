import Image from "next/image";
import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const AboutPage = () => {
  const members = [
    {
      id: 1,
      name: "Muhammad Ibrahim",
      position: "Software Engineer",
      description: "Developed the front-end and back-end of the application.",
      thumbnail: "/me.png",
    },
    {
      id: 2,
      name: "Idris Tosin",
      position: "Computer Engineer",
      description:
        "Prepared the project documentation and presentation slides, and contributed to the front-end development of the application.",
      thumbnail: "/idris.png",
    },
    {
      id: 3,
      name: "Ephziba Buela",
      position: "Cloud Engineer",
      description:
        "Prepared the project documentation and presentation slides.",
      thumbnail: "/ephzy.png",
    },
    {
      id: 4,
      name: "Daniel Alayande",
      position: "Computer Engineer",
      description:
        "Gathered the requirements and prepared the project documentation.",
      thumbnail: "/Daniel.png",
    },
    {
      id: 5,
      name: "Dahiru Dahiru",
      position: "Computer Engineer",
      description:
        "Contributed to requirements gathering and prepared the project documentation.",
      thumbnail: "/Dahir.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We are dedicated to providing the best solutions for your needs. Our
          team is passionate about creating impactful products that make a
          difference.
        </p>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-6 text-center bg-white">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
          Our Mission
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our mission is to innovate and deliver high-quality services that
          empower our students to achieve their goals. We strive to foster a
          culture of excellence, collaboration, and continuous learning.
        </p>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-gray-50">
        <h2 className="text-4xl font-semibold text-center text-gray-800 mb-12">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {/* Dummy Team Members */}
          {members.map((member) => (
            <div
              key={member.id}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <Image
                src={
                  member.thumbnail
                    ? member.thumbnail
                    : "https://via.placeholder.com/150?text=Member+${member.name}"
                }
                alt={`Team Member ${member.name}`}
                className="w-32 h-32 mx-auto rounded-full mb-4"
                width={100}
                height={100}
              />
              <h3 className="text-xl font-bold text-gray-700">{member.name}</h3>
              <p className="text-gray-500">{member.position}</p>
              <p className="text-gray-600 mt-2">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 bg-white text-center">
        <h2 className="text-4xl font-semibold text-gray-800 mb-6">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 max-w-xl mx-auto mb-8">
          Have questions or want to work with us? We&apos;d love to hear from
          you! Reach out to us through any of the following ways:
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-10">
          <div className="flex items-center justify-center space-x-4 text-gray-700">
            <FaPhone className="w-6 h-6 text-blue-500" />
            <span>+2347013013462</span>
          </div>
          <div className="flex items-center justify-center space-x-4 text-gray-700">
            <FaEnvelope className="w-6 h-6 text-blue-500" />
            <span>info@xlibrary.com</span>
          </div>
          <div className="flex items-center justify-center space-x-4 text-gray-700">
            <FaMapMarkerAlt className="w-6 h-6 text-blue-500" />
            <span>1234 Street Name, City, Country</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
