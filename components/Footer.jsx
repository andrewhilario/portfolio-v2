import React from "react";
import Link from "next/link";
import {
  BsFacebook,
  BsGithub,
  BsLink,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
const Footer = () => {
  return (
    <div className="flex flex-col gap-5 items-center py-5">
      <div className="flex flex-row gap-10 py-10 text-slate-700">
        <div className="block">
          <Link href="/">
            <BsFacebook className="text-5xl cursor-pointer" />
          </Link>
        </div>
        <div className="block">
          <Link href="/">
            <BsTwitter className="text-5xl cursor-pointer" />
          </Link>
        </div>
        <div className="block">
          <Link href="/">
            <BsGithub className="text-5xl cursor-pointer" />
          </Link>
        </div>
        <div className="block">
          <Link href="/">
            <BsLinkedin className="text-5xl cursor-pointer" />
          </Link>
        </div>
      </div>
      <p className="text-xl font-semibold text-center">
        Copyright © 2023 andrewhilario. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
