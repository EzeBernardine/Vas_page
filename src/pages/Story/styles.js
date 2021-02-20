import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  story_root: {
    padding: "50px 10%",
    display: "flex",
    justifyContent: "center",
    "@media(max-width: 800px)": {
      padding: "50px 5%",
    },
  },
  story_root_main: {
    boxShadow: " 2px 8px 30px rgba(0, 0, 0, 0.05)",
    maxWidth: "600px",
    width: "100%",
    padding: "30px",
    "@media(max-width: 800px)": {
      padding: "10px",
    },
    "& > h2": {
      marginBottom: "43px",
      textAlign: "center",
      fontSize: "28px",
      lineHeight: "34px",
      fontWeight: "bold",
      lineSpacing: "-0.02em;",
    },
  },
  form: {
    "& > *": {
      marginBottom: "24px",
    },
  },
  story_formControl_InputArea_icon: {
    display: "flex",
    position: "relative",
    "& svg": {
      height: "30px",
      width: "30px",
      position: "absolute",
      top: "0",
      right: "10px",
      bottom: "0",
      margin: "auto",
      cursor: "pointer",
    },
    "& > input:first-child": {
      position: "absolute",
      right: "0",
      left: "0",
      top: "0",
      bottom: "0",
      opacity: "0",
      cursor: "pointer",
    },
    "& input": {
      paddingRight: "50px",
    },
  },
  story_formControl_InputArea: {
    width: "100%",
    border: " 1px solid #EAEAEA",
    backgroundColor: " #FEFEFE",
    borderRadius: "8px",
    padding: "8px 15px",
  },

  story_formControl_textArea: {
    width: "100%",
    border: " 1px solid #EAEAEA",
    backgroundColor: " #FEFEFE",
    borderRadius: "8px",
    padding: "8px 15px",
    resize: "none",
    height: "150px",
  },
  story_label: {
    color: "#676767",
    fontSize: "14px",
    lineHeight: "16px",
    paddingBottom: "13px",
    display: " inline-block",
  },
  story_doublefield: {
    display: "flex",
    justifyContent: "space-between",
    "& > div": {
      width: "calc(50% - 10px)",
    },
  },
  story_btn: {
    display: "flex",
    justifyContent: "flex-end",
    marginTop: "50px",
    "& *": {
      color: "white",
      fontWeight: "600",
    },
  },
  // checkbox: {
  //   display: 'inline-flex',
  //   "& > div": {
  //     backgroundColor: "red",
  //     height: "50px",
  //     width: "50px",
  //     marginRight: '30px'
  //   },
  // },
}));
