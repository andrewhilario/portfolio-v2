import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaReact } from 'react-icons/fa';
import { TbApi, TbBrandFirebase, TbBrandVite } from 'react-icons/tb';
import {
  SiTailwindcss,
  SiDjango,
  SiWordpress,
  SiPostgresql,
  SiPhp,
  SiElementor,
  SiWoo,
  SiGooglemaps,
  SiTwilio,
  SiHtml5,
  SiCss3,
  SiJquery,
  SiChakraui
} from 'react-icons/si';
import { TbBrandNextjs, TbBrandMongodb, TbBrandPrisma } from 'react-icons/tb';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  return (
    <div id='portfolio' className='flex flex-col px-10 md:px-32 lg:px-44'>
      <div className='text-2xl font-extrabold w-full'>
        <h1 className='text-5xl md:text-6xl lg:text-7xl py-5 font-extrabold flex items-center w-full'>
          <span className='w-full  h-2 bg-black block'></span>
          <span className='mx-4'>Portfolio</span>
          <span className='w-full md:w-[150px] lg:w-[50px] h-2 bg-black block'></span>
        </h1>
      </div>
      <div className='w-full flex flex-col md:px-10 gap-5 md:gap-[5rem] py-10'>
        {/* Kawaiifu Web */}
        <div className='w-full flex flex-col md:flex-row gap-4 md:gap-[2.5rem] md:justify-between'>
          <div className='w-full block md:w-1/2 h-[200px] md:h-[350px] lg:h-[450px] rounded-lg shadow-lg transition ease-in duration-100 hover:border-2 hover:border-slate-700'>
            <Image
              src='/assets/kawaiifu.png'
              width={1920}
              height={1080}
              quality={100}
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
          <div className='w-full md:w-1/2 flex flex-col gap-4 py-4'>
            <h1 className='font-extrabold text-3xl hover:text-cyan-500 ease-in duration-300'>
              Kawaiifu.
            </h1>
            <p className='text-lg font-semibold'>
              Kawaiifu is a Anime Streaming Website that uses the Consumet API
              to get the data of the anime. You can also search for an anime and
              it will show you the details of the anime.
            </p>
            <div className='flex flex-wrap md:flex-nowrap items-center w-full md:w-3/4 gap-5'>
              <div className='flex items-center font-bold text-md gap-2 p-2 border-2 border-slate-900 text-slate-900 rounded-lg cursor-pointer hover:bg-[#61DBFB] ease-in duration-150 hover:text-white'>
                <p>ReactJS</p>
                <FaReact className='text-4xl ' />
              </div>
              <div className=' flex items-center font-bold text-md gap-2 p-2 border-2 border-slate-900 rounded-lg cursor-pointer hover:bg-[#4FD1C5] text-slate-900 ease-in duration-150 hover:text-white'>
                <p>Chakra UI</p>
                <SiChakraui className='text-4xl ' />
              </div>
              <div className='flex items-center font-bold text-md gap-2 p-2 border-2 border-slate-900 text-slate-900 rounded-lg cursor-pointer hover:bg-[#FC3D6A] ease-in duration-150 hover:text-white'>
                <p>Consumet.org</p>
                <TbApi className='text-4xl ' />
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <Link href='https://kawaiifu-8e5f4.web.app/'>
                <p className='px-6 py-2 bg-green-500 text-white font-semibold rounded-lg ease-in duration-100 hover:bg-green-700'>
                  Live
                </p>
              </Link>
              <Link href='https://github.com/andrewhilario/kawaiifu'>
                <p className='px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg ease-in duration-100 hover:bg-gray-700'>
                  Repo
                </p>
              </Link>
            </div>
          </div>
        </div>
        {/* POS System */}
        <div className='w-full flex flex-col md:flex-row-reverse gap-4 md:gap-[2.5rem] md:justify-between'>
          <div className='block md:w-1/2 h-[200px] md:h-[350px] lg:h-[450px] rounded-lg shadow-lg transition ease-in duration-100 hover:border-2 hover:border-slate-700'>
            <Image
              src='/assets/possystem.png'
              width={1920}
              height={1080}
              quality={100}
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
          <div className='md:w-1/2 flex flex-col gap-4 py-4'>
            <h1 className='font-extrabold text-3xl hover:text-[#474973] transition ease-in duration-100'>
              POS System
            </h1>
            <p className='text-lg font-semibold md:w-full'>
              This is a personal project of mine. I made this POS System for my
              own use. I made this using Django and Tailwind CSS. I also use
              Chart JS for the graphs. This system is deployed on Heroku. I also
              made a repo for this project. You can check it out.
            </p>
            <div className='flex flex-wrap md:flex-nowrap items-center w-full md:w-3/4 gap-5'>
              <div className='flex items-center font-bold text-md gap-2 p-2 border-2 border-slate-900 text-slate-900 rounded-lg cursor-pointer hover:bg-[#092e20] ease-in duration-150 hover:text-white'>
                <p>Django</p>
                <SiDjango className='text-4xl' />
              </div>
              <div className=' flex items-center font-bold text-md gap-2 p-2 border-2 border-slate-900 rounded-lg cursor-pointer hover:bg-[#38bdf8] text-slate-900 ease-in duration-150 hover:text-white'>
                <p>Tailwind CSS</p>
                <SiTailwindcss className='text-4xl' />
              </div>
              <div className='flex items-center font-bold text-md gap-2 p-2 border-2 border-slate-900 text-slate-900 rounded-lg cursor-pointer hover:bg-[#0064a5] ease-in duration-150 hover:text-white'>
                <p>PostgreSQL</p>
                <SiPostgresql className='text-4xl ' />
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <Link href='https://pointofsales.up.railway.app/'>
                <p className='px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700'>
                  Live
                </p>
              </Link>
              <Link href='https://github.com/andrewhilario/POS_System_Rework'>
                <p className='px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-700'>
                  Repo
                </p>
              </Link>
            </div>
          </div>
        </div>
        {/* Panda Pages */}
        <div className='w-full flex flex-col md:flex-row gap-4 md:gap-[2.5rem] md:justify-between'>
          <div className='block md:w-1/2 h-[200px] md:h-[350px] lg:h-[450px] rounded-lg shadow-lg transition ease-in duration-100 hover:border-2 hover:border-slate-700'>
            <Image
              src='/assets/pandapages.png'
              width={1920}
              height={1080}
              quality={100}
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
          <div className='md:w-1/2 flex flex-col gap-4 py-4'>
            <h1 className='font-extrabold text-3xl hover:text-blue-600 transition ease-in duration-100'>
              Panda Pages
            </h1>
            <p className='text-lg font-semibold'>
              Panda Pages is a Manga Reading Website that I made using Vite +
              React JS. I also used Chakra UI for the styles. I use Consumet.org
              API for the Manga data. It doesn't have authentication yet but I
              will add it in the future. I also made a repo for this project.
              You can check it out.
            </p>
            <div className='flex flex-wrap md:flex-nowrap items-center w-full md:w-3/4 gap-5'>
              <div className='flex items-center font-bold text-md gap-2 p-2 border-2 border-slate-900 text-slate-900 rounded-lg cursor-pointer hover:bg-purple-600 ease-in duration-150 hover:text-white'>
                <p>Vite</p>
                <TbBrandVite className='text-4xl' />
              </div>

              <div className=' flex items-center font-bold text-md gap-2 p-2 border-2 border-slate-900 rounded-lg cursor-pointer hover:bg-[#4FD1C5] text-slate-900 ease-in duration-150 hover:text-white'>
                <p>Chakra UI</p>
                <SiChakraui className='text-4xl ' />
              </div>
              <div className='flex items-center font-bold text-md gap-2 p-2 border-2 border-slate-900 text-slate-900 rounded-lg cursor-pointer hover:bg-[#FC3D6A] ease-in duration-150 hover:text-white'>
                <p>Consumet.org</p>
                <TbApi className='text-4xl ' />
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <Link href='https://pandapagesmanga.web.app/'>
                <p className='px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700'>
                  Live
                </p>
              </Link>
              <Link href='https://github.com/andrewhilario/pandapages'>
                <p className='px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-700'>
                  Repo
                </p>
              </Link>
            </div>
          </div>
        </div>
        {/* Servicify */}
        <div className='w-full flex flex-col md:flex-row-reverse gap-4 md:gap-[2.5rem] md:justify-between'>
          <div className='block md:w-1/2 h-[200px] md:h-[350px] lg:h-[450px] rounded-lg shadow-lg transition ease-in duration-100 hover:border-2 hover:border-slate-700'>
            <Image
              src='/assets/servicify.png'
              width={1920}
              height={1080}
              quality={100}
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
          <div className='md:w-1/2 flex flex-col gap-4 py-4'>
            <h1 className='font-extrabold text-3xl hover:text-[#507C59] transition ease-in duration-100'>
              Servicify
            </h1>
            <p className='text-lg font-semibold'>
              This is a Capstone Project for my college. I made this using
              Django with HTML, CSS, and jQuery. It is a web application that
              helps people find, book, rate, chat and review a service provider.
              It uses twilio for the SMS API. It also uses Google Maps API for
              the location of the service provider.
            </p>
            <div className='flex flex-wrap items-center w-full md:w-3/4 gap-5'>
              <div className='flex items-center font-bold text-md gap-2 p-2 border-2 border-slate-900 text-slate-900 rounded-lg cursor-pointer hover:bg-[#092e20] ease-in duration-150 hover:text-white'>
                <p>Django</p>
                <SiDjango className='text-4xl' />
              </div>
              <div className=' flex items-center font-bold text-md gap-2 p-2 border-2 border-slate-900 rounded-lg cursor-pointer hover:bg-[#f06529] text-slate-900 ease-in duration-150 hover:text-white'>
                <p>HTML5</p>
                <SiHtml5 className='text-4xl' />
              </div>
              <div className=' flex items-center font-bold text-md gap-2 p-2 border-2 border-slate-900 rounded-lg cursor-pointer hover:bg-[#2965f1] text-slate-900 ease-in duration-150 hover:text-white'>
                <p>CSS3</p>
                <SiCss3 className='text-4xl' />
              </div>
              <div className=' flex items-center font-bold text-md gap-2 p-2 border-2 border-slate-900 rounded-lg cursor-pointer hover:bg-[#0769ad] text-slate-900 ease-in duration-150 hover:text-white'>
                <p>jQuery</p>
                <SiJquery className='text-4xl' />
              </div>
              <div className=' flex items-center font-bold text-md gap-2 p-2 border-2 border-slate-900 rounded-lg cursor-pointer hover:bg-[#1EA362] text-slate-900 ease-in duration-150 hover:text-white'>
                <p>Google Maps API</p>
                <SiGooglemaps className='text-4xl' />
              </div>
              <div className=' flex items-center font-bold text-md gap-2 p-2 border-2 border-slate-900 rounded-lg cursor-pointer hover:bg-[#F22F46] text-slate-900 ease-in duration-150 hover:text-white'>
                <p>Twilio SMS API</p>
                <SiTwilio className='text-4xl' />
              </div>
              <div className='flex items-center font-bold text-md gap-2 p-2 border-2 border-slate-900 text-slate-900 rounded-lg cursor-pointer hover:bg-[#0064a5] ease-in duration-150 hover:text-white'>
                <p>PostgreSQL</p>
                <SiPostgresql className='text-4xl ' />
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <Link href='https://servicify.herokuapp.com/'>
                <p className='px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700'>
                  Live
                </p>
              </Link>
              <Link href='https://github.com/andrewhilario/servicify_web'>
                <p className='px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-700'>
                  Repo
                </p>
              </Link>
            </div>
          </div>
        </div>
        {/* Social Media App */}
        <div className='w-full flex flex-col md:flex-row gap-4 md:gap-[2.5rem] md:justify-between'>
          <div className='block md:w-1/2 h-[200px] md:h-[350px] lg:h-[450px] rounded-lg shadow-lg transition ease-in duration-100 hover:border-2 hover:border-slate-700'>
            <Image
              src='/assets/socialmediaappchakraui.png'
              width={1920}
              height={1080}
              quality={100}
              className='w-full h-full object-cover rounded-lg'
            />
          </div>
          <div className='md:w-1/2 flex flex-col gap-4 py-4'>
            <h1 className='font-extrabold text-3xl hover:text-sky-500 transition ease-in duration-100'>
              Socials App
            </h1>
            <p className='text-lg font-semibold'>
              This is a personal project that I made using Vite + React JS, with
              Firebase for the backend and Database and also Chakra UI for the
              components. It is a Social Media website that allows users to
              post, like, and comment on posts. This project is not yet fully
              finished but I am planning to add more features in the future.
            </p>
            <div className='flex flex-wrap md:flex-nowrap items-center w-full md:w-3/4 gap-5'>
              <div className='flex items-center font-bold text-md gap-2 p-2 border-2 border-slate-900 text-slate-900 rounded-lg cursor-pointer hover:bg-purple-600 ease-in duration-150 hover:text-white'>
                <p>Vite</p>
                <TbBrandVite className='text-4xl' />
              </div>
              <div className='flex items-center font-bold text-md gap-2 p-2 border-2 border-slate-900 text-slate-900 rounded-lg cursor-pointer hover:bg-yellow-400 ease-in duration-150 hover:text-white'>
                <p>Firebase</p>
                <TbBrandFirebase className='text-4xl' />
              </div>
              <div className=' flex items-center font-bold text-md gap-2 p-2 border-2 border-slate-900 rounded-lg cursor-pointer hover:bg-[#4FD1C5] text-slate-900 ease-in duration-150 hover:text-white'>
                <p>Chakra UI</p>
                <SiChakraui className='text-4xl ' />
              </div>
            </div>
            <div className='flex items-center gap-4'>
              <Link href='https://socialmedia-chakraui.vercel.app/'>
                <p className='px-6 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-700'>
                  Live
                </p>
              </Link>
              <Link href='https://github.com/andrewhilario/socialmedia-chakraui'>
                <p className='px-6 py-2 bg-gray-500 text-white font-semibold rounded-lg hover:bg-gray-700'>
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
