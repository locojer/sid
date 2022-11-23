import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Burger.module.css";

const Burger: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/burger-open");
  }, [navigate]);

  return (
    <div className={styles.burgerDiv}>
      <div className={styles.headerDiv}>
        <div className={styles.frameDiv} onClick={onFrameContainerClick}>
          <div className={styles.logoDiv}>
            <div className={styles.unionDiv}>
              <div className={styles.rectangleDiv} />
              <div className={styles.rectangleDiv1} />
              <div className={styles.rectangleDiv2} />
              <div className={styles.rectangleDiv3} />
              <div className={styles.rectangleDiv4} />
              <div className={styles.rectangleDiv5} />
              <div className={styles.rectangleDiv6} />
              <div className={styles.rectangleDiv7} />
              <div className={styles.rectangleDiv8} />
              <div className={styles.rectangleDiv9} />
            </div>
          </div>
          <b className={styles.eliasB}>Elias</b>
        </div>
        <div className={styles.frameDiv1} onClick={onFrameContainer1Click}>
          <div className={styles.rectangleDiv10} />
          <div className={styles.rectangleDiv11} />
          <div className={styles.rectangleDiv12} />
        </div>
      </div>
      <div className={styles.eliasIsAWebDesignerAndFr}>
        <span>{`Elias is a `}</span>
        <span className={styles.webDesignerSpan}>web designer</span>
        <span>{` and `}</span>
        <span className={styles.webDesignerSpan}>front-end developer</span>
      </div>
      <div className={styles.heCraftsResponsiveWebsites}>
        He crafts responsive websites where technologies meet creativity
      </div>
      <div className={styles.buttonDiv}>
        <div className={styles.liveDiv}>Contact me!!</div>
      </div>
      <div className={styles.groupDiv}>
        <img className={styles.logoIcon} alt="" src="../logo2.svg" />
        <img
          className={styles.imageRemovebgPreview2Icon}
          alt=""
          src="../imageremovebgpreview-21@2x.png"
        />
        <div className={styles.dotsDiv}>
          <div className={styles.frameDiv2}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-236.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-216.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-227.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-208.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3635.svg"
            />
          </div>
          <div className={styles.frameDiv2}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-256.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-266.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-247.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-1932.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3636.svg"
            />
          </div>
          <div className={styles.frameDiv2}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-296.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-306.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-287.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-1933.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3637.svg"
            />
          </div>
          <div className={styles.frameDiv2}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3312.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3412.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3214.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-1934.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3638.svg"
            />
          </div>
          <div className={styles.frameDiv2}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3313.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3413.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3215.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-1935.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-3639.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameDiv7}>
        <div className={styles.rectangleDiv13} />
        <div className={styles.currentlyWorkingOnPortfolio}>
          <span
            className={styles.currentlyWorkingOn}
          >{`Currently working on `}</span>
          <span className={styles.portfolioSpan}>Portfolio</span>
        </div>
      </div>
    </div>
  );
};

export default Burger;
