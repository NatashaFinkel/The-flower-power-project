import PropTypes from 'prop-types';
import Image from './Image';

function PopUp({ popUpImgSrc, popUpImgAlt, popUpImgClassName, popUpMessage }) {
    return (
        <div>
            <div id="overlay"></div>
            <div id="popup">
                <div>
                    <Image imageSrc={popUpImgSrc} alt={popUpImgAlt} imageClassName={popUpImgClassName} />
                </div>
                <p>{popUpMessage}</p>
            </div>
        </div>
    )
}

PopUp.propTypes = {
    popUpMessage: PropTypes.string,
    popUpImgSrc: PropTypes.string,
    popUpImgAlt: PropTypes.string,
    popUpImgClassName: PropTypes.string,
}

export default PopUp;