// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function Image({
    imageSrc,
    imageAlt,
    imageId,
    imageClassName,
    imageDescription,
    imagePrice,
    imageDataTestid,
}) {
    return (
        <img
            src={imageSrc}
            alt={imageAlt}
            id={imageId}
            className={imageClassName}
            // eslint-disable-next-line react/no-unknown-property
            description={imageDescription}
            // eslint-disable-next-line react/no-unknown-property
            price={imagePrice}
            data-testid={imageDataTestid}
        ></img>
    );
}

Image.propTypes = {
    imageSrc: PropTypes.string,
    imageAlt: PropTypes.string,
    imageId: PropTypes.string,
    imageClassName: PropTypes.string,
    imageDescription: PropTypes.string,
    imagePrice: PropTypes.number,
    imageDataTestid: PropTypes.string,
};

export default Image;