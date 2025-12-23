import styles from "./Loading.module.css";
import { useState, useEffect } from "react";

export default function Loading() {
  const [colorCharIndex, setColorCharIndex] = useState(0);
  const loadingText = "Loading...";
  const loadingTextArr = loadingText.split("");
  const animateSpeed = 50;

  useEffect(() => {
    setTimeout(() => {
      if (colorCharIndex === loadingTextArr.length - 1) {
        setColorCharIndex(0);
      } else setColorCharIndex((prev) => prev + 1);
    }, animateSpeed);
  }, [colorCharIndex]);

  return (
    <div className={styles.loadingContainer}>
      <div className={styles.loadingWrapper}>
        {loadingTextArr.map((char, index) => {
          if (index === colorCharIndex) {
            return (
              <i key={index} className={styles.coloredChar}>
                {char}
              </i>
            );
          } else return <i key={index}>{char}</i>;
        })}
      </div>
    </div>
  );
}
