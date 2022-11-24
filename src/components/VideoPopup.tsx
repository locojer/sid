import { FunctionComponent } from "react";
import styles from "./VideoPopup.module.css";

const VideoPopup: FunctionComponent = () => {
  return (
    <div className={styles.videoPopupDiv}>
      <div className={styles.outerFrameDiv} />
      <iframe
        className={styles.videoContainerIframe}
        src={`https://www.youtube.com/embed/DJImX19wyLY?rel=0&autoplay=1&mute=1`}
        frameBorder="0"
        allowFullScreen
      />
    </div>
  );
};

export default VideoPopup;
