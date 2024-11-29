import style from "./heroSection.module.css";
import kongHeadImg from "../../assets/images/kongHead.png";

export default function HeroSection() {
  return (
    <div className="container">
      <div className={style.heroSection}>
        <div className={style.content}>
          <div className={style.kong__head}>
            <img src={kongHeadImg} alt="Kong Head" />
          </div>
          <div className={style.text}>
            <h1>
              <span className={style.kLetter}>K</span>
              <span className={style.oLetter}>O</span>
              <span className={style.nLetter}>N</span>
              <span className={style.gLetter}>G</span>
            </h1>
            <p>The Banana Zone King</p>
          </div>
          <div className={style.content__buttons}>
            <div className={style.twitter__btn}></div>
            <div className={style.telegram__btn}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
