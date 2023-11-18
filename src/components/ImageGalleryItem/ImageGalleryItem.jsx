import classes from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({galleryItem, onImageClick}) => {

    return (
        <li className={classes.ImageGalleryItem}>
            <img 
                className={classes.ImageGalleryItemImage} 
                src={galleryItem.webformatURL} alt={galleryItem.id} 
                onClick={() => onImageClick(galleryItem.largeImageURL)}
            />
        </li>
    )
}
export default ImageGalleryItem;