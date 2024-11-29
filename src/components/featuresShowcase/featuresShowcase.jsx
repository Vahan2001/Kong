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
                                        <b>BANANA ZONE</b>
                                    </span>
                                        is is also a place where the unexpected happens. <br />
                                    <span className={style.text_layer}>
                                        <b>KONG FEELS IT</b>
                                    </span>
                                </p>
                            </div>
                        </div>
                    </div>
            </div>
      
    </div>
  );
}
