import React from "react";
import style from "./footer.module.css";
import email from "../../assets/icons/email-illustration.png";

const Footer = () => {
  return (
    <div className={style["footer-container"]}>
      <div className={style["footer-title-section"]}>
        <img src={email} height={100} width={100} alt="email" />
        <div className={style['footer-title']}>
          <h2>Your Travel Journey Starts Here</h2>
          <p>Sign up and we will send you the best deals</p>
        </div>
      </div>
      <div className={style["footer-subscribe-section"]}>
        <input placeholder="Enter your email id" />
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Footer;
