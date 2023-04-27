import React from "react";
import { styled } from '@mui/material/styles';
// nodejs library to set properties for components
import PropTypes from "prop-types";

import Grid from "@mui/material/Grid";

const PREFIX = 'GridContainer';

const classes = {
  grid: `${PREFIX}-grid`
};

const StyledGrid = styled(Grid)({
  [`& .${classes.grid}`]: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto",
  },
});

export default function GridContainer(props) {

  const { children, className, ...rest } = props;
  return (
    <StyledGrid container {...rest} className={classes.grid + " " + className}>
      {children}
    </StyledGrid>
  );
}

GridContainer.defaultProps = {
  className: "",
};

GridContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
