import React, { useEffect, useState } from "react";
import photographer from "../assets/photographer.png";

const PhotographerFloat = () => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.body.scrollHeight;

      setShow(scrollPosition < pageHeight - 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    show && (
      <div className="fixed top-1/3 left-12 z-40 hidden md:block transition-opacity duration-500 ease-in-out">
        <img
          src={photographer}
          alt="Photographer Vector"
          className="w-32 h-auto transition-transform duration-300"
        />
      </div>
    )
  );
};

export default PhotographerFloat;
