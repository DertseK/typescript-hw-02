import { useState, useEffect } from "react";

import PacmanLoader from "react-spinners/PacmanLoader";
import ImageGallery from "../imageGallery/ImageGallery";
import SearchBar from "../searchBar/SearchBar";
import ErrorMessage from "../errorMessage/ErrorMessage";
import ImageModal from "../imageModal/ImageModal";

import fetchFotos from "../../api/apiServise";

import { ImageType } from "./App.types";

import "./App.module.css";

function App() {
  const [images, setImages] = useState<ImageType[]>([]);
  const [query, setQuery] = useState<string>("");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [totalPage, setTotalPage] = useState<number | null>(null);
  const [currentImg, setCurrentImg] = useState<ImageType | null>(null);
  const [error, setError] = useState<boolean>(false);

  const handleSearch = (value: string): void => {
    setImages([]);
    setPage(1);
    setQuery(value);
  };

  const handleLoadMore = (): void => {
    setPage((prev) => prev + 1);
  };

  const handleModal = (image: ImageType | null): void => {
    setCurrentImg(image);
  };

  useEffect((): void => {
    setError(false);
    setLoading(true);

    if (query === "") {
      setLoading(false);
      return;
    }

    const getImages = async (): Promise<void> => {
      try {
        const data = await fetchFotos(query, page);
        setImages((prev) => [...prev, ...data.results]);

        if (page === 1) {
          setTotalPage(data.total_pages);
        }
      } catch (error) {
        console.log(" error:", error);
        setError(true);
      }
    };

    getImages();

    setLoading(false);
  }, [query, page]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {images.length > 0 && (
        <ImageGallery
          images={images}
          page={page}
          total={totalPage}
          handleLoadMore={handleLoadMore}
          handleOpenModal={handleModal}
        />
      )}
      <PacmanLoader
        color="red"
        cssOverride={{
          margin: "30px auto",
          color: "red"
        }}
        loading={loading}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      {error && <ErrorMessage />}
      {currentImg && (
        <ImageModal image={currentImg} handleCloseModal={handleModal} />
      )}
    </>
  );
}

export default App;
