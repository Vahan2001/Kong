import style from "./featuresShowcase.module.css";

export default function FeaturesShowcase() {
  return (
    <div className="container">
            <div className={style.kong_section}>
                    <div className={`${style["kong-section-item"]} ${style["kong-section-left"]}`}></div>
                    <div className={`${style["kong-section-item"]} ${style["kong-section-center"]}`}></div>
                    <div className={`${style["kong-section-item"]} ${style["kong-section-right"]}`}>
                        <div className={style.kong_dys}>
                            <div className={style.kong_banner}>
                                <p className={style.kong_text}>
                                    <span className={style.text_layer}>
                                        BANANA ZONE
                                    </span>
                                        <p className={style.text}>is is also a place <br /> where the unexpected happens.</p>
                                    <span className={style.text_layer}>
                                       KONG FEELS IT
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
      
    </div>
  );
}
