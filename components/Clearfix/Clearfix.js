import React from "react";

import { styled } from '@mui/material/styles';
const PREFIX = 'Clearfix';

const classes = {
  clearfix: `${PREFIX}-clearfix`
};

const Root = styled('div')({
  [`&.${classes.clearfix}`]: {
    "&:after,&:before": {
      display: "table",
      content: '" "',
    },
    "&:after": {
      clear: "both",
    },
  },
});

export default function Clearfix() {

  return <Root className={classes.clearfix} />;
}

Clearfix.propTypes = {};
