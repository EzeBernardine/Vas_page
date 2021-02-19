import React from "react";
import { useStyles } from "./styles";
import vasiti from "../../assets/vasiti_logo.png";
import Button from "../Button";

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.main}>
        <div className={classes.vasiti_logo}>
          <img src={vasiti} alt="vasiti logo" />
        </div>

        <div className={classes.navigate}>
          <nav>
            <ul>
              <li>ABOUT US</li>
              <li>STORIES</li>
              <li>CONTACT</li>
              <li>LOG IN</li>
            </ul>
          </nav>

          <div className={classes.btn}>
            <Button text="SIGN UP" bg="#FF5C00" color="white" />
          </div>
        </div>
      </div>
    </div>
  );
};
export const MiniHeader = () => {
  const classes = useStyles();
  return (
    <nav className={classes.minNav}>
      <ul>
        <li>MARKETPLACE</li>
        <li>WHOLESALE CENTER</li>
        <li>SELLER CENTER</li>
        <li>SERVICES</li>
        <li>INTERNSHIPS</li>
        <li>EVENTS</li>
      </ul>
    </nav>
  );
};

export default Header;
