import React from "react";
import { useStyles } from "./styles";
import { Typography } from "@material-ui/core";
import { generateID } from "../../../lib/generateID";

const Card = ({ experienceCards }) => {
  const classes = useStyles();
  return (
    <div className={classes.card_root}>
      <div className={classes.card_cards}>
        {experienceCards
          ? experienceCards.map(
              ({ name, image, story, lastname, type, color }) => (
                <div className={classes.card} key={generateID(14)}>
                  <div className={classes.card_img_container}>
                    <img src={image} alt="" />
                  </div>
                  <Typography variant="h3">{name}</Typography>
                  <div className={classes.card_details}>
                    {lastname ? <span>{lastname}</span> : null}
                    <span style={color ? { color: `${color}` } : null}>
                      {type ? type : "CUSTOMER"}
                    </span>
                  </div>
                  <p>{story}</p>
                </div>
              )
            )
          : null}
      </div>
    </div>
  );
};

export default Card;
