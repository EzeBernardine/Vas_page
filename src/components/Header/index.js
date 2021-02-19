import React from "react";
import { useStyles } from "./styles";
import Testimonial from "../../assets/Testimonial image 1.png";
import { Typography } from "@material-ui/core";

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.text_content}>
          <Typography className={classes.MuiTypography} variant={"h1"}>
            Amazing <br /> Experiences from Our Wonderful Customers
          </Typography>
          <p>
            Here is what customers and vendors are saying about us, you can
            share your stories with us too.
          </p>
        </div>

        <div className={classes.img_content}>
          <img src={Testimonial} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
