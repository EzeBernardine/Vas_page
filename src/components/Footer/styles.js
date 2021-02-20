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
    "@media(max-width: 600px)": {
      flexDirection: "column",
      "&> *": {
        width: " 100% !important",
        padding: " 0 10% !important",
      },
    },
  },
  footer_banner: {
    width: "55%",
    marginTop: "-50px",
    padding: "0 13%",

    "& > img": {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },

    "@media(max-width: 1000px)": {
      margin: "0",
      padding: "0 10%",
    },
    "@media(max-width: 700px) and (min-width: 600px)": {
      padding: "0 5%",
    },
    "@media(max-width: 600px) ": {
      margin: "-50px auto 0",
      maxWidth: "400px",
    },
  },
  footer_memeber: {
    margin: "80px 0",
    width: "45%",
    paddingRight: " 15%",
    "@media(max-width: 1000px)": {
      paddingRight: "10%",
    },
    "@media(max-width: 700px) and (min-width: 600px)": {
      paddingRight: "5%",
    },
    "&>h2": {
      fontWeight: "bold",
      fontSize: "40px",
      lineHeight: "40px",
      letterSpacing: "-0.03em",
      marginBottom: "16px",
      "@media(max-width: 1000px)": {
        fontSize: "30px",
        lineHeight: "30px",
      },
    },
    "&>p": {
      fontWeight: "normal",
      fontSize: "14px",
      lineHeight: "20px",
      letterSpacing: "0.02em",
      marginBottom: "32px",
      "@media(max-width: 1000px)": {
        fontSize: "12px",
        lineHeight: "15px",
      },
    },
  },
  footer_search: {
    display: "flex",
    backgroundColor: "#514d4a",
    padding: "2px 3px",
    borderRadius: "4px",
    "& > input": {
      flex: "1",
      backgroundColor: "transparent",
      color: "#fff",
      padding: " 0 10px",
      fontSize: "14px",
      lineHeight: "16px",
      minWidth: "0",
    },
    "&  *": {
      color: "#242120",
    },
  },

  //   ------------------main footer-----------------------
  footer_main_root: {
    padding: "50px 7% 70px",
    backgroundColor: "#25201D",
    "&  *": {
      color: "white",
    },
  },
  footer_main: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    justifyContent: "space-between",
    gridGap: "30px",
    "@media(max-width: 1300px)": {
      gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
    },
    "@media(max-width: 800px)": {
      textAlign: "center",
    },
  },
  footer_row: {
    "& > h4": {
      fontSize: "16px",
      fontWeight: "19px",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    "& > ul": {
      padding: "0",
      "& > li": {
        fontSize: "14px",
        fontWeight: "16px",
        fontWeight: "normal",
        marginBottom: "10px",
      },
    },
  },
  footer_icons: {
      display: "flex",
      marginBottom: "48px",
      "@media(max-width: 800px)": {
        justifyContent: "space-between",
      },
    "& > li": {
      backgroundColor: "white",
      marginRight: "10px",
      borderRadius: "100%",
      height: "25px",
      width: "25px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& svg": {
        fill: "#25201D",
      },
    },
  },
}));
