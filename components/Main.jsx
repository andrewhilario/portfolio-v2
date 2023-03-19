import React from "react";
import Image from "next/image";

const Main = () => {
  return (
    <>
      <div className="flex flex-col items-start h-[50vh] px-10 lg:px-20">
        <div className="mt-[10rem] flex flex-col md:flex-row md:items-center md:justify-between w-full">
          <h1 className="text-6xl font-extrabold m-auto py-10 md:text-7xl lg:text-8xl">
            Hi, I'm <span>Andrew</span>, a <span>Frontend Developer</span>
          </h1>
          <Image
            src="/assets/MainImage.svg"
            width={100}
            height={100}
            className="w-1/2 h-1/2 md:w-1/2 md:h-2/3"
          />
        </div>
      </div>
    </>
  );
};

export default Main;
