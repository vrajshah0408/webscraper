/** @format */

import Image from "next/image";
import Link from "next/link";
import React from "react";

const navIcons = [
  { src: "/assets/icons/search.svg", alt: "search" },
  { src: "/assets/icons/user.svg", alt: "user" },
  { src: "/assets/icons/black-heart.svg", alt: "heart" },
];
const Navbar = () => {
  return (
    <header className="w-full">
      <nav className="nav">
        <Link href="/" className="flex items-center gap-1">
          <Image
            src="/assets/icons/logo.svg"
            width={27}
            height={27}
            alt="logo"
          ></Image>
          <p className="" nav-logo>
            Web<span className="text-primary">Scraper</span>
          </p>
        </Link>
        <div className="flex items-center gap-5"></div>
        {navIcons.map((icon) =>(
          <Image
            src={icon.src}
            key={icon.alt}
            width={28}
            height={28}
            alt={icon.alt}
            className="object-contain"
          ></Image>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
