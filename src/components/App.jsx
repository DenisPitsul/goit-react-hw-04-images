import SearchBar from "./SearchBar/SearchBar";
import {getImages} from '../api/api'
import ImageGallery from "./ImageGallery/ImageGallery";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";
import Loader from "./Loader/Loader";
import { useState } from "react";


const App = () => {
  const [galleryList, setGalleryList] = useState([]);
  const [totalGalleryListCount, setTotalGalleryListCount] = useState(0);
  const [searchText, setSearchText] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [largeImageURL, setLargeImageURL] = useState('');

  const onSearchSubmit = async (searchText) => {
    await setPage(1)
    setIsLoading(true)
    setSearchText(searchText)
    const response = await getImages(searchText, page);
    setPage(page + 1)
    setGalleryList([...response.data.hits])
    setIsLoading(false)
    setTotalGalleryListCount(response.data.totalHits)
  }

  const onLoadMoreClick = async () => {
    setIsLoading(true)
    const response = await getImages(searchText, page);
    setPage(page + 1)
    setGalleryList([...galleryList, ...response.data.hits])
    setIsLoading(false);
  }

  const onImageClick = (largeImageURL) => {
    setIsModalOpen(true)
    setLargeImageURL(largeImageURL)
  }

  const modalClose = () => {
    setIsModalOpen(false)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#010101'
      }}
    >
      <SearchBar onSearchSubmit={onSearchSubmit}/>
      {
        galleryList.length > 0 &&
        <ImageGallery galleryList={galleryList} onImageClick={onImageClick}/>
      }
      {
        isLoading &&
        <Loader/>
      }
      {
        galleryList.length !== totalGalleryListCount &&
        <Button onLoadMoreClick={onLoadMoreClick}/>
      }
      {
        isModalOpen &&
        <Modal 
          largeImage={largeImageURL} 
          modalClose={modalClose}
        />
      }
    </div>
  );
}

export default App;
