import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @mui/material components
import { createTheme } from "@mui/material/styles";
// @mui/icons-material
import Camera from "@mui/icons-material/Camera";
import Palette from "@mui/icons-material/Palette";
import Favorite from "@mui/icons-material/Favorite";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "styles/jss/nextjs-material-kit/pages/profilePage.js";

const theme = createTheme(styles);

export default function ProfilePage(props) {
  const { ...rest } = props;
  const imageClasses = classNames(
    theme.imgRaised,
    theme.imgRoundedCircle,
    theme.imgFluid
  );
  const navImageClasses = classNames(theme.imgRounded, theme.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="NextJS Material Kit"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white",
        }}
        {...rest}
      />
      <Parallax small filter image="/img/profile-bg.jpg" />
      <div className={classNames(theme.main, theme.mainRaised)}>
        <div>
          <div className={theme.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={theme.profile}>
                  <div>
                    <img
                      src="/img/faces/christian.jpg"
                      alt="..."
                      className={imageClasses}
                    />
                  </div>
                  <div className={theme.name}>
                    <h3 className={theme.title}>Christian Louboutin</h3>
                    <h6>DESIGNER</h6>
                    <Button justIcon link className={theme.margin5}>
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button justIcon link className={theme.margin5}>
                      <i className={"fab fa-instagram"} />
                    </Button>
                    <Button justIcon link className={theme.margin5}>
                      <i className={"fab fa-facebook"} />
                    </Button>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={theme.description}>
              <p>
                An artist of considerable range, Chet Faker — the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure.{" "}
              </p>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={theme.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Studio",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="/img/examples/studio-1.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/img/examples/studio-2.jpg"
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="/img/examples/studio-5.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/img/examples/studio-4.jpg"
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Work",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="/img/examples/olu-eletu.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/img/examples/clem-onojeghuo.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/img/examples/cynthia-del-rio.jpg"
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="/img/examples/mariya-georgieva.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/img/examples/clem-onojegaw.jpg"
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Favorite",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="/img/examples/mariya-georgieva.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/img/examples/studio-3.jpg"
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src="/img/examples/clem-onojeghuo.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/img/examples/olu-eletu.jpg"
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src="/img/examples/studio-1.jpg"
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
