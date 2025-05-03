"use client";

import "./wc-link.js";
import { socials } from "../constants/socials";
import { Social } from "../types";

const Footer = () => {
  const Item = ({ item }: { item: Social }) => {
    return (
      <li>
        <a href={item.url} target="_blank">
          <i
            className={`bx ${item.iconClass} text-2xl text-white hover:text-yellow`}
          ></i>
        </a>
      </li>
    );
  };

  return (
    <footer className="bg-primary">
      <div className="container flex flex-col justify-between py-6 sm:flex-row">
        <p className="text-center font-body text-white md:text-left">
          © Copyright {new Date().getFullYear()}. All right reserved, Darrick
          Develops.
        </p>
        <ul className="flex items-center justify-center gap-4 pt-5 sm:justify-start sm:pt-0">
          {socials.map((item) => (
            <Item item={item} key={item.name} />
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
