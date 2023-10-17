import './ErrorNotFound.css';
import { useNavigate } from 'react-router-dom';

function ErrorNotFound() {

    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    return (
        <section className='error'>
            <h2 className='error__title'>404</h2>
            <p className='error__subtitle'>Страница не найдена</p>
            <button className='error__link' type='button' onClick={goBack}>Назад</button>
        </section>
    )
}

export default ErrorNotFound;