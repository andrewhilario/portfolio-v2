import React from "react";
import Link from "next/link";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div id="portfolio" className="flex flex-col px-10 lg:px-44">
      <div className="text-2xl font-extrabold w-full">
        <h1 className="text-5xl md:text-6xl lg:text-7xl py-5 font-extrabold flex items-center w-full">
          <span className="w-full  h-2 bg-black block"></span>
          <span className="mx-4">Portfolio</span>
          <span className="w-full md:w-[150px] lg:w-[50px] h-2 bg-black block"></span>
        </h1>
      </div>
      <div className="flex flex-col px-10 lg:px-44 gap-5 py-10">
        <div className="flex flex-col">
          <div className="block w-full h-[200px] rounded-lg shadow-lg transition ease-in duration-100 hover:border-2 hover:border-slate-700">
            <Image
              src="/assets/foxyanime.png"
              width={1920}
              height={1080}
              quality={100}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-extrabold text-3xl hover:text-[#FF1616] ease-in duration-300">
              FoxyAnime.
            </h1>
            <p className="text-lg font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, quibusdam?
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://foxyanime.netlify.app/">
                <p className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg ease-in duration-100 hover:bg-green-700">
                  Live
                </p>
              </Link>
              <Link href="/">
                <p className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg ease-in duration-100 hover:bg-gray-700">
                  Repo
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="block w-full h-[200px] rounded-lg shadow-lg transition ease-in duration-100 hover:border-2 hover:border-slate-700">
            <Image
              src="/assets/possystem.png"
              width={1920}
              height={1080}
              quality={100}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-extrabold text-3xl">POS System</h1>
            <p className="text-lg font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, quibusdam?
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://possystem.herokuapp.com/">
                <p className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg">
                  Live
                </p>
              </Link>
              <Link href="/">
                <p className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg">
                  Repo
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
