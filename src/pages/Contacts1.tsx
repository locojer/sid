import { FunctionComponent } from "react";
import styles from "./Contacts1.module.css";

const Contacts1: FunctionComponent = () => {
  return (
    <div className={styles.contactsDiv}>
      <div className={styles.frameDiv}>
        <div className={styles.frameDiv1}>
          <div className={styles.nameDiv}>Name</div>
        </div>
        <div className={styles.frameDiv1}>
          <div className={styles.nameDiv}>Email</div>
        </div>
      </div>
      <div className={styles.frameDiv3}>
        <div className={styles.nameDiv}>Title</div>
      </div>
      <div className={styles.frameDiv4}>
        <div className={styles.nameDiv}>Message</div>
      </div>
      <div className={styles.buttonDiv}>
        <div className={styles.liveDiv}>Send</div>
      </div>
    </div>
  );
};

export default Contacts1;
