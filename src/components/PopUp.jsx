import PropTypes from 'prop-types';
import Image from './Image';

function PopUp({ popUpImgSrc, popUpImgClassName, popUpMessage }) {
    return (
        <div>
            <div id="overlay"></div>
            <div id="popup">
                <div>
                    <Image imageSrc={popUpImgSrc} alt="logo du popUp" imageClassName={popUpImgClassName} imageId="popUp-img" imageAlt="Logo du popUp" />
                </div>
                <h2>{popUpMessage}</h2>
            </div>
        </div>
    )
}

PopUp.propTypes = {
    popUpMessage: PropTypes.string,
    popUpImgSrc: PropTypes.string,
    popUpImgClassName: PropTypes.string,
}

export default PopUp;