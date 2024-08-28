import React from "react";
import styles from "../../src/mystyle.module.css"

const About = () => {
  const transbackground = {
    background: "rgba(0, 0, 0, 0.5)",

  };
  return (
    <div className="flex justify-center items-center flex-col text-center pt-28 pb-20 ">
      <div style={transbackground} className="text-white py-10 px-12">
        <h1 className="text-5xl">About</h1>
        <h2 className="text-xl mt-5">
          "Bà Hằng Home là nơi cho thuê nhà uy tín, giá rẻ."
        </h2>
        <h2 className="mt-5 xl:mx-32">
          Chủ sở hữu của những properties này là 3 chị em Mai, Dung, Hương.
          Với hơn 20 năm kinh nghiệm cho thuê nhà, 3 chị em chúng tôi tự tin rằng chúng tôi có thể provide services xịn sò nhất cho nhà.
           With
          over 25 years in the building industry, holding executive positions in
          the Master Builders Association and St. Kilda Community Housing Trusts
          along with being a multiple consecutive award-winning building, Steven
          Peluso, Managing Director of 'PELUSO' has more than just accolades to
          his name.
        </h2>
      </div>
    </div>
  );
};

export default About;
