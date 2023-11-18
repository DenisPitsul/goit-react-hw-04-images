import classes from './Button.module.css'

const Button = ({onLoadMoreClick}) => {

    return (
        <button 
            type='button' 
            className={classes.Button} 
            onClick={() => onLoadMoreClick()}
        >Load more</button>
    )
}

export default Button;