import classes from './ImageGallery.module.css'
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({galleryList, onImageClick}) => {

    return (
        <ul className={classes.ImageGallery}>
            {
                galleryList.map(galleryItem =>
                    <ImageGalleryItem 
                        key={galleryItem.id} 
                        galleryItem={galleryItem}
                        onImageClick={onImageClick}
                    />
                )
            }
        </ul>
    )
}

export default ImageGallery;