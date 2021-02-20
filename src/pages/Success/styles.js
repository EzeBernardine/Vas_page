import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  Success_root: {
    padding: "50px 10%",
    display: "flex",
    justifyContent: "center",
    "@media(max-width: 800px)": {
      padding: "50px 5%",
    },
  },
  Success_root_main: {
    boxShadow: " 2px 8px 30px rgba(0, 0, 0, 0.05)",
    maxWidth: "400px",
    width: "100%",
    padding: "50px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    "@media(max-width: 800px)": {
      padding: "10px",
    },
    "& > span": {
      marginBottom: "16px",
      width: "155px",
      borderRadius: "100%",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
      height: "155px",
      fontSize: "80px",
      backgroundColor: "#FFF8F5",
    },
    "& > p": {
      marginBottom: "16px",
      textAlign: "center",
      fontSize: "16px",
      lineHeight: "28px",
      fontWeight: "bold",
      lineSpacing: "-0.02em;",
      color: "#4A4A4A",
    },
    "& > h1": {
      marginBottom: "43px",
      textAlign: "center",
      fontSize: "28px",
      lineHeight: "34px",
      color: 'black',
      fontWeight: "bold",
      lineSpacing: "-0.02em;",
    },
  },

  story_btn: {
    marginTop: "30px",
    "& *": {
      color: "white",
      fontWeight: "600",
    },
  },
}));
