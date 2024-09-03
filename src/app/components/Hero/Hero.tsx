import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: "url(/e-library-students.webp)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-4xl font-bold">
            {" "}
            Welcome to Your Learning Community!!!{" "}
          </h1>
          <p className="mb-5">
            Explore, share, and discuss educational materials in a space built
            for learners like you. Dive into new knowledge and connect through
            collaboration!
          </p>
          <Link href="/repository" className="btn btn-primary">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
