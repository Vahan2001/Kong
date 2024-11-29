import { useState } from "react";
import style from "./statisticsPanel.module.css";
import secondImg from "../../assets/images/second.png";
import firstImg from "../../assets/images/first.png";
import thirdImg from "../../assets/images/three.png";
import fourthImg from "../../assets/images/four.png";
import circle from "../../assets/images/static.png";
import copy from "../../assets/images/kopi.png";

export default function StatisticsPanel() {

  const contractAddress = "Cm6acA7PHfktYMBa7DK9vKJb4pzHeSr5gYvz1idMRnaf";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress).then(() => {
    }).catch((err) => {
      console.error('Failed to copy text: ', err);
    });
  };

  return (
    <div className="container">
      <div className={style.statisticsSection}>
        <div className={style.header}>
          <span className={style.textLayer}><span className={style.orange_text}>HOW</span> to buy <span className={style.orange_text}>$KONG?</span></span>
        </div>
        <div className={style.notes}>
          <div className={style.note}>
            <img src={firstImg} />
          </div>
          <div className={style.note}>
            <img src={secondImg} />
          </div>
          <div className={style.note}>
            <img src={thirdImg} />
          </div>
          <div className={style.note}>
            <img src={fourthImg} />
          </div>
        </div>
        <div className={style.footer}>
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
                <span>CA: {contractAddress}</span>
                <img
                  src={copy}
                  alt="Copy"
                  onClick={copyToClipboard} 
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
