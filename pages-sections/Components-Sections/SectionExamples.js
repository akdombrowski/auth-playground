import React from "react";
// react components for routing our app without refresh
import Link from "next/link";
// @mui/material components
import { makeStyles } from "@mui/styles";
// @mui/icons-material

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/exampleStyle.js";

const useStyles = makeStyles(styles);

export default function SectionExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem
            xs={12}
            sm={12}
            md={6}>
            <Link href="/landing">
              <img
                src="/img/landing.jpg"
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button
                color="primary"
                size="lg"
                simple>
                View landing page
              </Button>
            </Link>
          </GridItem>
          <GridItem
            xs={12}
            sm={12}
            md={6}>
            <Link href="/profile">
              <img
                src="/img/profile.jpg"
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRounded +
                  " " +
                  classes.imgFluid
                }
              />
              <Button
                color="primary"
                size="lg"
                simple>
                View profile page
              </Button>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
