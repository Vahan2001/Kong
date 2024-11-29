import RunningText from "../runningText/runningText";
import kongHeadImg from "../../assets/images/kongHead.png";
import twitterImg from "../../assets/images/twitter.png";
import telegramImg from "../../assets/images/telegram.png";
import style from "./heroSection.module.css";

export default function HeroSection() {
  return (
    <div className="container">
      <div className={style.heroSection}>
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
              <p>The Banana Zone King</p>
            </div>
          </div>
          <div className={style.content__buttons}>
            <div className={style.twitter__btn}>
              <img src={twitterImg} alt="Twitter" />
            </div>
            <div className={style.telegram__btn}>
              <img src={telegramImg} alt="Telegram" />
            </div>
          </div>
        </div>
        <div className={style.running__text__block}>
          <RunningText />
        </div>
      </div>
    </div>
  );
}
