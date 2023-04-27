import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

// @mui/material components
import { createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";

// core components

import buttonStyle from "styles/jss/nextjs-material-kit/components/buttonStyle.js";

const theme = createTheme(buttonStyle);

const RegularButton = React.forwardRef((props, ref) => {
  const {
    color,
    round,
    children,
    fullWidth,
    disabled,
    simple,
    size,
    block,
    link,
    justIcon,
    className,
    ...rest
  } = props;

  const btnClasses = classNames({
    [theme.button]: true,
    [theme[size]]: size,
    [theme[color]]: color,
    [theme.round]: round,
    [theme.fullWidth]: fullWidth,
    [theme.disabled]: disabled,
    [theme.simple]: simple,
    [theme.block]: block,
    [theme.link]: link,
    [theme.justIcon]: justIcon,
    [className]: className,
  });
  return (
    <Button
      {...rest}
      ref={ref}
      classes={{ root: btnClasses }}>
      {children}
    </Button>
  );
});

RegularButton.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "rose",
    "white",
    "facebook",
    "twitter",
    "google",
    "github",
    "transparent",
  ]),
  size: PropTypes.oneOf(["sm", "lg"]),
  simple: PropTypes.bool,
  round: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  block: PropTypes.bool,
  link: PropTypes.bool,
  justIcon: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

export default RegularButton;
