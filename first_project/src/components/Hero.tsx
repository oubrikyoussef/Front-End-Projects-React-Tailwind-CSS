import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container px-4 mx-auto flex flex-col justify-center items-center h-[calc(100vh-64px)] text-white text-center">
        <p className="uppercase text-brand font-bold text-lg md:text-xl mb-2">
          Growing with data analytics
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
          Grow with data
        </h1>
        <div className="flex gap-2 mb-4 xs:flex-col">
          <h2 className="font-bold text-lg md:text-xl">
            Fast, flexible financing for
          </h2>
          <ReactTyped
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
            className="font-bold text-lg md:text-xl"
          />
        </div>
        <p className="text-gray-500 text-lg md:text-xl lg:text-2xl mb-6">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms
        </p>
        <button className="bg-brand hover:bg-brand-dark  hover:duration-300 py-2 px-4 rounded font-semibold text-lg">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
