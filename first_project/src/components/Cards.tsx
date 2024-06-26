import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";
const Card = () => {
  return (
    <section className="cards">
      <div className="container mx-auto py-8 px-4 md:grid md:grid-cols-3 gap-8 min-h-[100vh] place-content-center">
        <div className="card md:hover:translate-y-[-8px] md:hover:duration-300 md:hover:shadow-custom-hover mb-5 md:mb-0 bg-white w-full p-6 rounded-lg h-fit shadow-custom-default">
          <img
            className="w-24 block mx-auto mb-4"
            src={Single}
            alt="Single User"
          />
          <h3 className="text-xl font-bold mb-2 text-center">Single User</h3>
          <h2 className="text-2xl font-bold mb-4 text-center">$149</h2>
          <ul className="mb-6">
            <li className="mb-2 border-b border-gray-300 pb-2">
              500 GB Storage
            </li>
            <li className="mb-2 border-b border-gray-300 pb-2">
              1 User Allowed
            </li>
            <li className="pb-2">Send up to 2GB</li>
          </ul>
          <button className="bg-brand hover:bg-brand-dark py-2 px-6 rounded font-semibold text-base md:text-lg hover:duration-300 mx-auto block">
            Start Trial
          </button>
        </div>
        <div className="card md:hover:translate-y-[-8px] md:hover:duration-300 md:hover:shadow-custom-hover mb-5 md:mb-0 bg-white w-full p-6 rounded-lg h-fit shadow-custom-default ">
          <img
            className="w-24 block mx-auto mb-4"
            src={Double}
            alt="Partnership"
          />
          <h3 className="text-xl font-bold mb-2 text-center">Partnership</h3>
          <h2 className="text-2xl font-bold mb-4 text-center">$149</h2>
          <ul className="mb-6">
            <li className="mb-2 border-b border-gray-300 pb-2">1TB Storage</li>
            <li className="mb-2 border-b border-gray-300 pb-2">
              2 User Allowed
            </li>
            <li className="pb-2">Send up to 10GB</li>
          </ul>
          <button className="bg-black text-white hover:bg-slate-950 py-2 px-6 rounded font-semibold text-base md:text-lg hover:duration-300 mx-auto block">
            Start Trial
          </button>
        </div>
        <div className="card md:hover:translate-y-[-8px] md:hover:duration-300 md:hover:shadow-custom-hover bg-white w-full p-6 rounded-lg h-fit shadow-custom-default">
          <img
            className="w-24 block mx-auto mb-4"
            src={Triple}
            alt="Group Account"
          />
          <h3 className="text-xl font-bold mb-2 text-center">Group Account</h3>
          <h2 className="text-2xl font-bold mb-4 text-center">$299</h2>
          <ul className="mb-6">
            <li className="mb-2 border-b border-gray-300 pb-2">
              500 GB Storage
            </li>
            <li className="mb-2 border-b border-gray-300 pb-2">
              3 User Allowed
            </li>
            <li className="pb-2">Send up to 20GB</li>
          </ul>
          <button className="bg-brand hover:bg-brand-dark py-2 px-6 rounded font-semibold text-base md:text-lg hover:duration-300 mx-auto block">
            Start Trial
          </button>
        </div>
      </div>
    </section>
  );
};

export default Card;
