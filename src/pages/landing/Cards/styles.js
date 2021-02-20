import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  card_root: {
    padding: "64px 7% ",
    "@media(max-width: 600px)": {},
  },
  card_cards: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    // gridTemplateColumns: "repeat(auto-fill, 300px)",
    justifyContent: "space-between",
    gridGap: "50px",
  },
  card_img_container: {
    height: "200px",
    width: "200px",
    borderRadius: "100%",
    overflow: "hidden",
    "& > img": {
      height: "100%",
      width: "100%",
      objectFit: "cover",
    },
  },
  card: {
    "& h3": {
      fontSize: "24px",
      lineHeight: "29px",
      color: "#474747",
      fontWeight: "600",
      margin: "30px 0 10px",
    },
    "& p": {
      fontSize: "16px",
      lineHeight: "24px",
      color: "#474747",
      fontWeight: "normal",
      letterSpacing: '0.02em',
      margin: "30px 0 10px",
    },
  },
  card_details: {
      marginBottom: '30px',
    "& > span:first-child": {
      color: "#535353",
      fontSize: "15px",
      lineHeight: "18px",
      fontWeight: "500",
      marginRight: "16px",
    },
    "& > span:last-child": {
      color: "#0D019A",
      fontSize: "13px",
      lineHeight: "16px",
      fontWeight: "500",
      backgroundColor: "#EEF8FF",
      padding: "7px",
      borderRadius: "4px",
      marginRight: "16px",
    },
  },
}));
