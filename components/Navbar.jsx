import React, { useState } from "react";
import Link from "next/link";
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiFillFacebook,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
} from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <>
      <nav className="flex items-center justify-between px-10 py-5 lg:px-44">
        <div className="block">
          <h1 className="text-2xl md:text-4xl font-extrabold">Andrew</h1>
          <h1 className="text-2xl md:text-4xl font-extrabold">Hilario.</h1>
        </div>
        <ul className="md:flex items-center text-xl gap-6 hidden">
          <li>
            <Link href="#about" scroll={false}>
              <h1 className="font-extrabold">About</h1>
            </Link>
          </li>
          <li>
            <Link href="#portfolio" scroll={false}>
              <h1 className="font-extrabold">Portfolio</h1>
            </Link>
          </li>
          <li>
            <Link href="#contact" scroll={false}>
              <h1 className="font-extrabold">Contact</h1>
            </Link>
          </li>
          <li>
            <Link href="https://drive.google.com/uc?export=download&id=1Igmh5G7WFxNU4EJF7ZtTw6TLEZvIzDXh">
              <h1 className="font-extrabold px-4 py-2 border-2 border-slate-900 rounded-lg hover:bg-slate-700 ease-in duration-200 hover:text-white">
                Resume
              </h1>
            </Link>
          </li>
        </ul>
        <div
          onClick={handleNav}
          className="md:hidden block text-2xl cursor-pointer"
        >
          <AiOutlineMenu />
        </div>
      </nav>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/80" : ""
        }
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[75%] h-screen bg-white p-10 ease-in duration-500 z-20"
              : "fixed left-[-100%] top-0 w-[75%] h-screen bg-white p-10 ease-in duration-500 z-30"
          }
        >
          <div className="flex justify-between">
            <Link href="/" className="block pb-5 ">
              <h1 className="text-2xl font-extrabold">Andrew</h1>
              <h1 className="text-2xl font-extrabold">Hilario.</h1>
            </Link>
            <div className="p-5 cursor-pointer" onClick={handleNav}>
              <AiOutlineClose className="text-2xl font-extrabold cursor-pointer" />
            </div>
          </div>
          <p className="text-md font-medium">
            Hello, Let's build together a beautiful website.
          </p>
          <hr className="h-1 my-8 bg-gray-200 border-0" />
          <ul className="flex flex-col gap-8 text-xl ">
            <li>
              <Link href="#about" scroll={false}>
                <h1 className="font-extrabold">About</h1>
              </Link>
            </li>
            <li>
              <Link href="" scroll={false}>
                <h1 className="font-extrabold">Portfolio</h1>
              </Link>
            </li>
            <li>
              <Link href="" scroll={false}>
                <h1 className="font-extrabold">Contact</h1>
              </Link>
            </li>
            <li>
              <Link href="" scroll={false}>
                <h1 className="font-extrabold">Resume</h1>
              </Link>
            </li>
          </ul>
          <h1 className="font-extrabold text-2xl pt-[40vh] pb-5">
            Let's Connect
          </h1>
          <div className="flex item-center justify-around gap-5">
            <Link href="https://www.facebook.com/andrew.hilario.0412">
              <AiFillFacebook className="text-4xl font-extrabold " />
            </Link>
            <Link href="https://twitter.com/ainzzs4ma">
              <AiFillTwitterCircle className="text-4xl font-extrabold " />
            </Link>
            <Link href="https://www.linkedin.com/in/hilarioandrew12/">
              <AiFillLinkedin className="text-4xl font-extrabold " />
            </Link>
            <Link href="https://github.com/andrewhilario/">
              <AiFillGithub className="text-4xl font-extrabold " />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
