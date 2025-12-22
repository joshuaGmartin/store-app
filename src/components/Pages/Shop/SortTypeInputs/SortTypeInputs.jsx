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
          <ArrowDown
            className={selectedSort === desValue ? styles.selectedArrow : null}
          />
        </label>
        <label htmlFor={ascValue}>
          <input
            type="radio"
            id={ascValue}
            checked={selectedSort === ascValue}
            onChange={() => setSelectedSort(ascValue)}
          />
          <ArrowUp
            className={selectedSort === ascValue ? styles.selectedArrow : null}
          />
        </label>
      </div>
    </div>
  );
}
