import styles from "./layout.module.scss";

export const layout = ({ margin = "none", padding = "none" }) => ({
  [styles[`margin-${margin}`]]: true,
  [styles[`padding-${padding}`]]: true
});
