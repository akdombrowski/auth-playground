import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @mui/material components
import { createTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";

const styles = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto",
  },
};

const theme = createTheme(styles);

export default function GridItem(props) {
  
  const { children, className, ...rest } = props;
  return (
    <Grid item {...rest} className={theme.rid + " " + className}>
      {children}
    </Grid>
  );
}

GridItem.defaultProps = {
  className: "",
};

GridItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
