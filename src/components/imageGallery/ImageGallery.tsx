import ImageCard from "../imageCard/ImageCard";
import styles from "./ImageGallery.module.css";
import LoadMoreBtn from "../loadMoreBtn/LoadMoreBtn";

import { PropsType } from "./ImageGallery.types";
import { ImageType } from "../app/App.types";

export default function ImageGallery({
  images,
  page,
  total,
  handleLoadMore,
  handleOpenModal
}: PropsType) {
  return (
    <>
      <ul className={styles.list}>
        {images.map((el: ImageType) => (
          <li
            key={el.id}
            className={styles.item}
            onClick={() => handleOpenModal(el)}
          >
            <ImageCard src={el.urls.small} alt={el.alt_description} />
          </li>
        ))}
      </ul>
      {page !== total && <LoadMoreBtn heandleClick={handleLoadMore} />}
    </>
  );
}
