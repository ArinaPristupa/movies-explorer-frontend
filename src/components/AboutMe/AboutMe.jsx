import React from 'react';
import './AboutMe.css';
import photo from '../../images/photo.jpg';

function AboutMe() {
    return (
        <section className='about-me' id='about-me'>
            <div className='about-me__container'>
                <h2 className='about-me__title'>
                    Студент</h2>
                <div className='about-me__content'>
                    <article className='about-me__article'>
                        <h3 className='about-me__name'>Арина</h3>
                        <p className='about-me__description'>Фронтенд-разработчик, 24 года</p>
                        <p className='about-me__info'>
                            Я живу и работаю в Минске, закончила БНТУ.
                            Учусь в Яндекс Практикуме на курсе Веб-разработчика.
                            Люблю путешествия, компьютерные игры, спорт.
                            Изучаю английский язык.
                            После того, как пройду курс по веб-разработке, хочу развиваться в этом направлении.
                        </p>
                        <a className='about-me__github' href='https://github.com/ArinaPristupa' target='_blank' rel="noreferrer">Github</a>
                    </article>
                    <img className='about-me__photo' src={photo} alt='фото' />
                </div>
            </div>
        </section>
    )
}

export default AboutMe;