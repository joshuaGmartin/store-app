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
      <div className={styles.arrows}>
        <label htmlFor={desValue}>
          <input
            type="radio"
            id={desValue}
            checked={selectedSort === desValue}
            onChange={() => setSelectedSort(desValue)}
          />
          <ArrowDown />
        </label>
        <label htmlFor={ascValue}>
          <input
            type="radio"
            id={ascValue}
            checked={selectedSort === ascValue}
            onChange={() => setSelectedSort(ascValue)}
          />
          <ArrowUp />
        </label>
      </div>
    </div>
  );
}
