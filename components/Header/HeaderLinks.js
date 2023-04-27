/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @mui/material components
import { createTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Tooltip from "@mui/material/Tooltip";
import Icon from "@mui/material/Icon";

// @mui/icons-material
import { Apps, CloudDownload } from "@mui/icons-material";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/components/headerLinksStyle.js";

const theme = createTheme(styles);

export default function HeaderLinks(props) {
  return (
    <List className={theme.list}>
      <ListItem className={theme.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Components"
          buttonProps={{
            className: theme.navLink,
            color: "transparent",
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link href="/components">
              <a className={theme.dropdownLink}>All components</a>
            </Link>,
            <a
              href="https://creativetimofficial.github.io/nextjs-material-kit/#/documentation?ref=njsmk-navbar"
              target="_blank"
              className={theme.dropdownLink}
            >
              Documentation
            </a>,
          ]}
        />
      </ListItem>
      <ListItem className={theme.listItem}>
        <Button
          href="https://www.creative-tim.com/product/nextjs-material-kit-pro?ref=njsmk-navbar"
          color="transparent"
          target="_blank"
          className={theme.navLink}
        >
          <Icon className={theme.icons}>unarchive</Icon> Upgrade to PRO
        </Button>
      </ListItem>
      <ListItem className={theme.listItem}>
        <Button
          href="https://www.creative-tim.com/product/nextjs-material-kit?ref=njsmk-navbar"
          color="transparent"
          target="_blank"
          className={theme.navLink}
        >
          <CloudDownload className={theme.icons} /> Download
        </Button>
      </ListItem>
      <ListItem className={theme.listItem}>
        {/*<Tooltip title="Delete">
          <IconButton aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>*/}
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={"top"}
          classes={{ tooltip: theme.tooltip }}
        >
          <Button
            href="https://twitter.com/CreativeTim?ref=creativetim"
            target="_blank"
            color="transparent"
            className={theme.navLink}
          >
            <i className={theme.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={theme.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={"top"}
          classes={{ tooltip: theme.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com/CreativeTim?ref=creativetim"
            target="_blank"
            className={theme.navLink}
          >
            <i className={theme.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem>
      <ListItem className={theme.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={"top"}
          classes={{ tooltip: theme.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
            target="_blank"
            className={theme.navLink}
          >
            <i className={theme.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem>
    </List>
  );
}
