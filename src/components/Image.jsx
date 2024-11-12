// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function Image({ imageSrc, imageAlt, imageId, imageClassName, imageTitle, imageDescription, imagePrice, imageDataTestid }) {
    return (
        <img src={imageSrc} alt={imageAlt} id={imageId} className={imageClassName} title={imageTitle} description={imageDescription} price={imagePrice} data-testid={imageDataTestid}></img>
    )
}

Image.propTypes = {
    imageSrc: PropTypes.string,
    imageAlt: PropTypes.string,
    imageId: PropTypes.string,
    imageClassName: PropTypes.string,
    imageTitle: PropTypes.string,
    imageDescription: PropTypes.string,
    imagePrice: PropTypes.number,
    imageDataTestid: PropTypes.string,
}

export default Image;