import RunningText from "../runningText/runningText";
import style from "./footerSection.module.css";

export default function FooterSection() {
  return (
    <div className="container">
      <div className={style.running__text__block}>
        <RunningText />
      </div>
      <div className={style.footer__section}>
        <div className={style.content}></div>
      </div>
    </div>
  );
}
