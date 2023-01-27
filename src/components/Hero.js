import React from "react";
import styles from "../styles";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}
      >
        <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
          <img src={discount} alt=" discount" className="w-[32px] h-[32px]" />
          <p className={`${styles.paragraph} ml-2`}>
            <span className="text-white">20%</span>
            <span className="ml-2">Discount For </span>
            <span className="text-white">1 Month</span>
            <span className="ml-2">account</span>
          </p>
        </div>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[65px] text-[42px] text-white ss:leading-[100.8px] leading-[75px]">
            <span>The Next</span> <br />
            <span className="text-gradient">Generation</span>
            <br />
            <span>Payment Method</span>
          </h1>
          <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
