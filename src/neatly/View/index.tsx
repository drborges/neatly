import React from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import { layout } from "../helpers/layout";

const View = ({
  children,
  className,
  scroll = false,
  stretched = false,
  ...props
}) => {
  const css = cn(styles.View, className, layout(props), {
    [styles.scrollable]: scroll,
    [styles.stretched]: stretched
  });

  return <div className={css}>{children}</div>;
};

View.Stack = ({
  children,
  className,
  scroll = false,
  stretched = false,
  ...props
}) => {
  const css = cn(styles.ViewStack, className, layout(props), {
    [styles.scrollable]: scroll,
    [styles.stretched]: stretched
  });

  return <div className={css}>{children}</div>;
};

export default View;
