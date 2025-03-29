import { useForm, } from 'react-hook-form';
import { FormModel } from '../../shared/models/formModel';
import './form.css';
import { questions } from '../../shared/data/questions';
import { QuestionType } from '../../shared/models/question';
import { FormDTO, mapForm } from '../../shared/models/formDto';

// Define the props type
interface MyFormProps {
    onFormSubmit: (data: FormDTO) => void; // Define the type for onFormSubmit
}

const Form: React.FC<MyFormProps> = ({ onFormSubmit }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormModel>({
        mode: 'onBlur'
    });

    const onSubmit = (data: FormModel) => {
        if (onFormSubmit) {
            onFormSubmit(mapForm(data));
        }
    };

    const handleInput = (e: any) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
    };

    return (
        <form className='form' onSubmit={handleSubmit(onSubmit)} noValidate >
            {questions.map((q, index) => (
                <div className='question-container' key={index}>
                    <h2 className='question-title'>{q.question}</h2>

                    {q.description &&
                        <p className='question-description'>{q.description}</p>
                    }

                    {q.type === QuestionType.Single
                        ? (<div className='answers-container-single'>
                            {q.options.map((option, i) => (
                                <label className='answer' key={i}>
                                    <input className='answer-input'
                                        type="radio" value={option.value}
                                        {...register(q.name as keyof FormModel, { 
                                            required: "Это поле обязательно для заполнения" 
                                        })}
                                    />
                                    {option.label}
                                </label>
                            ))}
                        </div>)

                        : q.type === QuestionType.Multiple
                            ? (<div className='answers-container-multiple'>
                                {q.options.map((option, i) => (
                                    <label className='answer' key={i}>
                                        <input className='answer-input'
                                            type="checkbox"
                                            {...register(`${q.name}.${option.value}` as keyof FormModel)}
                                        />
                                        {option.label}
                                    </label>
                                ))}
                            </div>)

                            : q.type === QuestionType.Scale
                                ? (<div className='answers-container-scale'>
                                    {q.options.map((option, i) => (
                                        <label className='answer' key={i}>
                                            <input className='answer-input'
                                                type="radio" value={option.value}
                                                {...register(q.name as keyof FormModel, { 
                                                    required: "Это поле обязательно для заполнения" 
                                                })}
                                            />
                                            {option.label}
                                        </label>
                                    ))}
                                </div>)

                                : (<div className='answers-container-numeric'>
                                    <label className='answer-numeric'>
                                        <input className='answer-input answer-numeric-input' onInput={handleInput}
                                            type="number" min={q.min} max={q.max}
                                            {...register(q.name as keyof FormModel, { 
                                                required: "Это поле обязательно для заполнения",
                                                min: {
                                                    value: q.min as number,
                                                    message: `Значение должно быть больше или равно ${q.min}`
                                                },
                                                max: {
                                                    value: q.max as number,
                                                    message: `Значение должно быть меньше или равно ${q.max}`
                                                }
                                            })}
                                        />
                                    </label>
                                </div>)
                    }
                    {errors[q.name as keyof FormModel] && <span className='error-message'>{errors[q.name as keyof FormModel]?.message}</span>}
                </div>
            ))}

            <input className='submit-button' type="submit" value="Отправить" />
        </form>
    );
};

export default Form;