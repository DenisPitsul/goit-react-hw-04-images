import { useEffect } from "react";
import classes from "./Modal.module.css"

const Modal = ({largeImage, modalClose}) => {

    const onEscPress = (event) => {
        if (event.code === "Escape") {
            modalClose()
        }
    }

    useEffect(() => {
        document.addEventListener('keyup', onEscPress)
        return () => {
            document.removeEventListener('keyup', onEscPress)
        }
    }, [])

    return (
        <div className={classes.Overlay} onClick={() => modalClose()}>
            <div className={classes.Modal} onClick={e => e.stopPropagation()}>
                <img src={largeImage} alt=""/>
            </div>
        </div>
    )
}

export default Modal;