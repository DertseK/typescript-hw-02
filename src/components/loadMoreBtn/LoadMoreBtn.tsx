import styles from "./LoadMoreBtn.module.css";
import { PropsType } from "./LoadMoreBtn.types";

export default function LoadMoreBtn({ heandleClick }: PropsType) {
  return (
    <button className={styles.button} onClick={heandleClick}>
      Load more
    </button>
  );
}
