import './welcomePage.css'
import NSTUabity from '../../assets/pics/NSTU-abitu.png';
import ArrowRight from '../../assets/icons/arrow-right.svg';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
    const navigate = useNavigate();

    const goToForm = () => {
        navigate('/form');
    }

    return (
        <div className="welcome-container">
            <img className='logo' src={NSTUabity} alt='abitu'></img>
            <h1 className='title'>УЗНАЙ СВОЁ НАПРАВЛЕНИЕ</h1>
            <h3 className='subtitle'>РЕКОМЕНДАТЕЛЬНАЯ СИСТЕМА ВЫБОРА НАПРАВЛЕНИЯ ОБУЧЕНИЯ НА АВТФ</h3>
            <button className='go-to-test-button' onClick={goToForm}>
                <span className='button-text'>ПЕРЕЙТИ К ТЕСТУ</span>
                <img className='button-icon' src={ArrowRight} alt=''></img>
            </button>
        </div>
    )
};

export default WelcomePage;