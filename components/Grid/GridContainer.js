import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @mui/material components
import { createTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const styles = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto",
  },
};

const theme = createTheme(styles);

export default function GridContainer(props) {
  const { children, className, ...rest } = props;
  return (
    <Grid container {...rest} className={theme.grid + " " + className}>
      {children}
    </Grid>
  );
}

GridContainer.defaultProps = {
  className: "",
};

GridContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
