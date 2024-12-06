import { useEffect, useRef, useState } from "react";
import RunningText from "../runningText/runningText";
import kongHeadImg from "../../assets/images/kongHead.png";
import twitterImg from "../../assets/images/twitter.png";
import telegramImg from "../../assets/images/telegram.png";
import kongText from "../../assets/images/headertext1.svg";
import kongText2 from "../../assets/images/headertext2.svg";
import kongTextMobile1 from "../../assets/images/headertextmob1.svg";
import kongTextMobile2 from "../../assets/images/headertextmob2.svg";
import animationKong from "../../assets/videos/Kong_Rin2.mp4";
import style from "./heroSection.module.css";

export default function HeroSection() {
  const videoRef = useRef(null);
  const [showKongText, setShowKongText] = useState(true);
  const [showKongText2, setShowKongText2] = useState(false);
  const [showKongTextMobile, setShowKongTextMobile] = useState(true);
  const [showKongText2Mobile, setShowKongText2Mobile] = useState(false);

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      videoElement.addEventListener("play", () => {
        setTimeout(() => setShowKongText(false), 2500);
        setTimeout(() => setShowKongTextMobile(false), 2500);
      });

      videoElement.addEventListener("ended", () => {
        setShowKongText2(true);
        setShowKongText2Mobile(true);
      });
    }

    return () => {
      if (videoElement) {
        videoElement.removeEventListener("play", () => {});
        videoElement.removeEventListener("ended", () => {});
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
          {showKongText && (
            <div className={style.text__back__img}>
              <img src={kongText} alt="Kong Initial Text" />
            </div>
          )}
          {showKongText2 && (
            <div className={style.text__back__img}>
              <img src={kongText2} alt="Kong Final Text" />
            </div>
          )}

          {showKongTextMobile && (
            <div className={style.text__back__img__mobile}>
              <img src={kongTextMobile1} alt="Kong Initial Text" />
            </div>
          )}
          {showKongText2Mobile && (
            <div className={style.text__back__img__mobile}>
              <img src={kongTextMobile2} alt="Kong Final Text" />
            </div>
          )}
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
