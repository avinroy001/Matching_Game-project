import React, { useState } from "react";
import BackBtn from "../../assets/back.png";
import styles from "./Intro.module.css";
import Monkey from "../../assets/monkey.png";
import NextBtn from "../../assets/next.png";
import Cloud from "../../assets/cloud.png";
import Star from "../../assets/Star.png";
import Setting from "../../assets/setting.png";
import banana from "../../assets/banana.png";
import { useNavigate } from "react-router-dom";
import Sound from "react-sound";
import Track from "../../assets/sound1.wav";

const Intro = () => {
  const [isPlaying,setIsPlaying]=useState(false);
  const nav = useNavigate();
  const handleClick = () => {
    nav("/");
  };
  const handleNav = () => {
    setIsPlaying(true);
    nav("/question");

  };
  return (
    <div>
      <div className={styles.back}>
        <img src={BackBtn} alt="" width={130} onClick={handleClick} />
      </div>
      <div className={styles.wraaper}>
        <img src={Monkey} alt="monkey" width={550} className="monkey" />
      </div>
      <div className={styles.btn}>
        <img src={NextBtn} alt="btn" width={300} onClick={handleNav} />
      </div>
      <div className={styles.img}>
        <img src={Cloud} alt="cloud" width={450} />
        <p className={styles.intro}>
          Hi , I am Mizo ! <br /> and I love bananas{" "}
          <img src={banana} alt="" width={60} />
        </p>
      </div>
      <div className={styles.star}>
        <img src={Star} alt="star" />
      </div>
      <div className={styles.setting}>
        <img src={Setting} alt="setting" />
      </div>
      <Sound
        url={Track}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        onFinishedPlaying={() => setIsPlaying(false)}
      />
    </div>
  );
};

export default Intro;