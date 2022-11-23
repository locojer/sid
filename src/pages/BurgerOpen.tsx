import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./BurgerOpen.module.css";

const BurgerOpen: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onFrameContainer1Click = useCallback(() => {
    navigate("/burger");
  }, [navigate]);

  const onNavLinkContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNavLinkContainer1Click = useCallback(() => {
    navigate("/projects");
  }, [navigate]);

  const onNavLinkContainer2Click = useCallback(() => {
    navigate("/about");
  }, [navigate]);

  return (
    <div className={styles.burgerOpenDiv}>
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
      <div className={styles.frameDiv2}>
        <div className={styles.navLinkDiv} onClick={onNavLinkContainerClick}>
          <div className={styles.div}>#</div>
          <div className={styles.homeDiv}>home</div>
        </div>
        <div className={styles.navLinkDiv} onClick={onNavLinkContainer1Click}>
          <div className={styles.eliasB}>#</div>
          <div className={styles.worksDiv}>works</div>
        </div>
        <div className={styles.navLinkDiv} onClick={onNavLinkContainer2Click}>
          <div className={styles.eliasB}>#</div>
          <div className={styles.worksDiv}>about-me</div>
        </div>
        <div className={styles.navLinkDiv3}>
          <div className={styles.eliasB}>#</div>
          <div className={styles.worksDiv}>contacts</div>
        </div>
        <div className={styles.languageSwitcherDiv}>
          <div className={styles.eNDiv}>EN</div>
          <img className={styles.groupIcon} alt="" src="../group-581.svg" />
          <div className={styles.frameDiv3}>
            <div className={styles.eliasB}>RU</div>
            <div className={styles.eliasB}>UA</div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv4}>
        <img className={styles.githubIcon} alt="" src="../github1.svg" />
        <img className={styles.githubIcon} alt="" src="../dribble1.svg" />
        <img className={styles.githubIcon} alt="" src="../figma1.svg" />
      </div>
    </div>
  );
};

export default BurgerOpen;
