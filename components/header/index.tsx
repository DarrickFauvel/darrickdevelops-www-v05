"use client";

import { useEffect, useState } from "react";

import HeaderNav from "./header-nav";
import { brand } from "../../constants/config";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`w-full z-50 top-0 fixed transition-all duration-300 ease-in-out bg-[#4c399d]/80 ${
        scrolled
          ? "py-2 shadow-md! backdrop-blur-sm!"
          : "bg-transparent py-3 sm:py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        <div>
          <a className="flex items-center gap-2 text-white" href="/">
            <span className="text-2xl">&lt;/&gt;</span>
            <span className="leading-4 text-xl">{brand.name}</span>
          </a>
        </div>

        <HeaderNav />
      </div>
    </header>
  );
};

export default Header;
