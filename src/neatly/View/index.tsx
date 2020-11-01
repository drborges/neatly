import React from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import { layout } from "../helpers/layout";

const View = ({
  align = "top",
  justify = "left",
  children,
  className,
  scroll = false,
  space,
  stretched = false,
  ...props
}) => {
  const css = cn(styles.View, className, layout(props), {
    [styles[`align-${align}`]]: true,
    [styles[`justify-${justify}`]]: !space,
    [styles[`space-${space}`]]: space,
    [styles.scrollable]: scroll,
    [styles.stretched]: stretched
  });

  return <div className={css}>{children}</div>;
};

View.Stack = ({
  align = "top",
  justify = "left",
  children,
  className,
  scroll = false,
  space,
  stretched = false,
  ...props
}) => {
  const css = cn(styles.ViewStack, className, layout(props), {
    [styles[`align-${align}`]]: !space,
    [styles[`justify-${justify}`]]: true,
    [styles[`space-${space}`]]: space,
    [styles.scrollable]: scroll,
    [styles.stretched]: stretched
  });

  return <div className={css}>{children}</div>;
};

export default View;
