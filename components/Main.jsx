import React from "react";
import Image from "next/image";

const Main = () => {
  return (
    <>
      <div className="flex flex-col items-start px-10 lg:px-44">
        <div className="mt-[10rem] md:mt-[5rem] flex flex-col md:flex-row md:items-center md:justify-between w-full">
          <h1 className="text-6xl font-extrabold m-auto py-10 md:text-7xl lg:text-8xl">
            Hi, I'm <span>Andrew</span>, a <span>Frontend Developer</span>
          </h1>

          <Image
            src="/assets/MainImage.svg"
            width={100}
            height={100}
            className="w-1/2 h-1/2 lg:w-2/3 lg:h-1/2 lg:object-contain ml-20"
          />
        </div>
      </div>
    </>
  );
};

export default Main;
