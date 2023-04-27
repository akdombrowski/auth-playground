import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @mui/material components
import { createtheme } from "@mui/material/styles";

// @mui/icons-material

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "styles/jss/nextjs-material-kit/pages/landingPageSections/teamStyle.js";

const theme = createTheme(styles);

export default function TeamSection() {
  
  const imageClasses = classNames(
    theme.imgRaised,
    theme.imgRoundedCircle,
    theme.imgFluid
  );
  return (
    <div className={theme.section}>
      <h2 className={theme.title}>Here is our team</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={theme.itemGrid}>
                <img
                  src="/img/faces/avatar.jpg"
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={theme.cardTitle}>
                Gigi Hadid
                <br />
                <small className={theme.smallTitle}>Model</small>
              </h4>
              <CardBody>
                <p className={theme.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={theme.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={theme.margin5}
                >
                  <i className={theme.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={theme.margin5}
                >
                  <i className={theme.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={theme.margin5}
                >
                  <i className={theme.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={theme.itemGrid}>
                <img
                  src="/img/faces/christian.jpg"
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={theme.cardTitle}>
                Christian Louboutin
                <br />
                <small className={theme.smallTitle}>Designer</small>
              </h4>
              <CardBody>
                <p className={theme.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={theme.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={theme.margin5}
                >
                  <i className={theme.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={theme.margin5}
                >
                  <i className={theme.socials + " fab fa-linkedin"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={theme.itemGrid}>
                <img
                  src="/img/faces/kendall.jpg"
                  alt="..."
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={theme.cardTitle}>
                Kendall Jenner
                <br />
                <small className={theme.smallTitle}>Model</small>
              </h4>
              <CardBody>
                <p className={theme.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some <a href="#pablo">links</a> for people to be able to
                  follow them outside the site.
                </p>
              </CardBody>
              <CardFooter className={theme.justifyCenter}>
                <Button
                  justIcon
                  color="transparent"
                  className={theme.margin5}
                >
                  <i className={theme.socials + " fab fa-twitter"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={theme.margin5}
                >
                  <i className={theme.socials + " fab fa-instagram"} />
                </Button>
                <Button
                  justIcon
                  color="transparent"
                  className={theme.margin5}
                >
                  <i className={theme.socials + " fab fa-facebook"} />
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
