import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @mui/material components
import { createTheme } from "@mui/material/styles";
import LinearProgress from "@mui/material/LinearProgress";
// core components
import styles from "styles/jss/nextjs-material-kit/components/customLinearProgressStyle.js";

const theme = createTheme(styles);

export default function CustomLinearProgress(props) {
  
  const { color, ...rest } = props;
  return (
    <LinearProgress
      {...rest}
      classes={{
        root: theme.oot + " " + theme[color + "Background"],
        bar: theme.ar + " " + theme[color],
      }}
    />
  );
}

CustomLinearProgress.defaultProps = {
  color: "gray",
};

CustomLinearProgress.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
};
