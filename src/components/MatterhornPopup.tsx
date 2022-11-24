import { FunctionComponent } from "react";
import VideoPopup from "../components/VideoPopup";
import styles from "./MatterhornPopup.module.css";

type MatterhornPopupType = {
  onClose?: () => void;
};

const MatterhornPopup: FunctionComponent<MatterhornPopupType> = ({
  onClose,
}) => {
  return (
    <div className={styles.matterhornPopupDiv}>
      <VideoPopup />
    </div>
  );
};

export default MatterhornPopup;
