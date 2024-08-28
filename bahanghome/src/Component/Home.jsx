import React, { useState } from "react";
import styles from "../mystyle.module.css";

import nhatro from "../asset/nhatro.jpg";
import timescity from "../asset/timescity.jpg";
import townhouse from "../asset/townhouse.jpg";

const Home = () => {
  const project = [
    {
      id: 1,
      name: "Chung Cư",
      image: timescity,
      description:
        "Bà Hằng home cho thuê chung cư như Times City, chung cư Long Biên, chung cư Sài Gòn... ",
      link: "https://wallacy.io/download/",
    },
    {
      id: 2,
      name: "Nhà mặt đất",
      image: townhouse,
      description:
        "Bà Hằng home cho thuê nhà mặt đất ở Tam Trinh, Hồ Tây, Hồ Gươm ...",
      link: "https://wallacy.io/download/",
    },
    {
      id: 3,
      image: nhatro,
      name: "Nhà trọ",
      description:
        "Bà Hằng home có 18 phòng trọ cho thuê với giá cực kì hạt rẻ",

      link: "/",
    },
  ];
  return (
    <div>
      <div className=" justify-items-center  grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 justify-between pt-28">
        {project.map((item) => {
          return (
            <div
              key={item.id}
              class="w-96 max-w-sm rounded overflow-hidden shadow-lg mb-10 hover11  hover:scale-110 duration-200 cursor-pointer bg-green-600"
            >
              <a href={item.link}>
                <figure>
                  <img
                    class="w-full h-56"
                    src={item.image}
                    alt="Sunset in the mountains"
                  />
                </figure>

                <div class="px-6 py-4 h-40 bg-gray-950">
                  <div class="font-bold text-xl mb-2 text-center text-white">
                    {item.name}
                  </div>
                  <p class="text-gray-100 ">{item.description}</p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
