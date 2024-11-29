import RunningText from "../runningText/runningText";
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
        <footer></footer>
      </div>
    </div>
  );
}
