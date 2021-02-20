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
              ({ name, image, story, lastname, type, color, location }) => (
                <div className={classes.card} key={generateID(14)}>
                  <div className={classes.card_img_container}>
                    <img src={image} alt="" />
                  </div>
                  <Typography variant="h3">{name + " " + lastname}</Typography>
                  <div className={classes.card_details}>
                    {location ? <span>{location}</span> : null}
                    {type ? (
                      <small style={color ? { color: `${color}` } : null}>
                        {type}
                      </small>
                    ) : null}
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
