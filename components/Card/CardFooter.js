import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @mui/material components
import { createTheme } from "@mui/material/styles";
// @mui/icons-material

// core components
import styles from "styles/jss/nextjs-material-kit/components/cardFooterStyle.js";

const theme = createTheme(styles);

export default function CardFooter(props) {
  
  const { className, children, ...rest } = props;
  const cardFooterClasses = classNames({
    [theme.cardFooter]: true,
    [className]: className !== undefined,
  });
  return (
    <div className={cardFooterClasses} {...rest}>
      {children}
    </div>
  );
}

CardFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
