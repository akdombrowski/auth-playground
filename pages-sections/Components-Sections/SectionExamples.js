import React from "react";
// react components for routing our app without refresh
import Link from "next/link";
// @mui/material components
import { createTheme } from "@mui/material/styles";
// @mui/icons-material

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/exampleStyle.js";

const theme = createTheme(styles);

export default function SectionExamples() {
  
  return (
    <div className={theme.ection}>
      <div className={theme.ontainer}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <Link href="/landing">
              <a className={theme.ink}>
                <img
                  src="/img/landing.jpg"
                  alt="..."
                  className={
                    theme.mgRaised +
                    " " +
                    theme.mgRounded +
                    " " +
                    theme.mgFluid
                  }
                />
                <Button color="primary" size="lg" simple>
                  View landing page
                </Button>
              </a>
            </Link>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Link href="/profile">
              <a className={theme.ink}>
                <img
                  src="/img/profile.jpg"
                  alt="..."
                  className={
                    theme.mgRaised +
                    " " +
                    theme.mgRounded +
                    " " +
                    theme.mgFluid
                  }
                />
                <Button color="primary" size="lg" simple>
                  View profile page
                </Button>
              </a>
            </Link>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
