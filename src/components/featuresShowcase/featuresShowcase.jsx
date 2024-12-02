import style from "./featuresShowcase.module.css";
import kongHeadImg1 from "../../assets/images/degenKong1.png";
import kongHeadImg2 from "../../assets/images/degenKong2.png";
import kongHeadImg3 from "../../assets/images/degenKong3.png";

export default function FeaturesShowcase() {
  return (
    <div className={style.kong_section}>
      <div className={style.kong_img__blokes}>
        <div
          className={`${style["kong-section-item"]} ${style["kong-section-left"]}`}
        >
          <img src={kongHeadImg1} alt="KongHead" />
        </div>
        <div
          className={`${style["kong-section-item"]} ${style["kong-section-center"]}`}
        >
          <img src={kongHeadImg2} alt="KongHead" />
        </div>
        <div
          className={`${style["kong-section-item"]} ${style["kong-section-right"]}`}
        >
          <img src={kongHeadImg3} alt="KongHead" />
        </div>
      </div>
      <div className="container">
        <div className={style.kong_dys}>
          <div className={style.kong_banner}>
            <p className={style.kong_text}>
              <span className={style.text_layer}>BANANA ZONE</span>
              is is also a place <br />
              where the unexpected happens.
              <br />
              <span className={style.text_layer}>KONG FEELS IT</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
