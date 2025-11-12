import styles from "./SortTypeInputs.module.css";

export default function SortTypeInputs({
  sortType,
  selectedSort,
  setSelectedSort,
}) {
  const label = sortType.charAt().toUpperCase() + sortType.slice(1);
  const desValue = sortType + "Des";
  const ascValue = sortType + "Asc";

  return (
    <div>
      <span>{label + ":"}</span>
      <label htmlFor={desValue}>
        Descending
        <input
          type="radio"
          id={desValue}
          checked={selectedSort === desValue}
          onChange={() => setSelectedSort(desValue)}
        />
      </label>
      <label htmlFor={ascValue}>
        Ascending
        <input
          type="radio"
          id={ascValue}
          checked={selectedSort === ascValue}
          onChange={() => setSelectedSort(ascValue)}
        />
      </label>
    </div>
  );
}
