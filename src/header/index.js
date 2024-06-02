import React, { useEffect, useState } from "react";
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";

const Headermain = () => {
  const [isActive, setActive] = useState("false");
  const [dark, setDark] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
    // document.body.classList.toggle("ovhidden");
  };

  const darkMode = localStorage.getItem("theme");

  useEffect(()=>{

    if(darkMode==="dark"){
      setDark(true);
    }else {
      setDark(false);
    }


  },[darkMode])


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    // Check initial width
    handleResize();

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <>
      <div className="site__header">
        <div>
          <Link className="navbar-brand nav_ac" to="/">
            {logotext}
          </Link>
        </div>

        <div
          className={`site__navigation  ${
            window.innerWidth <= 768
              ? !isActive
                ? dark 
                  ? "menu_opened_small_device"
                  : "light_menu_opened_small_device"
                : "menu__opend_hide"
              : "menu__opend"
          }`}
        >
          <ul className="the_menu">
            <li className="menu_item ">
              <Link onClick={handleToggle} to="/">
                Home
              </Link>
            </li>
            <li className="menu_item">
              <Link onClick={handleToggle} to="/portfolio">
                {" "}
                Portfolio
              </Link>
            </li>
            <li className="menu_item">
              <Link onClick={handleToggle} to="/about">
                About
              </Link>
            </li>
            <li className="menu_item">
              <Link onClick={handleToggle} to="/contact">
                {" "}
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div style={{ display: "flex" }}>
          <Themetoggle />
          <button className="menu__button  nav_ac" onClick={handleToggle}>
            {!isActive ? <VscClose /> : <VscGrabber />}
          </button>
        </div>
      </div>
      {/* <div className="menu_footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3">
            <div className="d-flex">
              <a href={socialprofils.facebook}>Facebook</a>
              <a href={socialprofils.github}>Github</a>
              <a href={socialprofils.twitter}>Twitter</a>
            </div>
            <p className="copyright m-0">copyright __ {logotext}</p>
          </div> */}
    </>
  );
};

export default Headermain;
