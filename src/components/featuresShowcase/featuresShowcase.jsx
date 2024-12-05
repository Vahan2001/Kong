import { useEffect, useRef } from "react";
import Lottie from "react-lottie";
import style from "./featuresShowcase.module.css";
import firstkongAnimation from "../../assets/animations/1.json";
import secondkongAnimation from "../../assets/animations/2.json";
import thirdkongAnimation from "../../assets/animations/3.json";
import RunningText from "../runningText/runningText";

export default function FeaturesShowcase() {
  const kongDysRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (kongDysRef.current) {
        const rect = kongDysRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
          kongDysRef.current.classList.add(style.visible);
        } else {
          kongDysRef.current.classList.remove(style.visible);
        }
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: firstkongAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const lottieOptions2 = {
    loop: true,
    autoplay: true,
    animationData: secondkongAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const lottieOptions3 = {
    loop: true,
    autoplay: true,
    animationData: thirdkongAnimation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className={style.kong_section}>
      <div className={style.kong_img__blokes}>
        <div
          className={`${style["kong-section-item"]} ${style["kong-section-left"]}`}
        >
          <Lottie options={lottieOptions} />
        </div>
        <div
          className={`${style["kong-section-item"]} ${style["kong-section-center"]}`}
        >
          <Lottie options={lottieOptions2} />
        </div>
        <div
          className={`${style["kong-section-item"]} ${style["kong-section-right"]}`}
        >
          <Lottie options={lottieOptions3} />
        </div>
      </div>
      <div className="container">
        <div className={style.kong_dys} ref={kongDysRef}>
          <div className={style.kong_banner}>
            <p className={style.kong_text}>
              <span className={style.text_layer}>BANANA ZONE</span>
              is also a place <br />
              where the unexpected happens.
              <br />
              <span className={style.text_layer}>KONG FEELS IT</span>
            </p>
          </div>
        </div>
      </div>
      <div className={style.running__text}>
        <RunningText />
      </div>
    </div>
  );
}
