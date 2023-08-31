import React from 'react';
import './Portfolio.css';
import icon from '../../images/strelka.svg';

function Portfolio() {
    return (
        <section className='portfolio'>
            <div className='portfolio__container'>
                <h2 className='portfolio__title'>
                    Портфолио</h2>
                <ul className='portfolio__list'>
                    <li className='portfolio__item'>
                        <a
                            className='portfolio__item-link'
                            href='https://github.com/ArinaPristupa/how-to-learn'
                            target='_blank'
                            rel="noreferrer" >
                            <p className='portfolio__item-text'>Статичный сайт</p>
                            <img className='portfolio__item-img' src={icon} alt='стрела' />
                        </a>
                    </li>

                    <li className='portfolio__item'>
                        <a
                            className='portfolio__item-link'
                            href='https://arinapristupa.github.io/russian-travel/'
                            target='_blank'
                            rel="noreferrer">
                            <p className='portfolio__item-text'>Адаптивный сайт</p>
                            <img className='portfolio__item-img' src={icon} alt='стрела' />
                        </a>
                    </li>

                    <li className='portfolio__item'>
                        <a
                            className='portfolio__item-link'
                            href='https://github.com/ArinaPristupa/react-mesto-api-full-gha/'
                            target='_blank'
                            rel="noreferrer">
                            <p className='portfolio__item-text'>Одностраничное приложение</p>
                            <img className='portfolio__item-img' src={icon} alt='стрела' />
                        </a>
                    </li>
                </ul >
            </div >
        </section >
    )
}

export default Portfolio;




