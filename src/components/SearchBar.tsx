import cls from "../App.module.css";

export function SearchBar() {
  return (
    <div className={cls.searchBar}>
      <input
        className={cls.searchBarInput}
        type="text"
        placeholder="Search for photos..."
      />
    </div>
  );
}
