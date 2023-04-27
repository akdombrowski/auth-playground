import React from "react";
import Link from "next/link";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @mui/material components
import { createTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import Hidden from "@mui/material/Hidden";
import Drawer from "@mui/material/Drawer";
// @mui/icons-material
import Menu from "@mui/icons-material/Menu";
// core components
import styles from "styles/jss/nextjs-material-kit/components/headerStyle.js";

const theme = createTheme(styles);

export default function Header(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  React.useEffect(() => {
    if (props.changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (props.changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const headerColorChange = () => {
    const { color, changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(theme[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(theme[changeColorOnScroll.color]);
    } else {
      document.body
        .getElementsByTagName("header")[0]
        .classList.add(theme[color]);
      document.body
        .getElementsByTagName("header")[0]
        .classList.remove(theme[changeColorOnScroll.color]);
    }
  };
  const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;
  const appBarClasses = classNames({
    [theme.ppBar]: true,
    [theme[color]]: color,
    [theme.bsolute]: absolute,
    [theme.ixed]: fixed,
  });
  const brandComponent = (
    <Link href="/components" as="/components">
      <Button className={theme.title}>{brand}</Button>
    </Link>
  );
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={theme.container}>
        {leftLinks !== undefined ? brandComponent : null}
        <div className={theme.flex}>
          {leftLinks !== undefined ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
            brandComponent
          )}
        </div>
        <Hidden smDown implementation="css">
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={"right"}
          open={mobileOpen}
          classes={{
            paper: theme.drawerPaper,
          }}
          onClose={handleDrawerToggle}
        >
          <div className={theme.appResponsive}>
            {leftLinks}
            {rightLinks}
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
}

Header.defaultProp = {
  color: "white",
};

Header.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "info",
    "success",
    "warning",
    "danger",
    "transparent",
    "white",
    "rose",
    "dark",
  ]),
  rightLinks: PropTypes.node,
  leftLinks: PropTypes.node,
  brand: PropTypes.string,
  fixed: PropTypes.bool,
  absolute: PropTypes.bool,
  // this will cause the sidebar to change the color from
  // props.color (see above) to changeColorOnScroll.color
  // when the window.pageYOffset is heigher or equal to
  // changeColorOnScroll.height and then when it is smaller than
  // changeColorOnScroll.height change it back to
  // props.color (see above)
  changeColorOnScroll: PropTypes.shape({
    height: PropTypes.number.isRequired,
    color: PropTypes.oneOf([
      "primary",
      "info",
      "success",
      "warning",
      "danger",
      "transparent",
      "white",
      "rose",
      "dark",
    ]).isRequired,
  }),
};
