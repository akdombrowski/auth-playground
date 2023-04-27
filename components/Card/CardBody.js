import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @mui/material components
import { createTheme } from "@mui/material/styles";
// @mui/icons-material

// core components
import styles from "styles/jss/nextjs-material-kit/components/cardBodyStyle.js";

const theme = createTheme(styles);

export default function CardBody(props) {
  const { className, children, ...rest } = props;
  const cardBodyClasses = classNames({
    [theme.cardBody]: true,
    [className]: className !== undefined,
  });
  return (
    <div
      className={cardBodyClasses}
      {...rest}>
      {children}
    </div>
  );
}

CardBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};
