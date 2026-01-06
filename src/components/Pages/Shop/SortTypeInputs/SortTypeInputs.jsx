import styles from "./SortTypeInputs.module.css";
import { ArrowUp, ArrowDown } from "lucide-react";

export default function SortTypeInputs({
  sortType,
  selectedSort,
  setSelectedSort,
}) {
  const label = sortType.charAt().toUpperCase() + sortType.slice(1);
  const desValue = sortType + "Des";
  const ascValue = sortType + "Asc";

  return (
    <div className={styles.sortLine}>
      <span>{label + ":"}</span>
      <div className={styles.arrowsAndInputs}>
        <label htmlFor={desValue}>
          <input
            type="radio"
            id={desValue}
            checked={selectedSort === desValue}
            onChange={() => setSelectedSort(desValue)}
          />
          <div
            className={`${styles.arrowWrapper} ${selectedSort === desValue ? styles.selectedArrow : null}`}
          >
            <ArrowDown />
          </div>
        </label>
        <label htmlFor={ascValue}>
          <input
            type="radio"
            id={ascValue}
            checked={selectedSort === ascValue}
            onChange={() => setSelectedSort(ascValue)}
          />
          <div
            className={`${styles.arrowWrapper} ${selectedSort === ascValue ? styles.selectedArrow : null}`}
          >
            <ArrowUp />
          </div>
        </label>
      </div>
    </div>
  );
}
