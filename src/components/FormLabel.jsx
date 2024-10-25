// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import '../style/index.css';

function FormLabel({ inputClassName, inputId, inputValue }) {
    return (
        <div className={inputClassName}>
            <label htmlFor={inputId}>{inputValue}</label>
        </div>
    );
}

FormLabel.propTypes = {
    inputClassName: PropTypes.string,
    inputId: PropTypes.string,
    inputValue: PropTypes.string,
}

export default FormLabel;