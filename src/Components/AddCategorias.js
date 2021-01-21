import React, { useState } from 'react';
import PropTypes from 'prop-types'

export const AddCategorias = ({ setCategorias }) => {

    const [InputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };
    const handleInputSubmit = (e) => {
        e.preventDefault();
        if (InputValue.trim().length > 2) {
            setCategorias(cats => [ InputValue, ...cats]);
            setInputValue('');
        }
    };

    return (
        <form onSubmit={handleInputSubmit}>
            <input
                type='text'
                value={InputValue}
                onChange={handleInputChange}
            />
        </form>
    );
};

AddCategorias.propTypes = {
    setCategorias: PropTypes.func.isRequired
}