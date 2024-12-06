import { useEffect, useRef } from "react";
import RunningText from "../runningText/runningText";
import kongHeadImg from "../../assets/images/footerheadtext.svg";
import twitterImg from "../../assets/images/defaulttw.png";
import telegramImg from "../../assets/images/defaulttele.png";
import rocketBanana from "../../assets/videos/Fire_rocketBanana.webm";
import rocketBananaMp4 from "../../assets/videos/Fire_rockethevc-safari.mp4";
import text from "../../assets/images/footerText.svg";

import style from "./footerSection.module.css";

export default function FooterSection() {
  const contentRef = useRef(null);
  const videoRef = useRef(null);

  const isIOS = () => {
    if (navigator.userAgentData) {
      return navigator.userAgentData.platform === "iOS";
    }
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) observer.observe(videoRef.current);

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
            <img src={text} alt="Footer Text" />
          </div>

          <div className={style.footer__video}>
            <video ref={videoRef} loop muted controls={false}>
              {isIOS() ? (
                <source src={rocketBananaMp4} type="video/mp4" />
              ) : (
                <source src={rocketBanana} type="video/webm" />
              )}
            </video>
          </div>
        </div>
      </div>
      <footer>
        <div className="container">
          <div className={style.footer__flex}>
            <div className={style.head__and__text}>
              <img src={kongHeadImg} alt="Kong Head" />
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
