import { Olympiads } from "./olympiads";
import { Hobbies } from "./hobbies";

export interface FormModel {
    gender: string;
    sum_use_score: number;
    olympiads: Olympiads;
    hobbies: Hobbies;

    web_development: number;
    system_administration: number;
    mathematics: number;
    hardware: number;
    biology: number;
    data_science: number;
    design: number;
    backend_development: number;
    frontend_development: number;
    economy: number;
    hacking: number;

    preferred_it_job: string;

    uni_was_my_decision: boolean;
    is_grades_important: boolean;
}

export const GenderOptions = [
    { label: "Мужчина", value: "male" },
    { label: "Женщина", value: "female" },
]

export const SumUseScoreOptions = [
    { label: "120-150", value: "120-150" },
    { label: "151-200", value: "151-200" },
    { label: "201-230", value: "201-230" },
    { label: "231-260", value: "231-260" },
    { label: "261-300", value: "261-300" },
]

export const OlympiadsOptions = [
    { label: 'Математика', value: "mathematics" },
    { label: 'Информатика и программирование', value: "computer_science" },
    { label: 'Физика', value: "physics" },
]

export const HobbiesOptions = [
    { label: 'Геймдев, VR, AR', value: "game_development" },
    { label: 'Спорт', value: "sport" },
    { label: 'Программирование', value: "programming" },
    { label: 'Робототехника', value: "robotics" },
    { label: '3D-моделирование', value: "3d_modeling" },
    { label: 'Решение математических задач', value: "mathematics" },
    { label: 'Творчество: музыка, рисование, танцы и т.п.', value: "creativity" },
    { label: 'Физика', value: "physics" },
]

export const LikeOptions = [
    { label: 'Меня это мало интересует', value: 0 },
    { label: 'Затрудняюсь ответить', value: 1 },
    { label: 'Да, это точно про меня!', value: 2 },
]

export const YesNoOptions = [
    { label: 'Да', value: true},
    { label: 'Нет', value: false },
]

export const Jobs = [
    { label: "Разработка игр", value: "game_development" },
    { label: "Веб-разработка", value: "web_development", },
    { label: "Мобильная разработка", value: "mobile_development", },
    { label: "Искусственный интеллект и машинное обучение", value: "artificial_intelligence_and_machine_learning", },
    { label: "Системное программирование", value: "systems_programming", },
    { label: "Кибербезопасность", value: "cybersecurity", },
    { label: "Облачные вычисления и DevOps", value: "devops", },
    { label: "Разработка UI/UX", value: "design_ui_ux", },
    { label: "Аналитика данных", value: "data_analytics", },
    { label: "QA-тестировщик", value: "qa", },
]