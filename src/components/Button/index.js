import React from "react";
import Button from "@material-ui/core/Button";
import { useStyles } from "./styles";

const CustomButton = ({ text, bg, padding, type, click }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        type={type}
        variant="contained"
        onClick={click}
        style={{
          backgroundColor: `${bg}`,
          padding: `${padding}`,
        }}
      >
        {text}
      </Button>
    </div>
  );
};

export default CustomButton;
