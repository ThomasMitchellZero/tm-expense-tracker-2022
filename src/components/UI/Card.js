import "./Card.css"

//Provides common styling to card-like components.

function Card(props){

    // holds other classes passed via props.  Also has `card` class by default, otherwise card CSS would not apply.
    const classes = `card ${props.className}`
    return <div className={classes}></div>
}

export default Card