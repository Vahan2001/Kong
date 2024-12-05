import { useEffect, useRef } from "react";
import RunningText from "../runningText/runningText";
import kongHeadImg from "../../assets/images/kongHead.png";
import twitterImg from "../../assets/images/twitter.png";
import telegramImg from "../../assets/images/telegram.png";
import animationKong from "../../assets/videos/Kong_Rin2.mp4";
import style from "./heroSection.module.css";

export default function HeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.addEventListener("ended", () => {
        document
          .querySelector(`.${style.text__back__img}`)
          .classList.add(style.visible);

        document
          .querySelector(`.${style.text__mobile}`)
          .classList.add(style.visible);
      });
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("ended", () => {
          document
            .querySelector(`.${style.text__back__img}`)
            .classList.add(style.visible);
          document
            .querySelector(`.${style.text__mobile}`)
            .classList.add(style.visible);
        });
      }
    };
  }, []);

  return (
    <div className={style.heroSection}>
      <div className={style.videoBackground}>
        <video ref={videoRef} autoPlay muted playsInline>
          <source src={animationKong} type="video/mp4" />
        </video>
      </div>

      <div className="container">
        <div className={style.content}>
          <div className={style.kong__head}>
            <img src={kongHeadImg} alt="Kong Head" />
          </div>
          <div className={style.text__back__img}>
            <div className={style.text}>
              <h1>
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
              </h1>
              <p>MISSION TO BANANA ZONE</p>
            </div>
          </div>
          <div className={style.text__mobile}></div>
          <div className={style.content__buttons}>
            <div className={style.twitter__btn}>
              <img src={twitterImg} alt="Twitter" />
            </div>
            <div className={style.telegram__btn}>
              <img src={telegramImg} alt="Telegram" />
            </div>
          </div>
        </div>
      </div>
      <div className={style.running__text__block}>
        <RunningText />
      </div>
    </div>
  );
}
