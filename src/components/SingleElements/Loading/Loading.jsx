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
      {loadingTextArr.map((char, index) => {
        if (index === colorCharIndex) {
          return (
            <span key={index} className={styles.coloredChar}>
              {char}
            </span>
          );
        } else return <span key={index}>{char}</span>;
      })}
    </div>
  );
}
