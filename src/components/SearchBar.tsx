import cls from "../App.module.css";

type SearchBarProps = {
  setFilterValue: (value: string) => void;
};

export function SearchBar(props: SearchBarProps) {
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    props.setFilterValue(value);
  };

  return (
    <div className={cls.searchBar}>
      <input
        className={cls.searchBarInput}
        type="text"
        placeholder="Search for photos..."
        onChange={handleInputChange}
      />
    </div>
  );
}
