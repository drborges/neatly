import React, { CSSProperties } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import { layout } from "../helpers/layout";

type ViewProps = {
  align: "top" | "middle" | "bottom";
  justify: "left" | "center" | "right";
  children: Node;
  className: string;
  reverse: boolean;
  scroll: boolean;
  space: "around" | "between" | "evenly";
  style: CSSProperties;
  stretch: boolean;
  tall: boolean;
  wrap: boolean | "reverse";
};

const View = ({
  align = "top",
  justify = "left",
  children,
  className,
  reverse = false,
  scroll = false,
  space,
  style,
  stretch = false,
  tall = false,
  wrap = false,
  ...props
}: ViewProps) => {
  const css = cn(styles.View, className, layout(props), {
    [styles[`align-${align}`]]: true,
    [styles[`justify-${justify}`]]: !space,
    [styles[`space-${space}`]]: space,
    [styles.reverse]: reverse,
    [styles.scrollable]: scroll,
    [styles.stretch]: stretch,
    [styles.wrap]: wrap === true,
    [styles["wrap-reverse"]]: wrap === "reverse",
    [styles.tall]: tall
  });

  return (
    <div className={css} style={style}>
      {children}
    </div>
  );
};

View.Stack = ({
  align = "top",
  justify = "left",
  children,
  className,
  reverse = false,
  scroll = false,
  space,
  style,
  stretch = false,
  ...props
}) => {
  const css = cn(styles.ViewStack, className, layout(props), {
    [styles[`align-${align}`]]: !space,
    [styles[`justify-${justify}`]]: true,
    [styles[`space-${space}`]]: space,
    [styles.reverse]: reverse,
    [styles.scrollable]: scroll,
    [styles.stretch]: stretch
  });

  return (
    <div className={css} style={style}>
      {children}
    </div>
  );
};

export default View;
