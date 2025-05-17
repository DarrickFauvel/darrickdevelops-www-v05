"use client";

import React, { useRef, useState } from "react";

import { Icon } from "@iconify-icon/react";
import MobileMenu from "../menu/mobile";
import WideMenu from "../menu/wide";
import { data } from "../menu/menu-data";
import { useClickOutside } from "../../hooks/useClickOutside";

const HeaderNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => setMenuOpen(false));

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    const link = event.currentTarget.getAttribute("data-link");
    if (link) {
      document.querySelector(link)?.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      <WideMenu onClick={handleMenuClick} />

      {/* Hamburger menu START */}
      <div className="block lg:hidden">
        <button onClick={() => setMenuOpen(true)}>
          <Icon icon="famicons:menu" className="text-4xl text-white" />
        </button>
      </div>
      {/* Hamburger menu END */}

      <div
        className={`fixed inset-0 z-70 min-h-screen bg-black bg-opacity-70 ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        } transition-opacity lg:hidden`}
      >
        {/* Mobile menu START */}
        <div
          className="absolute right-0 min-h-screen w-2/3 bg-primary py-4 px-8 shadow md:w-1/3"
          ref={menuRef}
        >
          <button
            className="absolute top-0 right-0 mt-4 mr-4"
            onClick={() => setMenuOpen(false)}
          >
            <Icon icon="famicons:close" className="text-4xl text-white" />
          </button>

          <MobileMenu data={data} onClick={handleMenuClick} />
        </div>
        {/* Mobile menu END */}
      </div>
    </>
  );
};

export default HeaderNav;
