import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 10% ",
    "@media(max-width: 130px)": {
      padding: " 0 7%",
    },
    "@media(max-width: 800px)": {
      padding: " 0 5%",
    },
  },
  main: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "80px",
  },
  vasiti_logo: {
    width: "150px",
    backgroundColor: "white",
    "& > img": {
      height: "100%",
      width: "100%",
      objectFit: "contain",
    },
  },
  navigate: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "@media(max-width: 650px)": {
      display: "none",
    },
    "& > nav ": {
      marginRight: "5px",
      "& >  ul": {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        "& > li": {
          fontSize: "13px",
          whiteSpace: "nowrap",
          padding: "0 15px",
          fontWeight: "400",
          color: "#242120",
          letterSpacing: "0.05em",
          "@media(max-width: 1000px)": {
            fontSize: " 11px",
          },
        },
      },
    },
  },
  btn: {
    "& *": {
      color: "#FF5C00",
    },
  },
  minNav: {
    boxShadow: "  1px 4px 4px rgba(0, 0, 0, 0.04)",
    border: "1px solid rgba(0, 0, 0, 0.08)",
    height: "50px",
    display: "flex",
    alignItems: "center",
    padding: "0 10% ",
    "@media(max-width: 130px)": {
      padding: " 0 7%",
    },
    "@media(max-width: 800px)": {
      padding: " 0 5%",
    },
    "@media(max-width: 650px)": {
      display: "none",
    },
    "& > ul": {
      display: "flex",
      width: "100%",
      padding: "0 10% 0 10px",
      justifyContent: "space-around",
      "@media(max-width: 1000px)": {
        padding: " 0",
      },
      "& > li": {
        fontSize: "13px",
        "@media(max-width: 1000px)": {
          fontSize: " 11px",
        },
      },
    },
  },
}));
