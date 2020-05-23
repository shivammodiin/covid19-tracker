import React from "react";
import "./social.css";
import shivam from "./components/shivam.jpg";

function SocialLinks({ dp }) {
  return (
    <span className={`${dp}`}>
      <a className="items-img" href="https://shivamodi.com">
        {" "}
        <img src={shivam} className="shivammodi" alt="Shivam Modi" />
      </a>
      <a href="https://www.facebook.com/shivamodi456" target="_blank">
        {" "}
        <i className="fa fa-facebook fb"></i>
      </a>
      <a href="https://www.instagram.com/shivammodi_1294/" target="_blank">
        {" "}
        <i className="fa fa-instagram insta"></i>
      </a>
    </span>
  );
}

export default SocialLinks;
