import cls from "../App.module.css";

export function Header() {
  return (
    <header className={cls.header}>
      <h1>Photo Club Gallery</h1>
      <h2>List of member photos</h2>
    </header>
  );
}
