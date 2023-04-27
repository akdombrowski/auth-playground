import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @mui/material components
import { createTheme } from "@mui/material/styles";
// core components
import styles from "styles/jss/nextjs-material-kit/components/typographyStyle.js";

const theme = createTheme(styles);

export default function Quote(props) {
  const { text, author } = props;
  return (
    <blockquote className={theme.defaultFontStyle + " " + theme.quote}>
      <p className={theme.quoteText}>{text}</p>
      <small className={theme.quoteAuthor}>{author}</small>
    </blockquote>
  );
}

Quote.propTypes = {
  text: PropTypes.node,
  author: PropTypes.node,
};
