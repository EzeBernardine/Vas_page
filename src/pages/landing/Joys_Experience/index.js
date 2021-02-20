import React from "react";
import { useStyles } from "./styles";
import Testimonial from "../../../assets/black-beautiful-ladies-smiling 1.png";
import { Typography } from "@material-ui/core";
// import Button from "../../../components/Button";
import { NavLink } from "react-router-dom";

const Experience = () => {
  const classes = useStyles();
  return (
    <div className={classes.exp_root}>
      <div className={classes.exp_container}>
        <div className={classes.exp_img_content}>
          <div className={classes.exp_img_cover} />
          <img src={Testimonial} alt="" />
        </div>

        <div className={classes.exp_text_content}>
          <Typography className={classes.exp_MuiTypography} variant={"h3"}>
            Tolu & Joy’s Experience
          </Typography>
          <div>
            <small>CUSTOMER</small>
          </div>

          <p>
            I had the best experience shopping with vasiti. Usability of the
            website was great, very good customer service, an all round great
            experience. I would definately be coming back! I had the best
            experience shopping with vasiti. Usability of the website was great,
            very good customer service, an all round great experience. I would
            definately be coming back!
          </p>

          <div className={classes.btn}>
            <NavLink to="/story">Share your own story!</NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
