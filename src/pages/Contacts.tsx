import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Contacts.module.css";

const Contacts: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainer24Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHeaderLinkContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.contactsDiv}>
      <div className={styles.backgroundDiv}>
        <div className={styles.frameDiv}>
          <div className={styles.frameDiv1}>
            <img className={styles.ellipseIcon} alt="" />
            <img className={styles.ellipseIcon} alt="" />
            <img className={styles.ellipseIcon} alt="" />
            <img className={styles.ellipseIcon} alt="" />
            <img className={styles.ellipseIcon} alt="" />
          </div>
          <div className={styles.frameDiv1}>
            <img className={styles.ellipseIcon} alt="" />
            <img className={styles.ellipseIcon} alt="" />
            <img className={styles.ellipseIcon} alt="" />
            <img className={styles.ellipseIcon} alt="" />
            <img className={styles.ellipseIcon} alt="" />
          </div>
          <div className={styles.frameDiv1}>
            <img className={styles.ellipseIcon} alt="" />
            <img className={styles.ellipseIcon} alt="" />
            <img className={styles.ellipseIcon} alt="" />
            <img className={styles.ellipseIcon} alt="" />
            <img className={styles.ellipseIcon} alt="" />
          </div>
          <div className={styles.frameDiv1}>
            <img className={styles.ellipseIcon} alt="" />
            <img className={styles.ellipseIcon} alt="" />
            <img className={styles.ellipseIcon} alt="" />
            <img className={styles.ellipseIcon} alt="" />
            <img className={styles.ellipseIcon} alt="" />
          </div>
          <div className={styles.frameDiv1}>
            <img className={styles.ellipseIcon} alt="" />
            <img className={styles.ellipseIcon} alt="" />
            <img className={styles.ellipseIcon} alt="" />
            <img className={styles.ellipseIcon} alt="" />
            <img className={styles.ellipseIcon} alt="" />
          </div>
        </div>
        <div className={styles.frameDiv6}>
          <div className={styles.frameDiv1}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-23.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-21.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-22.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-20.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-23.svg"
            />
          </div>
          <div className={styles.frameDiv1}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-25.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-26.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-24.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-19.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-25.svg"
            />
          </div>
          <div className={styles.frameDiv1}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-29.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-30.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-28.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-191.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-29.svg"
            />
          </div>
          <div className={styles.frameDiv1}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-33.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-34.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-32.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-192.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-33.svg"
            />
          </div>
          <div className={styles.frameDiv1}>
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-23.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-21.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-22.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-20.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-23.svg"
            />
          </div>
        </div>
        <div className={styles.frameDiv12}>
          <div className={styles.frameDiv1}>
            <img className={styles.ellipseIcon} alt="" />
            <img className={styles.ellipseIcon} alt="" />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-22.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-21.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-23.svg"
            />
          </div>
          <div className={styles.frameDiv1}>
            <img className={styles.ellipseIcon} alt="" />
            <img className={styles.ellipseIcon} alt="" />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-22.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-21.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-23.svg"
            />
          </div>
          <div className={styles.frameDiv1}>
            <img className={styles.ellipseIcon} alt="" />
            <img className={styles.ellipseIcon} alt="" />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-22.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-21.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-23.svg"
            />
          </div>
          <div className={styles.frameDiv16}>
            <img className={styles.ellipseIcon} alt="" />
            <img className={styles.ellipseIcon} alt="" />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-24.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-26.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-25.svg"
            />
          </div>
          <div className={styles.frameDiv1}>
            <img className={styles.ellipseIcon} alt="" />
            <img className={styles.ellipseIcon} alt="" />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-22.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-21.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-23.svg"
            />
          </div>
        </div>
        <div className={styles.rectangleDiv} />
        <div className={styles.rectangleDiv1} />
      </div>
      <div className={styles.footerDiv}>
        <div className={styles.lineDiv} />
        <div className={styles.frameDiv18}>
          <div className={styles.frameDiv19}>
            <div className={styles.groupDiv}>
              <div className={styles.groupDiv1}>
                <b className={styles.eliasB}>Elias</b>
                <div className={styles.logoDiv}>
                  <div className={styles.unionDiv}>
                    <div className={styles.rectangleDiv2} />
                    <div className={styles.rectangleDiv3} />
                    <div className={styles.rectangleDiv4} />
                    <div className={styles.rectangleDiv5} />
                    <div className={styles.rectangleDiv6} />
                    <div className={styles.rectangleDiv7} />
                    <div className={styles.rectangleDiv8} />
                    <div className={styles.rectangleDiv9} />
                    <div className={styles.rectangleDiv10} />
                    <div className={styles.rectangleDiv11} />
                  </div>
                </div>
              </div>
              <div className={styles.webDesignerAndFrontEndDev}>
                Web designer and front-end developer based in Ukraine
              </div>
              <div className={styles.eliaseliasmlDiv}>elias@elias.ml</div>
            </div>
            <div className={styles.groupDiv2}>
              <div className={styles.mediaDiv}>Media</div>
              <img className={styles.groupIcon} alt="" src="../group-221.svg" />
            </div>
          </div>
          <div className={styles.copyright2022MadeByElias}>
            © Copyright 2022. Made by Elias
          </div>
        </div>
      </div>
      <div className={styles.titleDiv}>
        <div className={styles.frameDiv20}>
          <div className={styles.div}>/</div>
          <div className={styles.contactsDiv1}>contacts</div>
        </div>
        <div className={styles.whoAmI}>Who am i?</div>
      </div>
      <div className={styles.h2Div}>
        <div className={styles.supportMeHere}>#</div>
        <div className={styles.smallProjectsDiv}>all-media</div>
      </div>
      <div className={styles.mediaDiv1}>
        <img className={styles.twitterIcon} alt="" src="../twitter.svg" />
        <div className={styles.eliasDiv}>@elias</div>
      </div>
      <div className={styles.mediaDiv2}>
        <img className={styles.twitterIcon} alt="" src="../twitter.svg" />
        <div className={styles.eliasDiv}>@elias</div>
      </div>
      <div className={styles.contactDiv}>
        <div className={styles.groupDiv3}>
          <div className={styles.imInterestedInFreelanceOp}>
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </div>
        </div>
        <div className={styles.groupDiv4}>
          <div className={styles.frameDiv21}>
            <div className={styles.div}>Message me here</div>
            <div className={styles.frameDiv22}>
              <div className={styles.groupDiv5}>
                <img
                  className={styles.twitterIcon}
                  alt=""
                  src="../discord1.svg"
                />
                <div className={styles.eliasDiv}>Elias#1234</div>
              </div>
              <div className={styles.groupDiv5}>
                <img
                  className={styles.twitterIcon}
                  alt=""
                  src="../email1.svg"
                />
                <div className={styles.eliasDiv}>elias@elias.me</div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv23}>
            <div className={styles.supportMeHere}>Support me here</div>
            <div className={styles.copyright2022MadeByElias}>
              4149500120690030
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headerDiv}>
        <div className={styles.frameDiv24} onClick={onFrameContainer24Click}>
          <div className={styles.logoDiv1}>
            <div className={styles.unionDiv1}>
              <div className={styles.rectangleDiv2} />
              <div className={styles.rectangleDiv3} />
              <div className={styles.rectangleDiv4} />
              <div className={styles.rectangleDiv5} />
              <div className={styles.rectangleDiv6} />
              <div className={styles.rectangleDiv7} />
              <div className={styles.rectangleDiv8} />
              <div className={styles.rectangleDiv9} />
              <div className={styles.rectangleDiv10} />
              <div className={styles.rectangleDiv11} />
            </div>
          </div>
          <b className={styles.eliasDiv}>Elias</b>
        </div>
        <div className={styles.frameDiv25}>
          <div
            className={styles.headerLinkDiv}
            onClick={onHeaderLinkContainerClick}
          >
            <div className={styles.supportMeHere}>#</div>
            <div className={styles.smallProjectsDiv}>home</div>
          </div>
          <div className={styles.headerLinkDiv1}>
            <div className={styles.eliasDiv}>#</div>
            <div className={styles.copyright2022MadeByElias}>works</div>
          </div>
          <div className={styles.headerLinkDiv1}>
            <div className={styles.eliasDiv}>#</div>
            <div className={styles.copyright2022MadeByElias}>about-me</div>
          </div>
          <div className={styles.headerLinkDiv1}>
            <div className={styles.eliasDiv}>#</div>
            <div className={styles.copyright2022MadeByElias}>contacts</div>
          </div>
          <div className={styles.languageSwitcherDiv}>
            <div className={styles.eNDiv}>EN</div>
            <img className={styles.groupIcon1} alt="" src="../group-58.svg" />
            <div className={styles.frameDiv26}>
              <div className={styles.eliasDiv}>RU</div>
              <div className={styles.eliasDiv}>UA</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mediaDiv3}>
        <img
          className={styles.line10Stroke}
          alt=""
          src="../line-10-stroke1.svg"
        />
        <div className={styles.frameDiv27}>
          <img className={styles.twitterIcon} alt="" src="../github2.svg" />
          <img className={styles.twitterIcon} alt="" src="../dribble2.svg" />
          <img className={styles.twitterIcon} alt="" src="../figma2.svg" />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
