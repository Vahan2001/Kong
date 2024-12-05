import { useEffect, useRef } from "react";
import style from "./cityOverview.module.css";

export default function CityOverview() {
  const contentRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (contentRef.current) {
        const rect = contentRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Проверяем, находится ли элемент в зоне видимости
        if (rect.top < windowHeight && rect.bottom > 0) {
          contentRef.current.classList.add(style.visible);
        } else {
          // Убираем класс, если элемент выходит из видимости
          contentRef.current.classList.remove(style.visible);
        }
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={style.heroSection}>
      <div className="container">
        <div className={style.content__center}>
          <div className={style.content} ref={contentRef}>
            <span className={style.textLayer}>
              <span className={style.orange_text}>BANANA ZONE</span> is waiting
              for a worthy one who <br /> can lead the market to greatness....
              <br />
              <span className={style.orange_text}>AND KONG WILL COME!!</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
