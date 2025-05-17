import React from "react";

const MenuItem = ({ item, onClick }) => {
  return (
    <li className="py-2">
      <span
        className="cursor-pointer pt-0.5 font-header font-semibold uppercase text-white"
        data-link={item.link}
        onClick={onClick}
      >
        {item.text}
      </span>
    </li>
  );
};

export default MenuItem;
