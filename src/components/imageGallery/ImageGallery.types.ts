import { ImageType } from "../app/App.types";

export type PropsType = {
  images: ImageType[];
  page: number;
  total: number | null;
  handleLoadMore: () => void;
  handleOpenModal: (image: ImageType) => void;
};
