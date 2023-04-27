import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @mui/material components
import { createTheme } from "@mui/material/styles";
// @mui/icons-material

// core components
import styles from "styles/jss/nextjs-material-kit/components/cardHeaderStyle.js";

const theme = createTheme(styles);

export default function CardHeader(props) {
  const { className, children, color, plain, ...rest } = props;
  const cardHeaderClasses = classNames({
    [theme.cardHeader]: true,
    [theme.color + "CardHeader"]: color,
    [theme.cardHeaderPlain]: plain,
    [className]: className !== undefined,
  });
  return (
    <div className={cardHeaderClasses} {...rest}>
      {children}
    </div>
  );
}

CardHeader.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(["warning", "success", "danger", "info", "primary"]),
  plain: PropTypes.bool,
  children: PropTypes.node,
};
