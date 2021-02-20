import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  exp_root: {
    padding: "64px 7% 0",
    backgroundColor: "#FFF8F5",
    "@media(max-width: 600px)": {
      padding: "64px 10%",
    },
  },
  exp_container: {
    display: "flex",
    alignItems: "center",
    "@media(max-width: 1200px)": {
      flexDirection: "column-reverse",
      "& > div:first-child": {
        width: "100% !important",
        padding: "0",
      },
    },
  },
  exp_img_content: {
    overflow: "hidden",
    width: "50%",
    "@media(max-width: 1200px)": {
      marginBottom: "50px",
      borderRadius: "100%",
      width: " 60%",
    },
    "@media(max-width: 700px)": {
      width: " 100%",
    },
    "& > img": {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
  },

  exp_text_content: {
    width: "50%",
    paddingRight: "103px",
    "&  > *": {
      display: "block",
    },
    "&  > h3": {
      fontWeight: "bold",
      fontSize: "32px",
      lineHeight: "39px",
      color: "#242120",
      "@media(max-width: 600px)": {
        fontSize: "24px",
        lineHeight: "29px",
        fontWeight: "600",
      },
    },
    "&  > div": {
      marginTop: "10px",
      "&  >  small": {
        fontWeight: "normal",
        fontSize: "13px",
        lineHeight: "15.73px",
        border: "1px solid rgba(255, 92, 0, 0.4)",
        borderRadius: "4px",
        padding: "7px 10px",
        display: "inline-block",
        color: "#FF5C00",
      },
    },
    "& > p": {
      fontWeight: "normal",
      fontSize: "18px",
      lineHeight: "27px",
      marginTop: "32px",
      letterSpacing: "0.02em",
      color: "#242120",
      "@media(max-width: 600px)": {
        fontSize: "16px",
        lineHeight: "24px",
      },
    },
  },
  btn: {
    position: "relative",
    "& a": {
      fontWeight: "normal",
      fontSize: "16px",
      lineHeight: "32px",
      marginTop: "48px",
      textDecoration: 'none',
      letterSpacing: "0.02em",
      color: "#FF5C00",
      "@media(max-width: 700px)": {
        fontSize: "16px",
        lineHeight: "32px",
        fontWeight: "500",
      },
    },
    "&:before": {
      position: "absolute",
      left: "-16px",
      width: "200px",
      height: "100%",
      content: ' "" ',
      bottom: "-100%",
      border: "1px solid transparent;",
      borderRadius: " 69% 7%",
      transform: " rotate(-1deg)",
      borderTop: "1px solid #FF5C00",
    },
  },
}));
