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
          <Link href="https://www.facebook.com/andrew.hilario.0412">
            <BsFacebook className="text-5xl cursor-pointer" />
          </Link>
        </div>
        <div className="block">
          <Link href="https://twitter.com/ainzzs4ma">
            <BsTwitter className="text-5xl cursor-pointer" />
          </Link>
        </div>
        <div className="block">
          <Link href="https://github.com/andrewhilario/">
            <BsGithub className="text-5xl cursor-pointer" />
          </Link>
        </div>
        <div className="block">
          <Link href="https://www.linkedin.com/in/hilarioandrew12/">
            <BsLinkedin className="text-5xl cursor-pointer" />
          </Link>
        </div>
      </div>
      <p className="text-xl font-semibold text-center">
        Copyright © 2023{" "}
        <Link href="https://andrewhilario.vercel.app/" className="">
          andrewhilario.tech
        </Link>
        . All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
