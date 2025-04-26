import { FormEvent } from "react";
import toast, { Toaster } from "react-hot-toast";

import { PropsType } from "./SearchBar.types";

import styles from "./SearchBar.module.css";

export default function SearchBar({ onSearch }: PropsType) {
  const heandleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const target = e.target as HTMLFormElement;
    const query = (
      target.elements.namedItem("input") as HTMLInputElement
    ).value.trim();

    if (query === "") {
      toast("Please, enter your query!");
      return;
    }
    onSearch(query);
    target.reset();
  };

  return (
    <>
      <header className={styles.header}>
        <form className={styles.form} onSubmit={heandleSubmit}>
          <input
            className={styles.input}
            type="text"
            name="input"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={styles.button} type="submit">
            Search
          </button>
        </form>
      </header>
      <Toaster />
    </>
  );
}
