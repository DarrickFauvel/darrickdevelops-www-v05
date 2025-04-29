"use client";

import { useRef, useState } from "react";
import { useClickOutside } from "../hooks/useClickOutside";

const HeaderNav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useClickOutside(menuRef, () => setMenuOpen(false));

  const handleMenuClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <>
      {/* Menu wide START */}
      <div className="hidden lg:block">
        <ul className="flex items-center">
          <li className="group pl-6">
            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              onClick={() => handleMenuClick("about")}
            >
              About
            </span>

            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
          </li>

          <li className="group pl-6">
            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              onClick={() => handleMenuClick("services")}
            >
              Services
            </span>

            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
          </li>

          <li className="group pl-6">
            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              onClick={() => handleMenuClick("portfolio")}
            >
              Portfolio
            </span>

            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
          </li>

          <li className="group pl-6">
            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              onClick={() => handleMenuClick("clients")}
            >
              Clients
            </span>

            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
          </li>

          <li className="group pl-6">
            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              onClick={() => handleMenuClick("work")}
            >
              Work
            </span>

            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
          </li>

          <li className="group pl-6">
            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              onClick={() => handleMenuClick("statistics")}
            >
              Statistics
            </span>

            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
          </li>

          <li className="group pl-6">
            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              onClick={() => handleMenuClick("blog")}
            >
              Blog
            </span>

            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
          </li>

          <li className="group pl-6">
            <span
              className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
              onClick={() => handleMenuClick("contact")}
            >
              Contact
            </span>

            <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
          </li>
        </ul>
      </div>
      {/* Menu wide END */}

      {/* Hamburger menu START */}
      <div className="block lg:hidden">
        <button onClick={() => setMenuOpen(true)}>
          <i className="bx bx-menu text-4xl text-white"></i>
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
            <img
              src="/assets/img/icon-close.svg"
              className="h-10 w-auto"
              alt=""
            />
          </button>

          <ul className="mt-8 flex flex-col">
            <li className="py-2">
              <span
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                onClick={() => handleMenuClick("about")}
              >
                About
              </span>
            </li>

            <li className="py-2">
              <span
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                onClick={() => handleMenuClick("services")}
              >
                Services
              </span>
            </li>

            <li className="py-2">
              <span
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                onClick={() => handleMenuClick("portfolio")}
              >
                Portfolio
              </span>
            </li>

            <li className="py-2">
              <span
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                onClick={() => handleMenuClick("clients")}
              >
                Clients
              </span>
            </li>

            <li className="py-2">
              <span
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                onClick={() => handleMenuClick("work")}
              >
                Work
              </span>
            </li>

            <li className="py-2">
              <span
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                onClick={() => handleMenuClick("statistics")}
              >
                Statistics
              </span>
            </li>

            <li className="py-2">
              <span
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                onClick={() => handleMenuClick("blog")}
              >
                Blog
              </span>
            </li>

            <li className="py-2">
              <span
                className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
                onClick={() => handleMenuClick("contact")}
              >
                Contact
              </span>
            </li>
          </ul>
        </div>
        {/* Mobile menu END */}
      </div>
    </>
  );
};

export default HeaderNav;
