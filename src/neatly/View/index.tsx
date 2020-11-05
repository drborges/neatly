import React, { CSSProperties } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";
import { layout, LayoutProps } from "../helpers/layout";

type ViewProps = LayoutProps & {
  align?: "top" | "middle" | "bottom";
  children: Node;
  className?: string;
  scroll?: boolean;
  justify?: "left" | "center" | "right";
  reverse?: boolean;
  space?: "around" | "between" | "evenly";
  stretch?: boolean;
  style?: CSSProperties;
  tall?: boolean;
  wrap?: boolean | "reverse";
};

const View = ({
  as = "div",
  align = "top",
  children,
  className,
  scroll = false,
  justify = "left",
  reverse = false,
  space,
  stretch = false,
  style,
  tall = false,
  wrap = false,
  ...props
}: ViewProps) => {
  const Tag = `${as}`;
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
    <Tag className={css} style={style}>
      {children}
    </Tag>
  );
};

type ViewStackProps = LayoutProps & {
  align?: "top" | "middle" | "bottom";
  children: Node;
  className?: string;
  scroll?: boolean;
  justify?: "left" | "center" | "right";
  reverse?: boolean;
  space?: "around" | "between" | "evenly";
  stretch?: boolean;
  style?: CSSProperties;
  tall?: boolean;
};

View.Stack = ({
  align = "top",
  children,
  className,
  scroll = false,
  justify = "left",
  reverse = false,
  space,
  style,
  stretch = false,
  tall = false,
  ...props
}: ViewStackProps) => {
  const css = cn(styles.ViewStack, className, layout(props), {
    [styles[`align-${align}`]]: !space,
    [styles[`justify-${justify}`]]: true,
    [styles[`space-${space}`]]: space,
    [styles.reverse]: reverse,
    [styles.scrollable]: scroll,
    [styles.stretch]: stretch,
    [styles.tall]: tall
  });

  return (
    <div className={css} style={style}>
      {children}
    </div>
  );
};

export default View;
