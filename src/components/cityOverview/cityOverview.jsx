import style from "./cityOverview.module.css";

export default function CityOverview() {
  return (
    <div className="container">
      <div className={style.heroSection}>
        <div className={style.content}>
          <span className={style.textLayer}><span className={style.orange_text}>BANANA ZONE</span> is waiting for a worthy one who <br/> can lead the market to greatness....<br/> <span className={style.orange_text}>AND KONG WILL COME!!</span></span>
        {/* <div className={style.textContainer}>
          <div>
            <span className={`${style.textLayer} ${style.layer1}`}>BANANA ZONE </span>
            <span className={`${style.textLayer} ${style.layer2}`}>BANANA ZONE </span>
            <span className={style.textLayer}> is waiting for a worthy one who </span>
          </div>
            <span className={style.textLayer}>can lead the market to greatness....</span>
            <div>
             <span className={`${style.textLayer} ${style.layer1}`}>AND KONG WILL COME!!</span>
              <span className={`${style.textLayer} ${style.layer3}`}>AND KONG WILL COME!!</span> 
            </div> 
          </div> */}
        </div>
      </div>
    </div>
  );
}
