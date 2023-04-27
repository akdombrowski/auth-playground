import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @mui/material components
import { createTheme } from "@mui/material/styles";

import styles from "styles/jss/nextjs-material-kit/components/infoStyle.js";

const theme = createTheme(styles);

export default function InfoArea(props) {
  
  const { title, description, iconColor, vertical } = props;
  const iconWrapper = classNames({
    [theme.conWrapper]: true,
    [theme[iconColor]]: true,
    [theme.conWrapperVertical]: vertical,
  });
  const iconClasses = classNames({
    [theme.con]: true,
    [theme.conVertical]: vertical,
  });
  return (
    <div className={theme.nfoArea}>
      <div className={iconWrapper}>
        <props.icon className={iconClasses} />
      </div>
      <div className={theme.escriptionWrapper}>
        <h4 className={theme.itle}>{title}</h4>
        <p className={theme.escription}>{description}</p>
      </div>
    </div>
  );
}

InfoArea.defaultProps = {
  iconColor: "gray",
};

InfoArea.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
  description: PropTypes.string.isRequired,
  iconColor: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray",
  ]),
  vertical: PropTypes.bool,
};
