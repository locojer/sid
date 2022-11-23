import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  const navigate = useNavigate();

  const onViewAllClick = useCallback(() => {
    navigate("/projects");
  }, [navigate]);

  const onFrameContainer112Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onHeaderLinkContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.homeDiv}>
      <div className={styles.backgroundDiv}>
        <div className={styles.frameDiv}>
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
            <img className={styles.ellipseIcon} alt="" />
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
            <img className={styles.ellipseIcon} alt="" />
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
            <img className={styles.ellipseIcon} alt="" />
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
            <img className={styles.ellipseIcon} alt="" />
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
            <img className={styles.ellipseIcon} alt="" />
          </div>
        </div>
        <div className={styles.frameDiv6}>
          <div className={styles.frameDiv1}>
            <img className={styles.ellipseIcon} alt="" />
            <img className={styles.ellipseIcon} alt="" />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-221.svg"
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
            <img className={styles.ellipseIcon} alt="" />
            <img className={styles.ellipseIcon} alt="" />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-241.svg"
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
            <img className={styles.ellipseIcon} alt="" />
            <img className={styles.ellipseIcon} alt="" />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-281.svg"
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
            <img className={styles.ellipseIcon} alt="" />
            <img className={styles.ellipseIcon} alt="" />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-322.svg"
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
            <img className={styles.ellipseIcon} alt="" />
            <img className={styles.ellipseIcon} alt="" />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-221.svg"
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
            <img className={styles.ellipseIcon} alt="" />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-23.svg"
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
            <img className={styles.ellipseIcon} alt="" />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-23.svg"
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
            <img className={styles.ellipseIcon} alt="" />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-23.svg"
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
            <img className={styles.ellipseIcon} alt="" />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-23.svg"
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
            <img className={styles.ellipseIcon} alt="" />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-23.svg"
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
        <div className={styles.rectangleDiv2} />
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
                    <div className={styles.rectangleDiv3} />
                    <div className={styles.rectangleDiv4} />
                    <div className={styles.rectangleDiv5} />
                    <div className={styles.rectangleDiv6} />
                    <div className={styles.rectangleDiv7} />
                    <div className={styles.rectangleDiv8} />
                    <div className={styles.rectangleDiv9} />
                    <div className={styles.rectangleDiv10} />
                    <div className={styles.rectangleDiv11} />
                    <div className={styles.rectangleDiv12} />
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
              <img className={styles.groupIcon} alt="" src="../group-22.svg" />
            </div>
          </div>
          <div className={styles.copyright2022MadeByElias}>
            © Copyright 2022. Made by Elias
          </div>
        </div>
      </div>
      <div className={styles.contactDiv}>
        <div className={styles.groupDiv3}>
          <div className={styles.frameDiv20}>
            <div className={styles.div}>#</div>
            <div className={styles.projectsDiv}>contacts</div>
          </div>
          <img
            className={styles.line7Stroke}
            alt=""
            src="../line-7-stroke.svg"
          />
        </div>
        <div className={styles.groupDiv4}>
          <div className={styles.imInterestedInFreelanceOp}>
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </div>
        </div>
        <div className={styles.groupDiv5}>
          <div className={styles.frameDiv21}>
            <div className={styles.messageMeHere}>Message me here</div>
            <div className={styles.frameDiv22}>
              <div className={styles.groupDiv6}>
                <img
                  className={styles.discordIcon}
                  alt=""
                  src="../discord.svg"
                />
                <div className={styles.eliasDiv}>!Elias#3519</div>
              </div>
              <div className={styles.groupDiv6}>
                <img className={styles.discordIcon} alt="" src="../email.svg" />
                <div className={styles.eliasDiv}>elias@elias.me</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.aboutMeDiv}>
        <div className={styles.aboutMeDiv1}>
          <div className={styles.helloImEliasImASelfT}>
            <p className={styles.helloImElias}>Hello, i’m Elias!</p>
            <p className={styles.helloImElias}>&nbsp;</p>
            <p
              className={styles.helloImElias}
            >{`I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. `}</p>
            <p className={styles.helloImElias}>&nbsp;</p>
            <p className={styles.transformingMyCreativity}>
              Transforming my creativity and knowledge into a websites has been
              my passion for over a year. I have been helping various clients to
              establish their presence online. I always strive to learn about
              the newest technologies and frameworks.
            </p>
          </div>
          <div className={styles.buttonDiv}>
            <div className={styles.div}>{`Read more ->`}</div>
          </div>
        </div>
        <div className={styles.groupDiv8}>
          <div className={styles.frameDiv20}>
            <div className={styles.div}>#</div>
            <div className={styles.projectsDiv}>about-me</div>
          </div>
          <img
            className={styles.line7Stroke}
            alt=""
            src="../line-7-stroke1.svg"
          />
        </div>
        <div className={styles.groupDiv9}>
          <img
            className={styles.jcGellidonE3NUmCScugoUnsplaIcon}
            alt=""
            src="../jcgellidone3numcscugounsplashremovebgpreview1-1@2x.png"
          />
          <div className={styles.frameDiv24}>
            <div className={styles.frameDiv1}>
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
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
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
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
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
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
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
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
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
          </div>
          <div className={styles.frameDiv30}>
            <div className={styles.frameDiv1}>
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
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
                src="../ellipse-252.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-252.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-252.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-252.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-252.svg"
              />
            </div>
            <div className={styles.frameDiv1}>
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-292.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-292.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-292.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-292.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-292.svg"
              />
            </div>
            <div className={styles.frameDiv34}>
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
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
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
          </div>
          <img
            className={styles.line7Stroke2}
            alt=""
            src="../line-7-stroke2.svg"
          />
        </div>
      </div>
      <div className={styles.skillsDiv}>
        <div className={styles.groupDiv10}>
          <div className={styles.frameDiv20}>
            <div className={styles.div}>#</div>
            <div className={styles.projectsDiv}>skills</div>
          </div>
          <img
            className={styles.line7Stroke}
            alt=""
            src="../line-7-stroke3.svg"
          />
        </div>
        <div className={styles.groupDiv11}>
          <div className={styles.blockDiv}>
            <div className={styles.frameDiv37}>
              <div className={styles.messageMeHere}>Languages</div>
            </div>
            <div className={styles.lineDiv1} />
            <div className={styles.frameDiv38}>
              <div className={styles.frameDiv39}>
                <div className={styles.eliasDiv}>TypeScript</div>
                <div className={styles.eliasDiv}>Lua</div>
                <div className={styles.luaDiv1}>Lua</div>
                <div className={styles.luaDiv1}>Lua</div>
              </div>
              <div className={styles.frameDiv39}>
                <div className={styles.eliasDiv}>Python</div>
                <div className={styles.eliasDiv}>JavaScript</div>
                <div className={styles.luaDiv1}>JavaScript</div>
              </div>
              <div className={styles.frameDiv41}>
                <div className={styles.eliasDiv}>Python</div>
                <div className={styles.eliasDiv}>JavaScript</div>
              </div>
              <div className={styles.frameDiv41}>
                <div className={styles.eliasDiv}>Python</div>
                <div className={styles.eliasDiv}>JavaScript</div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv43}>
            <div className={styles.frameDiv37}>
              <div className={styles.messageMeHere}>Databases</div>
            </div>
            <div className={styles.lineDiv1} />
            <div className={styles.frameDiv38}>
              <div className={styles.frameDiv39}>
                <div className={styles.eliasDiv}>SQLite</div>
                <div className={styles.eliasDiv}>PostgreSQL</div>
                <div className={styles.luaDiv1}>Lua</div>
                <div className={styles.luaDiv1}>Lua</div>
              </div>
              <div className={styles.frameDiv39}>
                <div className={styles.eliasDiv}>Mongo</div>
                <div className={styles.luaDiv1}>avaScript</div>
                <div className={styles.luaDiv1}>JavaScript</div>
              </div>
              <div className={styles.frameDiv41}>
                <div className={styles.eliasDiv}>Python</div>
                <div className={styles.eliasDiv}>JavaScript</div>
              </div>
              <div className={styles.frameDiv41}>
                <div className={styles.eliasDiv}>Python</div>
                <div className={styles.eliasDiv}>JavaScript</div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv50}>
            <div className={styles.frameDiv37}>
              <div className={styles.messageMeHere}>Frameworks</div>
            </div>
            <div className={styles.lineDiv1} />
            <div className={styles.frameDiv38}>
              <div className={styles.frameDiv39}>
                <div className={styles.eliasDiv}>React</div>
                <div className={styles.eliasDiv}>Vue</div>
                <div className={styles.luaDiv1}>Lua</div>
                <div className={styles.luaDiv1}>Lua</div>
              </div>
              <div className={styles.frameDiv39}>
                <div className={styles.eliasDiv}>Disnake</div>
                <div className={styles.eliasDiv}>Discord.js</div>
                <div className={styles.luaDiv1}>JavaScript</div>
              </div>
              <div className={styles.frameDiv55}>
                <div className={styles.eliasDiv}>Flask</div>
                <div className={styles.eliasDiv}>Express.js</div>
              </div>
              <div className={styles.frameDiv41}>
                <div className={styles.eliasDiv}>Python</div>
                <div className={styles.eliasDiv}>JavaScript</div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv57}>
            <div className={styles.frameDiv37}>
              <div className={styles.messageMeHere}>Other</div>
            </div>
            <div className={styles.lineDiv1} />
            <div className={styles.frameDiv38}>
              <div className={styles.frameDiv39}>
                <div className={styles.eliasDiv}>HTML</div>
                <div className={styles.eliasDiv}>CSS</div>
                <div className={styles.eliasDiv}>EJS</div>
                <div className={styles.eliasDiv}>SCSS</div>
              </div>
              <div className={styles.frameDiv39}>
                <div className={styles.eliasDiv}>REST</div>
                <div className={styles.eliasDiv}>Jinja</div>
                <div className={styles.luaDiv1}>JavaScript</div>
              </div>
              <div className={styles.frameDiv41}>
                <div className={styles.eliasDiv}>Jinja</div>
                <div className={styles.luaDiv1}>Express.js</div>
              </div>
              <div className={styles.frameDiv41}>
                <div className={styles.eliasDiv}>Python</div>
                <div className={styles.eliasDiv}>JavaScript</div>
              </div>
            </div>
          </div>
          <div className={styles.frameDiv64}>
            <div className={styles.frameDiv37}>
              <div className={styles.messageMeHere}>Tools</div>
            </div>
            <div className={styles.lineDiv1} />
            <div className={styles.frameDiv38}>
              <div className={styles.frameDiv39}>
                <div className={styles.eliasDiv}>VSCode</div>
                <div className={styles.eliasDiv}>Neovim</div>
                <div className={styles.luaDiv1}>Lua</div>
                <div className={styles.eliasDiv}>Linux</div>
              </div>
              <div className={styles.frameDiv39}>
                <div className={styles.eliasDiv}>Figma</div>
                <div className={styles.eliasDiv}>XFCE</div>
                <div className={styles.eliasDiv}>Arch</div>
              </div>
              <div className={styles.frameDiv55}>
                <div className={styles.eliasDiv}>Git</div>
                <div className={styles.eliasDiv}>Font Awesome</div>
              </div>
              <div className={styles.frameDiv41}>
                <div className={styles.eliasDiv}>Python</div>
                <div className={styles.eliasDiv}>JavaScript</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.groupDiv12}>
          <div className={styles.frameDiv71}>
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
          <div className={styles.frameDiv77}>
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
          <div className={styles.rectangleDiv13} />
          <div className={styles.rectangleDiv14} />
          <img className={styles.logoIcon} alt="" src="../logo.svg" />
        </div>
      </div>
      <div className={styles.projectsDiv3}>
        <div className={styles.frameDiv83}>
          <div className={styles.projectDiv}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="../rectangle-22@2x.png"
            />
            <div className={styles.frameDiv84}>
              <div className={styles.eliasDiv}>HTML</div>
              <div className={styles.eliasDiv}>SCSS</div>
              <div className={styles.eliasDiv}>Python</div>
              <div className={styles.eliasDiv}>Flask</div>
              <div className={styles.luaDiv1}>Flask</div>
              <div className={styles.luaDiv1}>Flask</div>
            </div>
            <div className={styles.frameDiv85}>
              <div className={styles.eliasDiv}>HTML</div>
              <div className={styles.eliasDiv}>SCSS</div>
              <div className={styles.eliasDiv}>Python</div>
              <div className={styles.eliasDiv}>Flask</div>
              <div className={styles.luaDiv1}>Flask</div>
              <div className={styles.luaDiv1}>Flask</div>
            </div>
            <div className={styles.frameDiv86}>
              <div className={styles.chertNodesDiv}>ChertNodes</div>
              <div
                className={styles.minecraftServersHosting}
              >{`Minecraft servers hosting `}</div>
              <div className={styles.frameDiv87}>
                <div className={styles.frameDiv88}>
                  <div className={styles.div}>{`Live <~>`}</div>
                </div>
                <div className={styles.frameDiv89}>
                  <div className={styles.div}>{`Cached >=`}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.groupDiv13}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="../rectangle-221@2x.png"
            />
            <div className={styles.frameDiv84}>
              <div className={styles.eliasDiv}>React</div>
              <div className={styles.eliasDiv}>Express</div>
              <div className={styles.eliasDiv}>Discord.js</div>
              <div className={styles.eliasDiv}>Node.js</div>
              <div className={styles.luaDiv1}>Flask</div>
              <div className={styles.luaDiv1}>Flask</div>
            </div>
            <div className={styles.frameDiv84}>
              <div className={styles.eliasDiv}>HTML</div>
              <div className={styles.eliasDiv}>SCSS</div>
              <div className={styles.eliasDiv}>Python</div>
              <div className={styles.eliasDiv}>Flask</div>
              <div className={styles.luaDiv1}>Flask</div>
              <div className={styles.luaDiv1}>Flask</div>
            </div>
            <div className={styles.frameDiv86}>
              <div className={styles.chertNodesDiv}>ProtectX</div>
              <div className={styles.minecraftServersHosting}>
                Discord anti-crash bot
              </div>
              <div className={styles.frameDiv87}>
                <div className={styles.frameDiv88}>
                  <div className={styles.div}>{`Live <~>`}</div>
                </div>
                <div className={styles.frameDiv95}>
                  <div className={styles.div}>{`Cached >=`}</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.projectDiv}>
            <img
              className={styles.rectangleIcon}
              alt=""
              src="../rectangle-222@2x.png"
            />
            <div className={styles.frameDiv84}>
              <div className={styles.eliasDiv}>CSS</div>
              <div className={styles.eliasDiv}>Express</div>
              <div className={styles.eliasDiv}>Node.js</div>
              <div className={styles.luaDiv1}>Flask</div>
              <div className={styles.luaDiv1}>Flask</div>
              <div className={styles.luaDiv1}>Flask</div>
            </div>
            <div className={styles.frameDiv85}>
              <div className={styles.eliasDiv}>HTML</div>
              <div className={styles.eliasDiv}>SCSS</div>
              <div className={styles.eliasDiv}>Python</div>
              <div className={styles.eliasDiv}>Flask</div>
              <div className={styles.luaDiv1}>Flask</div>
              <div className={styles.luaDiv1}>Flask</div>
            </div>
            <div className={styles.frameDiv86}>
              <div className={styles.chertNodesDiv}>Kahoot Answers Viewer</div>
              <div className={styles.minecraftServersHosting}>
                Get answers to your kahoot quiz
              </div>
              <div className={styles.frameDiv87}>
                <div className={styles.frameDiv88}>
                  <div className={styles.div}>{`Live <~>`}</div>
                </div>
                <div className={styles.frameDiv95}>
                  <div className={styles.div}>{`Cached >=`}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.groupDiv15}>
          <div className={styles.h2Div}>
            <div className={styles.frameDiv20}>
              <div className={styles.div}>#</div>
              <div className={styles.projectsDiv}>projects</div>
            </div>
            <img
              className={styles.line7Stroke}
              alt=""
              src="../line-7-stroke4.svg"
            />
          </div>
          <div
            className={styles.viewAll}
            onClick={onViewAllClick}
          >{`View all ~~>`}</div>
        </div>
      </div>
      <div className={styles.firstDiv}>
        <div className={styles.groupDiv16}>
          <div className={styles.eliasIsAWebDesignerAndFr}>
            <span>{`Elias is a `}</span>
            <span className={styles.webDesignerSpan}>web designer</span>
            <span>{` and `}</span>
            <span className={styles.webDesignerSpan}>front-end developer</span>
          </div>
          <div className={styles.heCraftsResponsiveWebsites}>
            He crafts responsive websites where technologies meet creativity
          </div>
          <div className={styles.buttonDiv1}>
            <div className={styles.div}>Contact me!!</div>
          </div>
        </div>
        <div className={styles.groupDiv17}>
          <img className={styles.logoIcon1} alt="" src="../logo1.svg" />
          <img
            className={styles.imageRemovebgPreview2Icon}
            alt=""
            src="../imageremovebgpreview-2@2x.png"
          />
          <div className={styles.dotsDiv}>
            <div className={styles.frameDiv1}>
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
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
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
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
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
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
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
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
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
              <img
                className={styles.ellipseIcon}
                alt=""
                src="../ellipse-23.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.frameDiv108}>
          <div className={styles.rectangleDiv15} />
          <div className={styles.eliasDiv}>
            <span
              className={styles.currentlyWorkingOn}
            >{`Currently working on `}</span>
            <span className={styles.portfolioSpan}>Portfolio</span>
          </div>
        </div>
      </div>
      <div className={styles.quoteDiv}>
        <div className={styles.withGreatPowerComesGreatE}>
          With great power comes great electricity bill
        </div>
        <div className={styles.frameDiv109}>
          <img className={styles.icon} alt="" src="../.svg" />
        </div>
        <div className={styles.frameDiv110}>
          <div className={styles.eliasDiv}>- Dr. Who</div>
        </div>
        <div className={styles.frameDiv111}>
          <img className={styles.icon} alt="" src="../.svg" />
        </div>
      </div>
      <div className={styles.headerDiv}>
        <div className={styles.frameDiv112} onClick={onFrameContainer112Click}>
          <div className={styles.logoDiv1}>
            <div className={styles.unionDiv1}>
              <div className={styles.rectangleDiv3} />
              <div className={styles.rectangleDiv4} />
              <div className={styles.rectangleDiv5} />
              <div className={styles.rectangleDiv6} />
              <div className={styles.rectangleDiv7} />
              <div className={styles.rectangleDiv8} />
              <div className={styles.rectangleDiv9} />
              <div className={styles.rectangleDiv10} />
              <div className={styles.rectangleDiv11} />
              <div className={styles.rectangleDiv12} />
            </div>
          </div>
          <b className={styles.eliasDiv}>Elias</b>
        </div>
        <div className={styles.frameDiv113}>
          <div
            className={styles.headerLinkDiv}
            onClick={onHeaderLinkContainerClick}
          >
            <div className={styles.div}>#</div>
            <div className={styles.projectsDiv}>home</div>
          </div>
          <div className={styles.frameDiv20}>
            <div className={styles.eliasDiv}>#</div>
            <div className={styles.copyright2022MadeByElias}>works</div>
          </div>
          <div className={styles.frameDiv20}>
            <div className={styles.eliasDiv}>#</div>
            <div className={styles.copyright2022MadeByElias}>about-me</div>
          </div>
          <div className={styles.frameDiv20}>
            <div className={styles.eliasDiv}>#</div>
            <div className={styles.copyright2022MadeByElias}>contacts</div>
          </div>
          <div className={styles.languageSwitcherDiv}>
            <div className={styles.eNDiv}>EN</div>
            <img className={styles.groupIcon1} alt="" src="../group-58.svg" />
            <div className={styles.frameDiv114}>
              <div className={styles.eliasDiv}>RU</div>
              <div className={styles.eliasDiv}>UA</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.mediaDiv1}>
        <img
          className={styles.line10Stroke}
          alt=""
          src="../line-10-stroke.svg"
        />
        <div className={styles.frameDiv115}>
          <img className={styles.discordIcon} alt="" src="../github.svg" />
          <img className={styles.discordIcon} alt="" src="../dribble.svg" />
          <img className={styles.discordIcon} alt="" src="../figma.svg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
