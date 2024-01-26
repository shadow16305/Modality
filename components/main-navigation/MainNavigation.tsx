"use client";

import { useState, useEffect } from "react";

import Image from "next/image";
import logo from "../../assets/logo.svg";
import Link from "next/link";

const navlinks = [
  {
    id: "n1",
    href: "",
    text: "about us",
  },
  {
    id: "n2",
    href: "",
    text: "services",
  },
  {
    id: "n3",
    href: "",
    text: "pricing",
  },
];

const MainNavigation = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed left-1/2 top-0 z-50 w-screen -translate-x-1/2 bg-dark-blue">
      <div
        className={`text-white container mx-auto flex items-center justify-between pb-4 text-base uppercase ${scrolled ? "pt-4" : "pt-8"} transition-all duration-300`}
      >
        <Link href="/">
          <Image
            src={logo}
            alt="modality logo"
            priority
            width={220}
            height={31}
          />
        </Link>
        <ul className="flex gap-x-28">
          {navlinks.map((link, index) => (
            <li key={index} className="group relative">
              <Link href={link.href}>{link.text}</Link>
              <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-cyan transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </ul>
        <button className="border-less-dark-blue group relative h-12 w-[170px] rounded-lg border py-3 uppercase">
          <span className="absolute left-0 top-0 -z-10 h-full w-0 rounded-lg bg-cyan transition-all duration-300 group-hover:w-full"></span>
          <span>call us</span>
        </button>
      </div>
    </div>
  );
};

export default MainNavigation;
