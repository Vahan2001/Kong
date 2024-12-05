import { useEffect, useRef } from "react";
import RunningText from "../runningText/runningText";
import kongHeadImg from "../../assets/images/kongHead.png";
import twitterImg from "../../assets/images/defaulttw.png";
import telegramImg from "../../assets/images/defaulttele.png";
import rocketBanana from "../../assets/videos/Fire rocket-vp9-chrome.webm";
import style from "./footerSection.module.css";

export default function FooterSection() {
  const contentRef = useRef(null);
  const mediaBlockRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          contentRef.current.classList.add(style.visible);
          mediaBlockRef.current.classList.add(style.visible);
        } else {
          contentRef.current.classList.remove(style.visible);
          mediaBlockRef.current.classList.remove(style.visible);
        }
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) observer.observe(contentRef.current);
    if (mediaBlockRef.current) observer.observe(mediaBlockRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <div className={style.running__text__block}>
        <RunningText />
      </div>
      <div className={`${style.footer__section}`}>
        <div className="container">
          <div ref={contentRef} className={`${style.content} ${style.hidden}`}>
            <span>
              It's time to <span>$kong</span> it <span>$kong</span> it!
            </span>
          </div>
          <div
            ref={mediaBlockRef}
            className={`${style.media__block} ${style.hidden}`}
          ></div>
          <div className={style.footer__video}>
            <video autoPlay loop muted>
              <source src={rocketBanana} type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className={style.footer__flex}>
            <div className={style.head__and__text}>
              <img src={kongHeadImg} alt="Kong Head" />
              <p>
                <span className={style.kLayer}>
                  <span className={style.kLetter}>K</span>
                  <span className={style.kBottomLayer}>K</span>
                </span>
                <span className={style.oLayer}>
                  <span className={style.oLetter}>O</span>
                  <span className={style.oBottomLayer}>O</span>
                </span>
                <span className={style.nLayer}>
                  <span className={style.nLetter}>N</span>
                  <span className={style.nBottomLayer}>N</span>
                </span>
                <span className={style.gLayer}>
                  <span className={style.gLetter}>G</span>
                  <span className={style.gBottomLayer}>G</span>
                </span>
              </p>
            </div>
            <div className={style.icon}>
              <div className={style.tele__and__tw}>
                <div className={style.tele__blok}>
                  <img src={telegramImg} alt="telegram" />
                </div>
                <div className={style.twitter__blok}>
                  <img src={twitterImg} alt="twitter" />
                </div>
              </div>
            </div>
          </div>
          <div className={style.copyright}>
            <span>© KONG 2024 - All rights reserved</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
