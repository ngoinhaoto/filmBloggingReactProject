"use client";
import React from "react";
import "./footer.css";

import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer>
      <svg
        width="100%"
        height="100%"
        id="svg"
        viewBox="0 0 1440 590"
        xmlns="http://www.w3.org/2000/svg"
        className="transition duration-300 ease-in-out delay-150"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stopColor="#9900ef"></stop>
            <stop offset="95%" stopColor="#f78da7"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,600 C 0,600 0,150 0,150 C 93.92857142857142,147.85714285714286 187.85714285714283,145.71428571428572 320,144 C 452.14285714285717,142.28571428571428 622.5,141 748,148 C 873.5,155 954.1428571428571,170.28571428571428 1062,172 C 1169.857142857143,173.71428571428572 1304.9285714285716,161.85714285714286 1440,150 C 1440,150 1440,600 1440,600 Z"
          stroke="none"
          strokeWidth="0"
          fill="url(#gradient)"
          fillOpacity="0.4"
          className="transition-all duration-300 ease-in-out delay-150 path-0"
        ></path>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stopColor="#9900ef"></stop>
            <stop offset="95%" stopColor="#f78da7"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,600 C 0,600 0,300 0,300 C 85.96428571428572,291.57142857142856 171.92857142857144,283.14285714285717 295,298 C 418.07142857142856,312.85714285714283 578.25,351 718,341 C 857.75,331 977.0714285714284,272.8571428571429 1094,258 C 1210.9285714285716,243.14285714285714 1325.4642857142858,271.57142857142856 1440,300 C 1440,300 1440,600 1440,600 Z"
          stroke="none"
          stroke-width="0"
          fill="url(#gradient)"
          fill-opacity="0.53"
          className="transition-all duration-300 ease-in-out delay-150 path-1"
        ></path>
        <defs>
          <linearGradient id="gradient" x1="0%" y1="50%" x2="100%" y2="50%">
            <stop offset="5%" stopColor="#9900ef"></stop>
            <stop offset="95%" stopColor="#f78da7"></stop>
          </linearGradient>
        </defs>
        <path
          d="M 0,600 C 0,600 0,450 0,450 C 92.85714285714286,439.3571428571429 185.71428571428572,428.7142857142857 326,445 C 466.2857142857143,461.2857142857143 654.0000000000001,504.49999999999994 770,497 C 885.9999999999999,489.50000000000006 930.2857142857142,431.2857142857143 1030,415 C 1129.7142857142858,398.7142857142857 1284.857142857143,424.3571428571429 1440,450 C 1440,450 1440,600 1440,600 Z"
          stroke="none"
          strokeWidth="0"
          fill="url(#gradient)"
          fillOpacity="1"
          className="transition-all duration-300 ease-in-out delay-150 path-2"
        ></path>
      </svg>

      <div className="footer-wrapper flex items-center justify-center flex-col text-center pb-10 my-[-100px] ">
        <h2 className="font-black text-4xl md:text-5xl lg:text-6xl">
          <span
            className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
            style={{
              backgroundImage: "linear-gradient(to right, #ead9ff, #ffe3d0)",
            }}
          >
            Movie Muncher
          </span>
        </h2>
        <p className="text-sm md:text-base lg:text-lg font-bold">
          <span
            className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500"
            style={{
              backgroundImage: "linear-gradient(to right, #ead9ff, #ffe3d0)",
            }}
          >
            Come to us, pray to the Lord Jesus Christ. The retribution is near.
            Beware!
          </span>
        </p>
        <div className="flex justify-center space-x-2 my-4">
          <a href="#">
            <Icon
              icon="logos:reddit-icon"
              className="text-2xl lg:text-3xl xl:text-4xl"
            />
          </a>
          <a href="#">
            <Icon
              icon="logos:twitter"
              className="text-2xl lg:text-3xl xl:text-4xl"
            />
          </a>
          <a href="#">
            <Icon
              icon="logos:facebook"
              className="text-2xl lg:text-3xl xl:text-4xl"
            />
          </a>
          <a href="#">
            <Icon
              icon="logos:patreon"
              className="text-2xl lg:text-3xl xl:text-4xl"
            />
          </a>
        </div>

        <div className="footer-bottom font-extralight text-xs md:text-sm text-white lg:text-base italic">
          <p>
            Copyright &copy; 2023 <a href="#">CoolKidsInTheClub</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
