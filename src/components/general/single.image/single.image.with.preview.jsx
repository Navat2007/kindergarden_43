import React from "react";

import placeHolderImage from "../../../images/no-image.png";
import placeHolderPhoto from "../../../images/no-photo.jpg";

const SingleImage = ({
    image,
    isPersonImage = false,
    noPhoto = isPersonImage ? placeHolderPhoto : placeHolderImage,
    inner = false,
    extraClass = "",
}) => {
    if (!inner && (!image || image === ""))
        return <img className={extraClass} src={noPhoto} alt={image} loading='lazy' />;

    return (
        <>
            <img
                className={extraClass}
                src={inner || image.includes("http") ? image : process.env.REACT_APP_BASE_URL + image}
                alt={image}
                loading='lazy'
            />
        </>
    );
};

export default SingleImage;
