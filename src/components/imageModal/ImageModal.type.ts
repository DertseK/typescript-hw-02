import { ImageType } from "../app/App.types";

export type PropsType = {
  image: ImageType;
  handleCloseModal: (arg: ImageType | null) => void;
};
