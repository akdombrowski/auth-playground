import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @mui/material components
import { createTheme } from "@mui/material/styles";
// @mui/icons-material

// core components
import styles from "styles/jss/nextjs-material-kit/components/cardStyle.js";

const theme = createTheme(styles);

export default function Card(props) {
  const { className, children, plain, carousel, ...rest } = props;
  const cardClasses = classNames({
    [theme.card]: true,
    [theme.cardPlain]: plain,
    [theme.cardCarousel]: carousel,
    [className]: className !== undefined,
  });
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
}

Card.propTypes = {
  className: PropTypes.string,
  plain: PropTypes.bool,
  carousel: PropTypes.bool,
  children: PropTypes.node,
};
