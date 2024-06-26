import React from "react";
import {
  FaDribbble,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto justify-center text-white grid lg:grid-cols-2 py-8 px-4 gap-8">
        <div className="text-container">
          <span className="uppercase text-brand text-2xl font-bold mb-4 block cursor-pointer">
            REACT.
          </span>
          <p className="max-w-[550px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Blanditiis, aliquam explicabo modi quis laborum culpa, totam
            mollitia ullam delectus animi corporis quisquam facere id, veritatis
            soluta? Ipsam molestias iure minus!
          </p>
          <div className="social flex justify-between sm:justify-start gap-3 my-6">
            <FaDribbble size={30} className="cursor-pointer" />
            <FaFacebookSquare size={30} className="cursor-pointer" />
            <FaGithubSquare size={30} className="cursor-pointer" />
            <FaInstagram size={30} className="cursor-pointer" />
            <FaTwitterSquare size={30} className="cursor-pointer" />
          </div>
        </div>
        <div className="links-container grid sm:grid-cols-2 lg:grid-cols-4 text-center lg:text-start text- md:text-base">
          <ul className="mb-3 md:mb-0">
            <li className="hover:text-brand hover:duration-300 cursor-pointer">
              <span className="cursor-pointer">About Us</span>
            </li>
            <li className="hover:text-brand hover:duration-300 cursor-pointer">
              <span className="cursor-pointer">Services</span>
            </li>
            <li className="hover:text-brand hover:duration-300 cursor-pointer">
              <span className="cursor-pointer">Projects</span>
            </li>
            <li className="hover:text-brand hover:duration-300 cursor-pointer">
              <span className="cursor-pointer">Blog</span>
            </li>
            <li className="hover:text-brand hover:duration-300 cursor-pointer">
              <span className="cursor-pointer">Contact</span>
            </li>
          </ul>
          <ul className="mb-3 md:mb-0">
            <li className="hover:text-brand hover:duration-300 cursor-pointer">
              <span className="cursor-pointer">Privacy Policy</span>
            </li>
            <li className="hover:text-brand hover:duration-300 cursor-pointer">
              <span className="cursor-pointer">Terms of Use</span>
            </li>
            <li className="hover:text-brand hover:duration-300 cursor-pointer">
              <span className="cursor-pointer">FAQs</span>
            </li>
            <li className="hover:text-brand hover:duration-300 cursor-pointer">
              <span className="cursor-pointer">Support</span>
            </li>
            <li className="hover:text-brand hover:duration-300 cursor-pointer">
              <span className="cursor-pointer">Sitemap</span>
            </li>
          </ul>
          <ul className="mb-3 sm:mb-0 md:mb-0">
            <li className="hover:text-brand hover:duration-300 cursor-pointer">
              <span className="cursor-pointer">Our Team</span>
            </li>
            <li className="hover:text-brand hover:duration-300 cursor-pointer">
              <span className="cursor-pointer">Careers</span>
            </li>
            <li className="hover:text-brand hover:duration-300 cursor-pointer">
              <span className="cursor-pointer">Partners</span>
            </li>
            <li className="hover:text-brand hover:duration-300 cursor-pointer">
              <span className="cursor-pointer">Affiliate Program</span>
            </li>
            <li className="hover:text-brand hover:duration-300 cursor-pointer">
              <span className="cursor-pointer">Press</span>
            </li>
          </ul>
          <ul>
            <li className="hover:text-brand hover:duration-300 cursor-pointer">
              <span className="cursor-pointer">Documentation</span>
            </li>
            <li className="hover:text-brand hover:duration-300 cursor-pointer">
              <span className="cursor-pointer">API Reference</span>
            </li>
            <li className="hover:text-brand hover:duration-300 cursor-pointer">
              <span className="cursor-pointer">Community</span>
            </li>
            <li className="hover:text-brand hover:duration-300 cursor-pointer">
              <span className="cursor-pointer">GitHub</span>
            </li>
            <li className="hover:text-brand hover:duration-300 cursor-pointer">
              <span className="cursor-pointer">Stack Overflow</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
