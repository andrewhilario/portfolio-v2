import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="bg-[#292929] text-white px-10 lg:px-44">
      <div className="flex flex-col">
        <div className="text-2xl font-extrabold relative w-full">
          <h1 className="text-5xl md:text-6xl lg:text-7xl py-5 font-extrabold flex items-center w-full">
            <span className="w-full md:w-[150px] lg:w-[50px] h-2 bg-white block"></span>
            <span className="mx-4">About</span>
            <span className="w-full h-2 bg-white block"></span>
          </h1>
        </div>
        <p className="w-full text-xl font-semibold md:text-2xl lg:text-3xl py-4 md:py-6 tracking-wide leading-relaxed lg:leading-[3.5rem]">
          Hello and welcome to my portfolio. I am Andrew, a Front-End Developer.
          I have 3 years of experience in Web Development and 2 years in
          WordPress Development. In terms of tech stack, I know some HTML, CSS,
          and JavaScript, as well as Django, a Python Web framework. Sometimes I
          also create React JS and Next JS projects for my personal interest to
          enhance my skills. Below are my tech stacks that I am proficient with.
        </p>
        <div className="flex flex-row items-center py-10 md:py-14 justify-between">
          <div className="w-10 h-10 md:w-20 md:h-20 ">
            <Image
              src="/assets/html-1.svg"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-10 h-10 md:w-20 md:h-20 ">
            <Image
              src="/assets/css-3.svg"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-10 h-10 md:w-20 md:h-20 ">
            <Image
              src="/assets/django.svg"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-10 h-10 md:w-20 md:h-20 ">
            <Image
              src="/assets/logo-javascript.svg"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-10 h-10 md:w-20 md:h-20 ">
            <Image
              src="/assets/tailwindcss.svg"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-10 h-10 md:w-20 md:h-20 ">
            <Image
              src="/assets/wordpress-icon.svg"
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
