import React from "react";

const MenuItem = ({ item, onClick }) => {
  return (
    <li className="group pl-6">
      <span
        className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
        data-link={item.link}
        onClick={onClick}
      >
        {item.text}
      </span>

      <span className="block h-0.5 w-full bg-transparent group-hover:bg-yellow"></span>
    </li>
  );
};

export default MenuItem;
