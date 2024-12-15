// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function Image({ imageSrc, imageAlt, imageId, imageClassName, imageDescription, imagePrice, imageDataTestid }) {
    return (
        // eslint-disable-next-line react/no-unknown-property
        <img src={imageSrc} alt={imageAlt} id={imageId} className={imageClassName} description={imageDescription} price={imagePrice} data-testid={imageDataTestid}></img>
    )
}

Image.propTypes = {
    imageSrc: PropTypes.string,
    imageAlt: PropTypes.string,
    imageId: PropTypes.string,
    imageClassName: PropTypes.string,
    imageDescription: PropTypes.string,
    imagePrice: PropTypes.number,
    imageDataTestid: PropTypes.string,
}

export default Image;