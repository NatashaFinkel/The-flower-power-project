// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';

function FormInput({
    iconClassName,
    inputType,
    inputId,
    inputValue,
    inputBackgroundColor,
    inputClassName,
    inputAutoComplete,
    inputPattern,
    inputRequirement,
}) {
    return (
        <div className={inputClassName}>
            <i className={iconClassName}></i>
            <input
                type={inputType}
                id={inputId}
                name={inputId}
                value={inputValue}
                autoComplete={inputAutoComplete}
                style={{ backgroundColor: inputBackgroundColor }}
                pattern={inputPattern}
                required={inputRequirement}
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
    inputClassName: PropTypes.string,
    inputAutoComplete: PropTypes.string,
    inputPattern: PropTypes.string,
    inputRequirement: PropTypes.bool,
};

export default FormInput;