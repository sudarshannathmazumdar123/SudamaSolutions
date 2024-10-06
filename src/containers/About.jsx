import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { urlFor, client } from "../client";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  const addEllipsis = (text) => {
    if (text.length > 100) {
      return text.substring(0, 100) + "...";
    } else {
      return text;
    }
  };

  return (
    <>
      <h2 className="text-5xl sm:text-3xl font-extrabold text-center text-secondary px-4 underline">
        About Us
      </h2>
      <div className="flex items-center justify-center mt-6">
        <div className="text-justify w-full max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="leading-relaxed text-2xl sm:text-base text-black">
            At Sudama Solutions Technologies Pvt Ltd, we are committed to delivering
            innovative digital solutions that help businesses thrive in
            today&apos;s fast-paced world. Specializing in a wide range of
            services such as Website Development, Android Development, and SaaS
            Products, we bring your ideas to life through cutting-edge
            technology and creativity. Our skilled team also offers UI/UX
            Development to ensure that your products are not only functional but
            visually compelling. We also provide comprehensive Video Editing
            services to enhance your digital presence, along with professional
            Training and Internship programs aimed at fostering the next
            generation of tech innovators. Whether you are a startup, a growing
            business, or an individual looking to enhance your skills, Sudama
            Solutions Pvt Ltd is your trusted partner for success.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;