import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  footer_root: {
    padding: "0",
    margin: "100px  0 0",
    backgroundColor: "#25201D",
    "@media(max-width: 600px)": {},
    "&  *": {
      color: "white",
    },
  },
  footer_sub: {
    display: "flex",
    padding: "0 14%",
  },
  footer_banner: {
    margin: "-50px 14% 0 0",
  },
  footer_memeber: {
    margin: "80px 0",
    "&>h2": {
      fontWeight: "bold",
      fontSize: "40px",
      lineHeight: "40px",
      letterSpacing: "-0.03em",
      marginBottom: "16px",
    },
    "&>p": {
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.02em",
      marginBottom: "32px",
    },
  },
  footer_search: {
    display: "flex",
  },
}));
