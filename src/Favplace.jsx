import React from "react";
import pin from './assets/pin.png'

const FavPlace = (item) => {

    const {title,location,googleMapsUrl,startDate, endDate, description, imageUrl} = item
    return(
        <>
        <div className="fav-place">

            <img src={imageUrl} alt="" className="image" />
            <div>
                <img src={pin} className="pin" alt="" /><span > {location}</span> <a href={googleMapsUrl}>View on Google maps</a>
                <h1>{title}</h1>
                <div className="location"> {startDate}-{endDate}</div>
                <p>{description}</p>
            </div>

        </div>
        </>
    )
}

export default FavPlace;
