import { FunctionComponent } from "react";
import styles from "./Support.module.css";

const Support: FunctionComponent = () => {
  return (
    <div className={styles.supportDiv}>
      <div className={styles.supportMeHere}>Support me here</div>
      <div className={styles.frameDiv}>
        <div className={styles.mediaDiv}>
          <img className={styles.cardIcon} alt="" src="../card.svg" />
          <div className={styles.eliasDiv}>4149500120690030</div>
        </div>
        <div className={styles.mediaDiv}>
          <img className={styles.cardIcon} alt="" src="../bitcoin.svg" />
          <div className={styles.eliasDiv}>
            3E8ociqZa9mZUSwGdSmAEMAoAxBK3FNDcd
          </div>
        </div>
      </div>
    </div>
  );
};

export default Support;
