import React, { useState, useEffect } from "react";

const Header = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <>
      <header
        className={`headerstyle  ${
          offset > 100 && `background-clr py-3 border-bottom `
        }`}
      >
        <p
          className={`text-center notification-message mb-0 p-2  ${
            offset > 100 && `d-none`
          }`}
        >
          This is an example of a notification message. It can be used to pramot
          a specific message
        </p>

        <nav className={`hero-sec `}>
          <div className="container d-flex  justify-content-between ">
            <div className=" mt-3 ">
              <img src={"/Logo.png"} alt="Research" />
            </div>
            <div className="d-flex flex-column align-items-end  mt-3 class-pointer">
              <img
                src={"/l1.png"}
                alt="Research"
                width={28}
                height={2}
                className="mb-1"
              />

              <img
                src={"/l2.png"}
                alt="Research"
                width={21}
                height={2}
                className="my-1"
              />
              <img
                src={"/l3.png"}
                alt="Research"
                width={28}
                height={2}
                className="mt-1"
              />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
