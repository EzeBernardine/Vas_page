import React from "react";
import { useStyles } from "./styles";
import { Typography } from "@material-ui/core";

const Card = ({ experienceCards }) => {
  const classes = useStyles();
  return (
    <div className={classes.card_root}>
      <div className={classes.card_cards}>
        {experienceCards.map(
          ({ name, img, content, location, type, color }) => (
            <div className={classes.card}>
              <div className={classes.card_img_container}>
                <img src={img} alt="" />
              </div>
              <Typography variant="h3">{name}</Typography>
              <div className={classes.card_details}>
                {location ? <span>{location}</span> : null}
                <span style={color ? { color: `${color}` } : null}>{type}</span>
              </div>
              <p>{content}</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Card;
