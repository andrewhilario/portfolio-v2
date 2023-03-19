import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import {
  SiTailwindcss,
  SiDjango,
  SiWordpress,
  SiPostgresql,
  SiPhp,
  SiElementor,
  SiWoo,
} from "react-icons/si";
const Portfolio = () => {
  return (
    <div id="portfolio" className="flex flex-col px-10 md:px-32 lg:px-44">
      <div className="text-2xl font-extrabold w-full">
        <h1 className="text-5xl md:text-6xl lg:text-7xl py-5 font-extrabold flex items-center w-full">
          <span className="w-full  h-2 bg-black block"></span>
          <span className="mx-4">Portfolio</span>
          <span className="w-full md:w-[150px] lg:w-[50px] h-2 bg-black block"></span>
        </h1>
      </div>
      <div className="flex flex-col px-10 gap-5 md:gap-[5rem] py-10">
        <div className="flex flex-col md:flex-row gap-4 md:gap-[2.5rem] md:justify-between">
          <div className="block w-full h-[200px] md:h-[350px] lg:h-[450px] rounded-lg shadow-lg transition ease-in duration-100 hover:border-2 hover:border-slate-700">
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
              FoxyAnime is a Anime Streaming Website that uses the Consumet API
              to get the data of the anime. You can also search for an anime and
              it will show you the details of the anime.
            </p>
            <div className="flex flex-wrap md:flex-nowrap items-center w-full md:w-3/4 gap-5">
              <div className="flex items-center font-bold text-md gap-2 p-2 border-2 border-slate-900 text-slate-900 rounded-lg cursor-pointer hover:bg-[#61DBFB] ease-in duration-150 hover:text-white">
                <p>ReactJS</p>
                <FaReact className="text-4xl " />
              </div>
              <div className=" flex items-center font-bold text-md gap-2 p-2 border-2 border-slate-900 rounded-lg cursor-pointer hover:bg-[#38bdf8] text-slate-900 ease-in duration-150 hover:text-white">
                <p>Tailwind CSS</p>
                <SiTailwindcss className="text-4xl " />
              </div>
              <div className="flex items-center font-bold text-md gap-2 p-2 border-2 border-slate-900 text-slate-900 rounded-lg cursor-pointer hover:bg-[#FC3D6A] ease-in duration-150 hover:text-white">
                <p>Consumet.org</p>
                <TbApi className="text-4xl " />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Link href="https://foxyanime.netlify.app/">
                <p className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg ease-in duration-100 hover:bg-green-700">
                  Live
                </p>
              </Link>
              <Link href="https://github.com/andrewhilario/foxyanime">
                <p className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg ease-in duration-100 hover:bg-gray-700">
                  Repo
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-[2.5rem] md:justify-between">
          <div className="block w-full h-[200px] md:h-[350px] lg:h-[450px] rounded-lg shadow-lg transition ease-in duration-100 hover:border-2 hover:border-slate-700">
            <Image
              src="/assets/possystem.png"
              width={1920}
              height={1080}
              quality={100}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-extrabold text-3xl hover:text-[#474973] transition ease-in duration-100">
              POS System
            </h1>
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
              <Link href="https://github.com/andrewhilario/POS_System_Rework">
                <p className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg">
                  Repo
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4 md:gap-[2.5rem] md:justify-between">
          <div className="block w-full h-[200px] md:h-[350px] lg:h-[450px] rounded-lg shadow-lg transition ease-in duration-100 hover:border-2 hover:border-slate-700">
            <Image
              src="/assets/unamart.png"
              width={1920}
              height={1080}
              quality={100}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-extrabold text-3xl hover:text-blue-600 transition ease-in duration-100">
              Unamart E-Commerce
            </h1>
            <p className="text-lg font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, quibusdam?
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://unamartshoppingmall.com/">
                <p className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg">
                  Live
                </p>
              </Link>
              <Link href="https://github.com/andrewhilario/unamartshoppingmall">
                <p className="px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg">
                  Repo
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse gap-4 md:gap-[2.5rem] md:justify-between">
          <div className="block w-full h-[200px] md:h-[350px] lg:h-[450px] rounded-lg shadow-lg transition ease-in duration-100 hover:border-2 hover:border-slate-700">
            <Image
              src="/assets/servicify.png"
              width={1920}
              height={1080}
              quality={100}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-4 py-4">
            <h1 className="font-extrabold text-3xl hover:text-[#507C59] transition ease-in duration-100">
              Servicify
            </h1>
            <p className="text-lg font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, quibusdam?
            </p>
            <div className="flex items-center gap-4">
              <Link href="https://servicify.herokuapp.com/">
                <p className="px-6 py-2 bg-green-500 text-white font-semibold rounded-lg">
                  Live
                </p>
              </Link>
              <Link href="https://github.com/andrewhilario/servicify_web">
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
