import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @mui/material components
import { createTheme } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Input from "@mui/material/Input";

import styles from "styles/jss/nextjs-material-kit/components/customInputStyle.js";

const theme = createTheme(styles);

export default function CustomInput(props) {
  const {
    formControlProps,
    labelText,
    id,
    labelProps,
    inputProps,
    error,
    white,
    inputRootCustomClasses,
    success,
  } = props;

  const labelClasses = classNames({
    [" " + theme.labelRootError]: error,
    [" " + theme.labelRootSuccess]: success && !error,
  });
  const underlineClasses = classNames({
    [theme.underlineError]: error,
    [theme.underlineSuccess]: success && !error,
    [theme.underline]: true,
    [theme.whiteUnderline]: white,
  });
  const marginTop = classNames({
    [inputRootCustomClasses]: inputRootCustomClasses !== undefined,
  });
  const inputClasses = classNames({
    [theme.input]: true,
    [theme.whiteInput]: white,
  });
  var formControlClasses;
  if (formControlProps !== undefined) {
    formControlClasses = classNames(
      formControlProps.className,
      theme.formControl
    );
  } else {
    formControlClasses = theme.formControl;
  }
  return (
    <FormControl
      {...formControlProps}
      className={formControlClasses}>
      {labelText !== undefined ? (
        <InputLabel
          className={theme.labelRoot + " " + labelClasses}
          htmlFor={id}
          {...labelProps}>
          {labelText}
        </InputLabel>
      ) : null}
      <Input
        classes={{
          input: inputClasses,
          root: marginTop,
          disabled: theme.disabled,
          underline: underlineClasses,
        }}
        id={id}
        {...inputProps}
      />
    </FormControl>
  );
}

CustomInput.propTypes = {
  labelText: PropTypes.node,
  labelProps: PropTypes.object,
  id: PropTypes.string,
  inputProps: PropTypes.object,
  formControlProps: PropTypes.object,
  inputRootCustomClasses: PropTypes.string,
  error: PropTypes.bool,
  success: PropTypes.bool,
  white: PropTypes.bool,
};
