import React from "react";

const Newsletter = () => {
  return (
    <section className="newsletter">
      <div className="container mx-auto text-white py-8 px-4 lg:flex">
        <div className="text-container lg:flex-1">
          <h2 className="font-bold text-lg md:text-xl mb-2">
            Want tips & tricks to optimize your flow?
          </h2>
          <p className="text-base md:text-lg mb-4">
            Sign up to our newsletter and stay up to date
          </p>
        </div>
        <div className="form-container lg:flex-1 lg:ml-4">
          <form action="#" className="mb-4 flex xs:flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="py-2 px-4 rounded mr-2 xs:mr-0 xs:mb-2 focus:outline-0 flex-1 caret-brand text-neutral-950"
            />
            <button className="bg-brand hover:bg-brand-dark py-2 px-4 rounded font-semibold text-base md:text-lg hover:duration-300">
              Get Started
            </button>
          </form>
          <p className="text-sm md:text-base">
            We care about the protection of your data. Read our
            <span className="text-brand underline ml-1 cursor-pointer">
              Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
