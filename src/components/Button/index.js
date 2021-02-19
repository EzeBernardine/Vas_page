import React from "react";
import Button from "@material-ui/core/Button";
import {useStyles} from './styles'


const CustomButton = ({ text, bg, color }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button
        variant="contained"
        style={{ backgroundColor: `${bg}`, color: `${color}` }}
      >
        {text}
      </Button>
    </div>
  );
};

export default CustomButton;
