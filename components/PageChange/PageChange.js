import React from "react";

// @mui/material components
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CircularProgress from "@mui/material/CircularProgress";

// core components
import { infoColor, title } from "styles/jss/nextjs-material-kit.js";

const theme = createTheme({
  progress: {
    color: infoColor,
    width: "6rem !important",
    height: "6rem !important",
  },
  wrapperDiv: {
    margin: "100px auto",
    padding: "0px",
    maxWidth: "360px",
    textAlign: "center",
    position: "relative",
    zIndex: "9999",
    top: "0",
  },
  iconWrapper: {
    display: "block",
  },
  title: {
    ...title,
    color: "#FFFFFF",
  },
});

export default function PageChange(props) {
  return (
    <div>
      <div className={theme.wrapperDiv}>
        <div className={theme.iconWrapper}>
          <CircularProgress
            className={
              theme.progress.color +
              " " +
              theme.progress.width +
              " " +
              theme.height
            }
          />
        </div>
        <h4 className={theme.title}>Loading page contents for: {props.path}</h4>
      </div>
    </div>
  );
}
