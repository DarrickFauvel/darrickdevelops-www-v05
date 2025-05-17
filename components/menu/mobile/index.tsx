import MenuItem from "./menu-item";
import React from "react";

const MobileMenu = ({ data, onClick }) => {
  return (
    <ul className="mt-8 flex flex-col">
      {data.map((item) => (
        <MenuItem item={item} onClick={onClick} key={item.link} />
      ))}
    </ul>
  );
};

export default MobileMenu;
