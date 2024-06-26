import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Header: React.FC = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);

  const toggleMobileNavVisibility = () => {
    setIsMobileNavVisible((prev) => !prev);
  };

  useEffect(() => {
    if (isMobileNavVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileNavVisible]);

  const navLinks = ["Home", "Company", "Resources", "About", "Contact"];

  return (
    <header>
      <div className="container mx-auto px-4 flex justify-between items-center h-16  text-white">
        <h1 className="text-brand text-3xl font-bold">
          <span className="cursor-pointer">REACT.</span>
        </h1>
        <ul className="hidden lg:flex space-x-4">
          {navLinks.map((link) => (
            <li
              key={link}
              className="uppercase p-4 hover:text-brand hover:duration-300 cursor-pointer"
            >
              {link}
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          {isMobileNavVisible ? (
            <AiOutlineClose
              size={28}
              onClick={toggleMobileNavVisibility}
              className="cursor-pointer hover:text-brand hover:opacity-85 hover:duration-300 relative z-[1]"
            />
          ) : (
            <AiOutlineMenu
              size={28}
              onClick={toggleMobileNavVisibility}
              className="cursor-pointer hover:text-brand hover:opacity-85 hover:duration-300"
            />
          )}
          {isMobileNavVisible && (
            <div className="fixed inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center">
              <ul className="text-center uppercase space-y-6 text-2xl">
                {navLinks.map((link) => (
                  <li
                    key={link}
                    className="uppercase py-3 hover:text-brand   hover:duration-300 cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
