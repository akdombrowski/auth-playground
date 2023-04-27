import React from "react";
import { styled } from '@mui/material/styles';
// nodejs library to set properties for components
import PropTypes from "prop-types";
import Grid from "@mui/material/Grid";

const PREFIX = 'GridItem';

const classes = {
  grid: `${PREFIX}-grid`
};

const StyledGrid = styled(Grid)({
  [`& .${classes.grid}`]: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto",
  },
});

export default function GridItem(props) {

  const { children, className, ...rest } = props;
  return (
    <StyledGrid item {...rest} className={classes.grid + " " + className}>
      {children}
    </StyledGrid>
  );
}

GridItem.defaultProps = {
  className: "",
};

GridItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
