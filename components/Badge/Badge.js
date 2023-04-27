import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @mui/material components
import { createTheme } from "@mui/material/styles";

import styles from "styles/jss/nextjs-material-kit/components/badgeStyle.js";

const theme = createTheme(styles);

export default function Badge(props) {
  const { color, children } = props;
  return (
    <span className={theme.badge + " " + theme[color]}>{children}</span>
  );
}

Badge.defaultProps = {
  color: "gray",
};

Badge.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  children: PropTypes.node,
};
