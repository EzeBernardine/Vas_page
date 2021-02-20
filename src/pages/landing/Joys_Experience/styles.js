import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  exp_root: {
    padding: "64px 5% 0",
    backgroundColor: "#222222",
    "@media(max-width: 600px)": {
      padding: "0",
    },
  },
  exp_container: {
    display: "flex",
    alignItems: "center",
    "@media(max-width: 1200px)": {
      flexDirection: "column-reverse",
      "& > div:last-child": {
        width: "100% !important",
        padding: "64px 5%  !important",
      },
    },
    "& > *": {
      color: "white",
    },
  },
  exp_img_content: {
    position: "relative",
    overflow: "hidden",
    width: "50%",
    "@media(max-width: 700px)": {
      width: " 100%",
    },
    "& > img": {
      position: "relative",
      zIndex: "3",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      "@media(max-width: 600px)": {
        width: " 112%",
        left: "-3%",
        right: "-3%",
      },
    },
  },
  exp_img_cover: {
    backgroundColor: "#2e2e2e",
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    bottom: "-72px",
    borderRadius: "100%",
    zIndex: "2",
    "@media(max-width: 600px)": {
      width: " 112%",
      left: "-6%",
      right: "-6%",
    },
  },
  exp_text_content: {
    width: "50%",
    paddingLeft: "103px",
    "&  > *": {
      display: "block",
    },
    "&  > h3": {
      fontWeight: "bold",
      fontSize: "32px",
      lineHeight: "39px",
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
        border: "1px solid rgba(255, 255, 255, 0.4)",
        borderRadius: "4px",
        padding: "7px 10px",
        display: "inline-block",
      },
    },
    "& > p": {
      fontWeight: "normal",
      fontSize: "18px",
      lineHeight: "27px",
      marginTop: "32px",
      letterSpacing: "0.02em",
      "@media(max-width: 600px)": {
        fontSize: "16px",
        lineHeight: "24px",
      },
    },
    "& div ": {
      marginTop: "48px",
      "&  > a": {
        fontWeight: "normal",
        fontSize: "16px",
        lineHeight: "32px",
        letterSpacing: "0.02em",
        textDecoration: "none",
        color: "#fff",
        "@media(max-width: 700px)": {
          fontSize: "16px",
          lineHeight: "32px",
          fontWeight: "500",
        },
      },
    },
  },
}));
