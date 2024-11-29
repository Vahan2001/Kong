import style from "./cityOverview.module.css";
import kongHeadImg from "../../assets/images/kongHead.png";

export default function CityOverview() {
  return (
    <div className="container">
      <div className={style.heroSection}>
        <div className={style.content}>
          <span>BANANA ZONE</span>
        </div>
      </div>
    </div>
  );
}
