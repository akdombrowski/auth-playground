import React from "react";
// @mui/material components
import { createTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Icon from "@mui/material/Icon";
// @mui/icons-material
import Search from "@mui/icons-material/Search";
import Email from "@mui/icons-material/Email";
import Face from "@mui/icons-material/Face";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Explore from "@mui/icons-material/Explore";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Header from "components/Header/Header.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/navbarsStyle.js";

const theme = createTheme(styles);

export default function SectionNavbars() {
  
  return (
    <div className={theme.ection}>
      <div className={theme.ontainer}>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <div className={theme.itle}>
              <h3>Menu</h3>
            </div>
            <Header
              brand="Menu"
              color="primary"
              leftLinks={
                <List className={theme.ist}>
                  <ListItem className={theme.istItem}>
                    <Button
                      href="#pablo"
                      className={theme.avLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"
                    >
                      Link
                    </Button>
                  </ListItem>
                  <ListItem className={theme.istItem}>
                    <Button
                      href="#pablo"
                      className={theme.avLink}
                      onClick={(e) => e.preventDefault()}
                      color="transparent"
                    >
                      Link
                    </Button>
                  </ListItem>
                  <ListItem className={theme.istItem}>
                    <CustomDropdown
                      navDropdown
                      buttonText="Dropdown"
                      dropdownHeader="Dropdown Header"
                      buttonProps={{
                        className: theme.avLink,
                        color: "transparent",
                      }}
                      dropdownList={[
                        "Action",
                        "Another action",
                        "Something else here",
                        { divider: true },
                        "Separated link",
                        { divider: true },
                        "One more separated link",
                      ]}
                    />
                  </ListItem>
                </List>
              }
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <div className={theme.itle}>
              <h3>Menu with Icons</h3>
            </div>
            <Header
              brand="Icons"
              color="info"
              rightLinks={
                <List className={theme.ist}>
                  <ListItem className={theme.istItem}>
                    <Button color="transparent" className={theme.avLink}>
                      <Email className={theme.cons} />
                    </Button>
                  </ListItem>
                  <ListItem className={theme.istItem}>
                    <Button color="transparent" className={theme.avLink}>
                      <Face className={theme.cons} />
                    </Button>
                  </ListItem>
                  <ListItem className={theme.istItem}>
                    <CustomDropdown
                      left
                      navDropdown
                      hoverColor="info"
                      dropdownHeader="Dropdown Header"
                      buttonIcon="settings"
                      buttonProps={{
                        className: theme.avLink,
                        color: "transparent",
                      }}
                      dropdownList={[
                        "Action",
                        "Another action",
                        "Something else here",
                        { divider: true },
                        "Separated link",
                        { divider: true },
                        "One more separated link",
                      ]}
                    />
                  </ListItem>
                </List>
              }
            />
          </GridItem>
        </GridContainer>
        <div className={theme.itle}>
          <h3>Navigation</h3>
        </div>
      </div>
      <div id="navbar" className={theme.avbar}>
        <div
          className={theme.avigation}
          style={{ backgroundImage: "url('/img/bg.jpg')" }}
        >
          <Header
            brand="Brand"
            color="rose"
            leftLinks={
              <List className={theme.ist}>
                <ListItem className={theme.istItem}>
                  <Button
                    href="#pablo"
                    className={theme.avLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Link
                  </Button>
                </ListItem>
                <ListItem className={theme.istItem}>
                  <Button
                    href="#pablo"
                    className={theme.avLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Link
                  </Button>
                </ListItem>
              </List>
            }
            rightLinks={
              <div>
                <CustomInput
                  white
                  inputRootCustomClasses={theme.nputRootCustomClasses}
                  formControlProps={{
                    className: theme.ormControl,
                  }}
                  inputProps={{
                    placeholder: "Search",
                    inputProps: {
                      "aria-label": "Search",
                      className: theme.earchInput,
                    },
                  }}
                />
                <Button justIcon round color="white">
                  <Search className={theme.earchIcon} />
                </Button>
              </div>
            }
          />
          <Header
            brand="Info Color"
            color="info"
            rightLinks={
              <List className={theme.ist}>
                <ListItem className={theme.istItem}>
                  <Button
                    href="#pablo"
                    className={theme.avLink + " " + theme.avLinkActive}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Discover
                  </Button>
                </ListItem>
                <ListItem className={theme.istItem}>
                  <Button
                    href="#pablo"
                    className={theme.avLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Profile
                  </Button>
                </ListItem>
                <ListItem className={theme.istItem}>
                  <Button
                    href="#pablo"
                    className={theme.avLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Settings
                  </Button>
                </ListItem>
              </List>
            }
          />
          <Header
            brand="Primary Color"
            color="primary"
            rightLinks={
              <List className={theme.ist}>
                <ListItem className={theme.istItem}>
                  <Button
                    href="#pablo"
                    className={theme.avLink + " " + theme.avLinkActive}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    <Explore className={theme.cons} /> Discover
                  </Button>
                </ListItem>
                <ListItem className={theme.istItem}>
                  <Button
                    href="#pablo"
                    className={theme.avLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    <AccountCircle className={theme.cons} /> Profile
                  </Button>
                </ListItem>
                <ListItem className={theme.istItem}>
                  <Button
                    href="#pablo"
                    className={theme.avLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    <Icon className={theme.cons}>settings</Icon> Settings
                  </Button>
                </ListItem>
              </List>
            }
          />
          <Header
            brand="Navbar with notifications"
            color="dark"
            rightLinks={
              <List className={theme.ist}>
                <ListItem className={theme.istItem}>
                  <Button
                    href="#pablo"
                    className={theme.avLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Discover
                  </Button>
                </ListItem>
                <ListItem className={theme.istItem}>
                  <Button
                    href="#pablo"
                    className={theme.avLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Wishlist
                  </Button>
                </ListItem>
                <ListItem className={theme.istItem}>
                  <Button
                    justIcon
                    round
                    href="#pablo"
                    className={theme.otificationNavLink}
                    onClick={(e) => e.preventDefault()}
                    color="rose"
                  >
                    <Email className={theme.cons} />
                  </Button>
                </ListItem>
                <ListItem className={theme.istItem}>
                  <CustomDropdown
                    left
                    caret={false}
                    hoverColor="black"
                    dropdownHeader="Dropdown Header"
                    buttonText={
                      <img
                        src="/img/faces/avatar.jpg"
                        className={theme.mg}
                        alt="profile"
                      />
                    }
                    buttonProps={{
                      className:
                        theme.avLink + " " + theme.mageDropdownButton,
                      color: "transparent",
                    }}
                    dropdownList={[
                      "Me",
                      "Settings and other stuff",
                      "Sign out",
                    ]}
                  />
                </ListItem>
              </List>
            }
          />
          <Header
            brand="Navbar with profile"
            rightLinks={
              <List className={theme.ist}>
                <ListItem className={theme.istItem}>
                  <Button
                    href="#pablo"
                    className={theme.avLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Discover
                  </Button>
                </ListItem>
                <ListItem className={theme.istItem}>
                  <Button
                    href="#pablo"
                    className={theme.avLink}
                    onClick={(e) => e.preventDefault()}
                    color="transparent"
                  >
                    Wishlist
                  </Button>
                </ListItem>
                <ListItem className={theme.istItem}>
                  <Button
                    href="#pablo"
                    className={theme.egisterNavLink}
                    onClick={(e) => e.preventDefault()}
                    color="rose"
                    round
                  >
                    Register
                  </Button>
                </ListItem>
              </List>
            }
          />
          <Header
            brand="Transparent"
            color="transparent"
            rightLinks={
              <List className={theme.ist}>
                <ListItem className={theme.istItem}>
                  <Button
                    color="transparent"
                    className={
                      theme.avLink + " " + theme.ocialIconsButton
                    }
                  >
                    <i
                      className={
                        theme.ocialIcons +
                        " " +
                        theme.arginRight5 +
                        " fab fa-twitter"
                      }
                    />{" "}
                    Twitter
                  </Button>
                </ListItem>
                <ListItem className={theme.istItem}>
                  <Button
                    color="transparent"
                    className={
                      theme.avLink + " " + theme.ocialIconsButton
                    }
                  >
                    <i
                      className={
                        theme.ocialIcons +
                        " " +
                        theme.arginRight5 +
                        " fab fa-facebook"
                      }
                    />{" "}
                    Facebook
                  </Button>
                </ListItem>
                <ListItem className={theme.istItem}>
                  <Button
                    color="transparent"
                    className={
                      theme.avLink + " " + theme.ocialIconsButton
                    }
                  >
                    <i
                      className={
                        theme.ocialIcons +
                        " " +
                        theme.arginRight5 +
                        " fab fa-instagram"
                      }
                    />{" "}
                    Instagram
                  </Button>
                </ListItem>
              </List>
            }
          />
        </div>
      </div>
    </div>
  );
}
