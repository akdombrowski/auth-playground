import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @mui/material components
import { createTheme } from "@mui/material/styles";
// core components
import styles from "styles/jss/nextjs-material-kit/components/typographyStyle.js";

const theme = createTheme(styles);

export default function Small(props) {
  
  const { children } = props;
  return (
    <div className={theme.efaultFontStyle + " " + theme.mallText}>
      {children}
    </div>
  );
}

Small.propTypes = {
  children: PropTypes.node,
};
