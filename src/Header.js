import React from "react";

const Header = ({ title }) => {
  return (
    <header className="bg-gray-500 p-5 text-center font-semibold text-xl">
      {title} ⬅️
    </header>
  );
};

export default Header;
