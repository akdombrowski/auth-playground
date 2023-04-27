import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @mui/material components
import { createTheme } from "@mui/material/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "styles/jss/nextjs-material-kit/components/navPillsStyle.js";

const theme = createTheme(styles);

export default function NavPills(props) {
  const [active, setActive] = React.useState(props.active);
  const handleChange = (event, active) => {
    setActive(active);
  };
  const handleChangeIndex = (index) => {
    setActive(index);
  };
  const { tabs, color, horizontal, alignCenter } = props;
  const flexContainerClasses = classNames({
    [theme.flexContainer]: true,
    [theme.horizontalDisplay]: horizontal !== undefined,
  });
  const tabButtons = (
    <Tabs
      classes={{
        root: theme.root,
        fixed: theme.fixed,
        flexContainer: flexContainerClasses,
        indicator: theme.displayNone,
      }}
      value={active}
      onChange={handleChange}
      centered={alignCenter}
    >
      {tabs.map((prop, key) => {
        var icon = {};
        if (prop.tabIcon !== undefined) {
          icon["icon"] = <prop.tabIcon className={theme.tabIcon} />;
        }
        const pillsClasses = classNames({
          [theme.pills]: true,
          [theme.horizontalPills]: horizontal !== undefined,
          [theme.pillsWithIcons]: prop.tabIcon !== undefined,
        });
        return (
          <Tab
            label={prop.tabButton}
            key={key}
            {...icon}
            classes={{
              root: pillsClasses,
              selected: theme[color],
              wrapper: theme.tabWrapper,
            }}
          />
        );
      })}
    </Tabs>
  );
  const tabContent = (
    <div className={theme.contentWrapper}>
      {tabs.map((prop, key) => {
        if (key !== active) {
          return null;
        } else {
          return (
            <div className={theme.tabContent} key={key}>
              {prop.tabContent}
            </div>
          );
        }
      })}
    </div>
  );
  return horizontal !== undefined ? (
    <GridContainer>
      <GridItem {...horizontal.tabsGrid}>{tabButtons}</GridItem>
      <GridItem {...horizontal.contentGrid}>{tabContent}</GridItem>
    </GridContainer>
  ) : (
    <div>
      {tabButtons}
      {tabContent}
    </div>
  );
}

NavPills.defaultProps = {
  active: 0,
  color: "primary",
};

NavPills.propTypes = {
  // index of the default active pill
  active: PropTypes.number,
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      tabButton: PropTypes.string,
      tabIcon: PropTypes.object,
      tabContent: PropTypes.node,
    })
  ).isRequired,
  color: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
  ]),
  horizontal: PropTypes.shape({
    tabsGrid: PropTypes.object,
    contentGrid: PropTypes.object,
  }),
  alignCenter: PropTypes.bool,
};
