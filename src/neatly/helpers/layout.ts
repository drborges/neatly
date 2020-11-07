import styles from "./layout.module.scss";

export type LayoutProps = {
  margin?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  marginBottom?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  marginLeft?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  marginRight?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  marginTop?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  marginX?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  marginY?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  padding?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  paddingBottom?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  paddingLeft?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  paddingRight?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  paddingTop?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  paddingX?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
  paddingY?: "none" | "xs" | "sm" | "md" | "lg" | "xl";
};

export const layout = ({
  margin = "none",
  marginBottom = "none",
  marginLeft = "none",
  marginRight = "none",
  marginTop = "none",
  marginX = "none",
  marginY = "none",
  padding = "none",
  paddingBottom = "none",
  paddingLeft = "none",
  paddingRight = "none",
  paddingTop = "none",
  paddingX = "none",
  paddingY = "none"
}: LayoutProps) => ({
  [styles[`margin-${margin}`]]: true,
  [styles[`margin-bottom-${marginBottom}`]]: true,
  [styles[`margin-left-${marginLeft}`]]: true,
  [styles[`margin-right-${marginRight}`]]: true,
  [styles[`margin-top-${marginTop}`]]: true,
  [styles[`margin-x-${marginX}`]]: true,
  [styles[`margin-y-${marginY}`]]: true,
  [styles[`padding-${padding}`]]: true,
  [styles[`padding-bottom-${paddingBottom}`]]: true,
  [styles[`padding-left-${paddingLeft}`]]: true,
  [styles[`padding-right-${paddingRight}`]]: true,
  [styles[`padding-top-${paddingTop}`]]: true,
  [styles[`padding-x-${paddingX}`]]: true,
  [styles[`padding-y-${paddingY}`]]: true
});
