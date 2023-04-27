import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";

// @mui/material components
import { createTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";

import styles from "styles/jss/nextjs-material-kit/components/paginationStyle.js";

const theme = createTheme(styles);

export default function Pagination(props) {
  
  const { pages, color } = props;
  return (
    <ul className={theme.agination}>
      {pages.map((prop, key) => {
        const paginationLink = classNames({
          [theme.aginationLink]: true,
          [theme[color]]: prop.active,
          [theme.isabled]: prop.disabled,
        });
        return (
          <li className={theme.aginationItem} key={key}>
            {prop.onClick !== undefined ? (
              <Button onClick={prop.onClick} className={paginationLink}>
                {prop.text}
              </Button>
            ) : (
              <Button
                onClick={() => alert("you've clicked " + prop.text)}
                className={paginationLink}
              >
                {prop.text}
              </Button>
            )}
          </li>
        );
      })}
    </ul>
  );
}

Pagination.defaultProps = {
  color: "primary",
};

Pagination.propTypes = {
  pages: PropTypes.arrayOf(
    PropTypes.shape({
      active: PropTypes.bool,
      disabled: PropTypes.bool,
      text: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf(["PREV", "NEXT", "..."]),
      ]).isRequired,
      onClick: PropTypes.func,
    })
  ).isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"]),
};
