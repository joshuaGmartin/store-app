import styles from "./CategoryCheckBox.module.css";

export default function CategoryCheckBox({
  cat,
  selectedCats,
  setSelectedCats,
}) {
  function handleOnChange(e) {
    if (e.target.checked) addCat(cat);
    else removeCat(cat);
  }

  function addCat(cat) {
    setSelectedCats([...selectedCats, cat]);
  }

  function removeCat(cat) {
    let newSelectedCats = selectedCats.filter(
      (selectedCat) => selectedCat !== cat
    );

    setSelectedCats(newSelectedCats);
  }

  return (
    <div key={cat + "-cat"}>
      <div className={styles.catLine}>
        <label htmlFor={cat + "-cat"}>
          <input
            type="checkbox"
            id={cat + "-cat"}
            value={cat}
            onChange={() => setSelectedCats(cat)}
            checked={selectedCats.includes(cat)}
          />
          {cat.charAt(0).toUpperCase() + cat.slice(1)}
        </label>
      </div>
    </div>
  );
}
