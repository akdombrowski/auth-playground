/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui core components
import { List, ListItem } from "@mui/material";
import { createTheme } from "@mui/material/styles";

// @mui/icons-material
import Favorite from "@mui/icons-material/Favorite";

import styles from "styles/jss/nextjs-material-kit/components/footerStyle.js";

const theme = createTheme(styles);

export default function Footer(props) {
  
  const { whiteFont } = props;
  const footerClasses = classNames({
    [theme.footer]: true,
    [theme.footerWhiteFont]: whiteFont,
  });
  const aClasses = classNames({
    [theme.color]: true,
    [theme.footerWhiteFont]: whiteFont,
  });
  return (
    <footer className={footerClasses}>
      <div className={theme.container}>
        <div className={theme.left}>
          <List className={theme.list}>
            <ListItem className={theme.inlineBlock}>
              <a
                href="https://www.creative-tim.com/?ref=njsmk-footer"
                className={theme.block}
                target="_blank"
              >
                Creative Tim
              </a>
            </ListItem>
            <ListItem className={theme.inlineBlock}>
              <a
                href="https://www.creative-tim.com/presentation?ref=njsmk-footer"
                className={theme.block}
                target="_blank"
              >
                About us
              </a>
            </ListItem>
            <ListItem className={theme.inlineBlock}>
              <a
                href="http://blog.creative-tim.com/?ref=njsmk-footer"
                className={theme.block}
                target="_blank"
              >
                Blog
              </a>
            </ListItem>
            <ListItem className={theme.inlineBlock}>
              <a
                href="https://www.creative-tim.com/license?ref=njsmk-footer"
                className={theme.block}
                target="_blank"
              >
                Licenses
              </a>
            </ListItem>
          </List>
        </div>
        <div className={theme.right}>
          &copy; {1900 + new Date().getYear()} , made with{" "}
          <Favorite className={theme.icon} /> by{" "}
          <a
            href="https://www.creative-tim.com?ref=njsmk-footer"
            className={aClasses}
            target="_blank"
          >
            Creative Tim
          </a>{" "}
          for a better web.
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  whiteFont: PropTypes.bool,
};
