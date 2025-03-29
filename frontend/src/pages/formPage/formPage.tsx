import Form from "../../components/form/form";
import './formPage.css';
import NSTUlogo from '../../assets/pics/NSTU-logo.png';
import { useNavigate } from "react-router-dom";
import { FormDTO } from "../../shared/models/formDto";
import { RecommendationService } from "../../shared/services/RecomendationService";

const FormPage = () => {
    const navigate = useNavigate();

    const handleFormSubmit = async (data: FormDTO) => {
        navigate('/result', { state: { directions:  await RecommendationService.getRecommendation(JSON.stringify(data))} });
    } // todo: redirect only after 200 status code

    return (
        <div className="main-container">
            <div className="logo-container">
                <img className="logo" src={NSTUlogo} alt="logo" />
            </div>
            <div className='form-container'>
                <Form onFormSubmit={handleFormSubmit} />
            </div>
        </div>
    )
};

export default FormPage;