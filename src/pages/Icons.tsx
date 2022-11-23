import { FunctionComponent } from "react";
import styles from "./Icons.module.css";

const Icons: FunctionComponent = () => {
  return (
    <div className={styles.iconsDiv}>
      <img className={styles.githubIcon} alt="" src="../github2.svg" />
      <img className={styles.githubIcon} alt="" src="../twitter.svg" />
      <img className={styles.githubIcon} alt="" src="../linkedin.svg" />
      <img className={styles.githubIcon} alt="" src="../discord1.svg" />
      <img className={styles.githubIcon} alt="" src="../telegram.svg" />
      <img className={styles.githubIcon} alt="" src="../email1.svg" />
      <img className={styles.githubIcon} alt="" src="../figma2.svg" />
      <img className={styles.githubIcon} alt="" src="../dribble2.svg" />
      <img className={styles.githubIcon} alt="" src="../card.svg" />
      <img className={styles.githubIcon} alt="" src="../bitcoin.svg" />
    </div>
  );
};

export default Icons;
