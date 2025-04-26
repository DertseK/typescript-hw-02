import { PropsType } from "./ImageCard.types";

import styles from "./ImageCard.module.css";

export default function ImageCard({ src, alt }: PropsType) {
  return (
    <div className={styles.wrapper}>
      <img className={styles.image} src={src} alt={alt} />
    </div>
  );
}
