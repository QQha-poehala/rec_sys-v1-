import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NSTUabity from '../../assets/pics/NSTU-abitu.png';
import { StudyDirection } from "../../shared/models/studyDirection";
import './resultPage.css'

const ResultPage = () => {
    const location = useLocation();
    const directions: StudyDirection[] = location.state?.directions;
    const navigate = useNavigate();

    useEffect(() => {
        if (!directions) {
            navigate('/');
        }
    }, [directions, navigate]);

    if (!directions) {
        // Можно также вернуть null или какой-то заглушку, пока выполняется редирект
        return null;
    }

    const goToForm = () => {
        navigate('/form');
    }

    return (
        <div className="result-container">
            <img className='logo' src={NSTUabity} alt='abitu'></img>
            <h1 className='title'>ТВОЙ РЕЗУЛЬТАТ:</h1>
            {directions.map((direction, i) => (
                <div className="result" key={i}>
                    <h2 className='result-name'>{direction.name}</h2>
                    <h3 className='result-code'>{direction.code}</h3>
                </div>
            ))}
            <button className='go-to-test-button' onClick={goToForm}>
                <span className='button-text'>ВЕРНУТЬСЯ НАЗАД</span>
            </button>
        </div>
    )
};

export default ResultPage;