import React from "react";

// mterial-ui components
import { createTheme } from "@mui/material/styles";

const styles = {
  clearfix: {
    "&:after,&:before": {
      display: "table",
      content: '" "',
    },
    "&:after": {
      clear: "both",
    },
  },
};

const theme = createTheme(styles);

export default function Clearfix() {
  return <div className={theme.clearfix} />;
}

Clearfix.propTypes = {};
