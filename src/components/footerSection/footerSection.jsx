import RunningText from "../runningText/runningText";
import kongHeadImg from "../../assets/images/kongHead.png";
import twitterImg from "../../assets/images/twitter2.png";
import telegramImg from "../../assets/images/telegram2.png";
import style from "./footerSection.module.css";

export default function FooterSection() {
  return (
    <div className="container">
      <div className={style.running__text__block}>
        <RunningText />
      </div>
      <div className={style.footer__section}>
        <div className={style.content}>
          <span>
            It's time to <span>$kong</span> it <span>$kong</span> it!
          </span>
        </div>
        <div className={style.media__block}></div>
      </div>
      <footer>
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
      </footer>
    </div>
  );
}
