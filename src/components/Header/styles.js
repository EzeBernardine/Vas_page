import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  root: {
    padding: "0 5% 0 10%",
    "@media(max-width: 800px)": {
      padding: " 0%",
      "& > div > div": {
        width: "100%",
        "&:first-child": {
          padding: "10px 5% 20px",
          "& > p": {
            maxWidth: " 100%",
          },
        },
      },
    },
  },
  container: {
    display: "flex",
    alignItems: "center",
    padding: "15px 0 0 0",
    justifyContent: "space-between",
    "@media(max-width: 600px)": {
      flexDirection: "column",
    },
  },
  text_content: {
    maxWidth: "600px",
    "@media(max-width: 800px)": {
      width: "45%",
    },
    "& > h1": {
      fontSize: "48px",
      lineHeight: " 60px",
      fontWeight: 'bold',
      color: "#000",
      "@media(max-width: 1200px)" : {
        fontSize: "32px",
        lineHeight: "40px",
      },
      "@media(max-width: 800px) and (min-width: 600px)": {
        fontSize: "25px",
        lineHeight: "unset",
      },
   
    },
    "& > p": {
      fontSize: "18px",
      lineHeight: " 31px",
      marginTop: "24px",
      color: "#494949",
      maxWidth: "500px",
      "@media(max-width: 1200px) and (min-width: 800px)": {
        maxWidth: "300px",
      },
      "@media(max-width: 800px) and (min-width: 600px)": {
        fontSize: "14px",
        lineHeight: "22px",
      },
    },
  },
  img_content: {
    width: "570px",
    "@media(max-width: 800px)": {
      width: "55%",
    },
    "& > img": {
      height: "100%",
      width: " 100%",
      objectFit: "cover",
    },
  },
}));
