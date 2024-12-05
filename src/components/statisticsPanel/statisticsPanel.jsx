import { useState, useEffect, useRef } from "react";
import style from "./statisticsPanel.module.css";
import secondImg from "../../assets/images/second.png";
import firstImg from "../../assets/images/first.png";
import thirdImg from "../../assets/images/three.png";
import fourthImg from "../../assets/images/four.png";
import circle from "../../assets/images/static.png";
import copy from "../../assets/images/kopi.png";
import success from "../../assets/images/copy-success.png";

export default function StatisticsPanel() {
  const contractAddress = "Cm6acA7PHfktYMBa7DK9vKJb4pzHeSr5gYvz1idMRnaf";

  const [shortenedAddress, setShortenedAddress] = useState(contractAddress);
  const [currentNote, setCurrentNote] = useState(0);
  const [currentImage, setCurrentImage] = useState(copy);

  const headerRef = useRef(null);
  const notesRef = useRef(null);
  const footerRef = useRef(null);

  const updateAddressBasedOnScreenSize = () => {
    if (window.innerWidth <= 1024) {
      setShortenedAddress(
        `${contractAddress.slice(0, 6)}...${contractAddress.slice(-3)}`
      );
    } else {
      setShortenedAddress(contractAddress);
    }
  };

  useEffect(() => {
    updateAddressBasedOnScreenSize();
    window.addEventListener("resize", updateAddressBasedOnScreenSize);

    return () => {
      window.removeEventListener("resize", updateAddressBasedOnScreenSize);
    };
  }, []);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(contractAddress)
      .then(() => {
        setCurrentImage(success);
        setTimeout(() => {
          setCurrentImage(copy);
        }, 3000);
      })
      .catch((err) => {
        console.error("dont copy", err);
      });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(style.visible);
          } else {
            entry.target.classList.remove(style.visible);
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = [headerRef.current, notesRef.current, footerRef.current];
    elements.forEach((el) => el && observer.observe(el));

    return () => {
      elements.forEach((el) => el && observer.unobserve(el));
    };
  }, []);

  const handleDotClick = (index) => {
    setCurrentNote(index);
  };

  return (
    <div className={style.statisticsSection}>
      <div ref={headerRef} className={`${style.header} ${style.hidden}`}>
        <span className={style.textLayer}>
          <span className={style.orange_text}>HOW</span> to buy{" "}
          <span className={style.orange_text}>$KONG?</span>
        </span>
      </div>
      <div ref={notesRef} className={`${style.notes} ${style.hidden}`}>
        <div className={style.notesWrapper}>
          <div
            className={`${style.note} ${style.first_note} ${
              currentNote === 0 ? style.visible : ""
            }`}
          >
            <span>1. Create a Phantom wallet</span>
            <span className={style.desc}>
              Visit phantom.app and follow the simple steps to create a new
              account in the app or browser extension.
            </span>
          </div>
          <div
            className={`${style.note} ${style.second_note} ${
              currentNote === 1 ? style.visible : ""
            }`}
          >
            <span>2. Get some $SOL</span>
            <span className={style.desc}>
              Tap the BUY button in the app to purchase Solana, or deposit $SOL
              to your Phantom wallet from the crypto exchange of your choice.
            </span>
          </div>
          <div
            className={`${style.note} ${style.third_note} ${
              currentNote === 2 ? style.visible : ""
            }`}
          >
            <span>3. Swap $SOL for $KONG</span>
            <span className={style.desc}>
              Tap the SWAP icon in your Phantom wallet and paste the $KONG token
              address. Swap your $SOL for $KONG.
            </span>
          </div>
          <div
            className={`${style.note} ${style.fourth_note} ${
              currentNote === 3 ? style.visible : ""
            }`}
          >
            <span className={style.four_span}>
              4. You are now in a $KONG
              <br /> tribe!
            </span>
            <span className={style.four_span}>
              CONQUER THE BANANA
              <br /> ZONE!
            </span>
          </div>
        </div>
      </div>

      <div className={style.dots}>
        {[firstImg, secondImg, thirdImg, fourthImg].map((_, index) => (
          <div
            key={index}
            className={`${style.dot} ${
              currentNote === index ? style.active : ""
            }`}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </div>

      <div ref={footerRef} className={`${style.footer} ${style.hidden}`}>
        <div className={style.circle}>
          <img src={circle} />
        </div>
        <div className={style.statics}>
          <span className={style.footer_head}>KONGENOMICS</span>
          <div className={style.copy}>
            <div className={style.row}>
              <div className={style.first_row}>
                <span>Ticker: $KONG</span>
              </div>
              <div className={`${style.first_row} ${style.second_row}`}>
                <span>Total Supply - 1,000,000,000</span>
              </div>
            </div>
            <div className={`${style.row} ${style.sec_row}`}>
              <span>CA: {shortenedAddress}</span>
              <img src={currentImage} alt="Copy" onClick={copyToClipboard} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
