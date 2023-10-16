import React from 'react';
import './FilterCheckbox.css';


function FilterCheckbox({ filterMovies, isChecked }) {
    return (
        <div className='checkbox'>
            <input type='checkbox' name='filter' onChange={filterMovies} checked={isChecked} className='checkbox__input'></input>
            <p className='checkbox__text'>Короткометражки</p>
        </div>
    )
}

export default FilterCheckbox;