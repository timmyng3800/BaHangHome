import React, { useState } from "react";
import styles from "../mystyle.module.css";

const NavBar = () => {
  const link = [
    {
      id: 1,
      name: "Về Nhà Bà Hằng",
      to: "/about",
    },
    {
      id: 2,
      name: "Liên Hệ",
      to: "/contact",
    },
  ];

  const [navBar, setNavBar] = useState(false);

  return (
    <div className="flex justify-around items-center w-full h-20 z-50  text-white bg-black fixed">
      <div className="cursor-pointer">
        <a href="/">
          <h1 className={styles.icon}>Bà Hằng Home</h1>
        </a>
      </div>
      <div>
        <ul className="md:flex flex-row flex">
          {link.map((item) => {
            return (
              <li
                key={item.id}
                className="px-5 cursor-pointer  hover:scale-125 duration-200"
              >
                <a href={item.to}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
