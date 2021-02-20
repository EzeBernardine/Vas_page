import React from "react";
import { useStyles } from "./styles";
import Button from "../../components/Button";

const Success = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.Success_root}>
      <section className={classes.Success_root_main}>
        <span role="img" aria-label="Flower emoji" className={classes.icon}>
          🎉
        </span>
        <h1>Thank you for sharing your story!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className={classes.story_btn}>
          <Button
            type="submit"
            text="Close!"
            bg="#FF5C00"
            padding="15px 30px"
            click={() => props.history.push("/")}
          />
        </div>
      </section>
    </div>
  );
};
export default Success;
