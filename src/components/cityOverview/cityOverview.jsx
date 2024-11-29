import style from "./cityOverview.module.css";

export default function CityOverview() {
  return (
    <div className="container">
      <div className={style.heroSection}>
        <div className={style.content}>
          <span className={style.textLayer}>
            <span className={style.orange_text}>BANANA ZONE</span> is waiting
            for a worthy one who <br /> can lead the market to greatness....
            <br />
            <span className={style.orange_text}>AND KONG WILL COME!!</span>
          </span>
        </div>
      </div>
    </div>
  );
}
