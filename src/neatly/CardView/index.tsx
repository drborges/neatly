import React from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import { layout } from "../helpers/layout";

const CardView = ({ children, className, ...props }) => {
  const css = cn(styles.CardView, className, layout(props));
  return <div className={css}>{children}</div>;
};

export default CardView;
