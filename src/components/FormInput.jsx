// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import '../style/index.css';

function FormInput({
    iconClassName,
    inputType,
    inputId,
    inputValue,
    inputBackgroundColor,
    inputPlaceholder,
    inputClassName,
    inputAutoComplete,
}) {
    return (
        <div className={inputClassName}>
            <i className={iconClassName}></i>
            <input
                type={inputType}
                id={inputId}
                name={inputId}
                value={inputValue}
                placeholder={inputPlaceholder}
                autoComplete={inputAutoComplete}
                style={{ backgroundColor: inputBackgroundColor }}
            ></input>
        </div>
    );
}

FormInput.propTypes = {
    iconClassName: PropTypes.string,
    inputType: PropTypes.elementType,
    inputId: PropTypes.string,
    inputValue: PropTypes.string,
    inputBackgroundColor: PropTypes.string,
    inputPlaceholder: PropTypes.string,
    inputClassName: PropTypes.string,
    inputAutoComplete: PropTypes.string,
}

export default FormInput;
