import { FunctionComponent } from "react";
import styles from "./Car.module.css";

type CarType = {
  paris?: string;
  component?: string;
  unsplashnnzkZNYWHaU?: string;
  card3Disabled?: boolean;
};

const Car: FunctionComponent<CarType> = ({
  paris,
  component,
  unsplashnnzkZNYWHaU,
  card3Disabled,
}) => {
  return (
    <button className={styles.card3Button} disabled={card3Disabled}>
      <div className={styles.frameDiv}>
        <img
          className={styles.unsplashLtnPejWDSAYIcon}
          alt=""
          src={unsplashnnzkZNYWHaU}
        />
        <div className={styles.destinationDetailsDiv}>
          <b className={styles.norwayB}>{paris}</b>
          <div className={styles.groupDiv}>
            <div className={styles.div}>{component}</div>
            <div className={styles.fromDiv}>from</div>
          </div>
        </div>
      </div>
    </button>
  );
};

export default Car;
