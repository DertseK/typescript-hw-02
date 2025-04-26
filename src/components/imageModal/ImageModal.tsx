import Modal from "react-modal";
import styles from "./ImageModal.module.css";
import { PropsType } from "./ImageModal.type";

const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)"
  },
  content: {
    padding: 0,
    margin: 0,
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

Modal.setAppElement("#root");

export default function ImageModal({ image, handleCloseModal }: PropsType) {
  const closeModal = () => {
    handleCloseModal(null);
  };

  return (
    <Modal
      isOpen={image ? true : false}
      onRequestClose={closeModal}
      style={customStyles}
    >
      <img
        className={styles.image}
        src={image.urls.regular}
        alt={image.alt_description}
      />
    </Modal>
  );
}
