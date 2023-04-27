import React from "react";
// @mui/material components
import { createTheme } from "@mui/material/styles";

// @mui/icons-material

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Small from "components/Typography/Small.js";
import Danger from "components/Typography/Danger.js";
import Warning from "components/Typography/Warning.js";
import Success from "components/Typography/Success.js";
import Info from "components/Typography/Info.js";
import Primary from "components/Typography/Primary.js";
import Muted from "components/Typography/Muted.js";
import Quote from "components/Typography/Quote.js";

import styles from "styles/jss/nextjs-material-kit/pages/componentsSections/typographyStyle.js";

const theme = createTheme(styles);

export default function SectionTypography() {
  
  return (
    <div className={theme.ection}>
      <div className={theme.ontainer}>
        <div id="typography">
          <div className={theme.itle}>
            <h2>Typography</h2>
          </div>
          <GridContainer>
            <div className={theme.ypo}>
              <div className={theme.ote}>Header 1</div>
              <h1>The Life of Material Kit</h1>
            </div>
            <div className={theme.ypo}>
              <div className={theme.ote}>Header 2</div>
              <h2>The Life of Material Kit</h2>
            </div>
            <div className={theme.ypo}>
              <div className={theme.ote}>Header 3</div>
              <h3>The Life of Material Kit</h3>
            </div>
            <div className={theme.ypo}>
              <div className={theme.ote}>Header 4</div>
              <h4>The Life of Material Kit</h4>
            </div>
            <div className={theme.ypo}>
              <div className={theme.ote}>Header 5</div>
              <h5>The Life of Material Kit</h5>
            </div>
            <div className={theme.ypo}>
              <div className={theme.ote}>Header 6</div>
              <h6>The Life of Material Kit</h6>
            </div>
            <div className={theme.ypo}>
              <div className={theme.ote}>Header 1</div>
              <h1 className={theme.itle}>The Life of Material Kit</h1>
            </div>
            <div className={theme.ypo}>
              <div className={theme.ote}>Header 2</div>
              <h2 className={theme.itle}>The Life of Material Kit</h2>
            </div>
            <div className={theme.ypo}>
              <div className={theme.ote}>Header 3</div>
              <h3 className={theme.itle}>The Life of Material Kit</h3>
            </div>
            <div className={theme.ypo}>
              <div className={theme.ote}>Header 4</div>
              <h4 className={theme.itle}>The Life of Material Kit</h4>
            </div>
            <div className={theme.ypo}>
              <div className={theme.ote}>Paragraph</div>
              <p>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers. I understand
                culture. I am the nucleus. I think that’s a responsibility that
                I have, to push possibilities, to show people, this is the level
                that things could be at.
              </p>
            </div>
            <div className={theme.ypo}>
              <div className={theme.ote}>Quote</div>
              <Quote
                text="I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at."
                author=" Kanye West, Musician"
              />
            </div>
            <div className={theme.ypo}>
              <div className={theme.ote}>Muted Text</div>
              <Muted>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers...
              </Muted>
            </div>
            <div className={theme.ypo}>
              <div className={theme.ote}>Primary Text</div>
              <Primary>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers...
              </Primary>
            </div>
            <div className={theme.ypo}>
              <div className={theme.ote}>Info Text</div>
              <Info>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers...
              </Info>
            </div>
            <div className={theme.ypo}>
              <div className={theme.ote}>Success Text</div>
              <Success>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers...
              </Success>
            </div>
            <div className={theme.ypo}>
              <div className={theme.ote}>Warning Text</div>
              <Warning>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers...
              </Warning>
            </div>
            <div className={theme.ypo}>
              <div className={theme.ote}>Danger Text</div>
              <Danger>
                I will be the leader of a company that ends up being worth
                billions of dollars, because I got the answers...
              </Danger>
            </div>
            <div className={theme.ypo}>
              <div className={theme.ote}>Small Tag</div>
              <h2>
                Header with small subtitle
                <br />
                <Small>Use {'"Small"'} tag for the headers</Small>
              </h2>
            </div>
          </GridContainer>
        </div>
        <div className={theme.pace50} />
        <div id="images">
          <div className={theme.itle}>
            <h2>Images</h2>
          </div>
          <br />
          <GridContainer>
            <GridItem xs={12} sm={2}>
              <h4>Rounded Image</h4>
              <img
                src="/img/faces/avatar.jpg"
                alt="..."
                className={theme.mgRounded + " " + theme.mgFluid}
              />
            </GridItem>
            <GridItem xs={12} sm={2} className={theme.arginLeft}>
              <h4>Circle Image</h4>
              <img
                src="/img/faces/avatar.jpg"
                alt="..."
                className={theme.mgRoundedCircle + " " + theme.mgFluid}
              />
            </GridItem>
            <GridItem xs={12} sm={2} className={theme.arginLeft}>
              <h4>Rounded Raised</h4>
              <img
                src="/img/faces/avatar.jpg"
                alt="..."
                className={
                  theme.mgRaised +
                  " " +
                  theme.mgRounded +
                  " " +
                  theme.mgFluid
                }
              />
            </GridItem>
            <GridItem xs={12} sm={2} className={theme.arginLeft}>
              <h4>Circle Raised</h4>
              <img
                src="/img/faces/avatar.jpg"
                alt="..."
                className={
                  theme.mgRaised +
                  " " +
                  theme.mgRoundedCircle +
                  " " +
                  theme.mgFluid
                }
              />
            </GridItem>
          </GridContainer>
          <GridContainer />
        </div>
        <div className={theme.pace50} />
      </div>
    </div>
  );
}
