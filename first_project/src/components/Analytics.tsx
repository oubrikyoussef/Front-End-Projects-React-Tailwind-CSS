import React from "react";
import Laptop from "../assets/laptop.jpg";

const Analytics = () => {
  return (
    <section className="analytics">
      <div className="container mx-auto py-8 px-4 lg:flex lg:items-center  xs:min-h-[unset] min-h-[100vh]  ">
        <div className="image-container lg:flex-1 xs:hidden">
          <img
            src={Laptop}
            className="block w-full max-w-[520px] m-auto lg:m-0 animate-up-down"
            alt="Laptop"
          />
        </div>
        <div className="text-container lg:flex-1 mt-4 lg:mt-0 lg:ml-8 xs:text-center">
          <p className="text-brand font-bold uppercase text-lg md:text-xl mb-2">
            data analytics dashboard
          </p>
          <h2 className="capitalize font-bold text-2xl md:text-4xl my-4">
            manage data analytics centrally
          </h2>
          <p className="text-base md:text-lg mb-4 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            saepe incidunt suscipit enim, impedit quidem voluptates dolor, ut
            minus ipsa vero corrupti accusamus. Animi excepturi id quos
            nesciunt. Esse, beatae?
          </p>
          <button className="bg-brand hover:bg-brand-brand py-2 px-4 rounded font-semibold text-lg duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Analytics;
