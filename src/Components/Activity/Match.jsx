import React from 'react'
import NextBtn from "../../assets/next.png";
import styles from "./Match.module.css";
import pinkCard from "../../assets/pinkCard.png";
import blueCard from "../../assets/blueCard.png";
const Match = ({match,setMatch,data}) => {
    console.log(data)
  return (
    <div>
        <div className={styles.cardContainer}>
            <img src={data.back}/>
      </div>
      <div className={styles.cardContainer2}>
            <img src={data.back}/>
      </div>
        <p className={styles.text}>It's a match !</p>
        <div className={styles.btn}>
        <img src={NextBtn} alt="btn" width={300} onClick={()=>setMatch(false)}/>
      </div>
    </div>

  )
}

export default Match