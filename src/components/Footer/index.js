import React from "react";
import { useStyles } from "./styles";
import banner from "../../assets/subscribe-banner.png";
import Button from "../Button";

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer_root}>
      <div className={classes.footer_sub}>
        <div className={classes.footer_banner}>
          <img src={banner} alt="" />
        </div>

        <div className={classes.footer_memeber}>
          <h2>Be a member <br/> of our community 🎉</h2>
          <p>
            We’d make sure you’re always first to know what’s happening on
            Vasiti—thus, the world.
          </p>
          <div className={classes.footer_search}>
            <input type="text" />
            <Button bg="white" text="SUBSCRIBE" color="#242120"/>
          </div>
        </div>
      </div>
      <div className={classes.footer_main} />
    </div>
  );
};

export default Footer;
