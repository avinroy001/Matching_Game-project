import React, { useRef, useState } from "react";
import Monkey from "../../assets/monkey.png";
import styles from "./LandingPage.module.css";
import StartBtn from "../../assets/startbtn.png";
import Cloud from "../../assets/cloud.png";
import Star from "../../assets/Star.png";
import Setting from "../../assets/setting.png";
import { useNavigate } from "react-router-dom";
import sound1 from "../../assets/sound1.mp3";
const LandingPage = () => {
  const [isPlay,setIsPlay] = useState(false);
  const audioRef =useRef(null);
  const nav = useNavigate();
  const handleClick = () => {
    const preValue=isPlay;
    setIsPlay(!preValue);
    if(!preValue){
      audioRef.current.play()
    }else{
      audioRef.current.pause()
    }
    nav("/intro");

  };
  return (
    <div>
      <div className={styles.wraaper}>
        <img src={Monkey} alt="monkey" width={550} className="monkey" />
      </div>
      <div className={styles.btn}>
        <img src={StartBtn} alt="btn" width={300} onClick={handleClick} />
      </div>
      <div className={styles.img}>
        <img src={Cloud} alt="cloud" width={450} />
        <p>Welcome Kiddo !</p>
      </div>
      <div className={styles.star}>
        <img src={Star} alt="star" />
      </div>
      <div className={styles.setting}>
        <img src={Setting} alt="setting" />
      </div>
      <audio ref={audioRef}><source src={sound1} type="audio/mp3"/></audio>
    </div>
  );
};

export default LandingPage;