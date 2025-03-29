import { FormModel } from "./formModel";
import { Hobbies } from "./hobbies";
import { Olympiads } from "./olympiads";

export interface FormDTO {
    gender: string;
    sum_use_score: number;
    olympiads: Olympiads;
    hobbies: Hobbies;
    likes: Likes;
    preferred_it_job: string;
    uni_was_my_decision: boolean;
    is_grades_important: boolean;
}

export interface Likes {
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
}

export const mapForm = (formModel: FormModel): FormDTO => {
    return {
        gender: formModel.gender,
        sum_use_score: +formModel.sum_use_score,
        olympiads: formModel.olympiads,
        hobbies: formModel.hobbies,
        likes: {
            web_development: +formModel.web_development,
            system_administration: +formModel.system_administration,
            mathematics: +formModel.mathematics,
            hardware: +formModel.hardware,
            biology: +formModel.biology,
            data_science: +formModel.data_science,
            design: +formModel.design,
            backend_development: +formModel.backend_development,
            frontend_development: +formModel.frontend_development,
            economy: +formModel.economy,
            hacking: +formModel.hacking,
        },
        preferred_it_job: formModel.preferred_it_job,
        uni_was_my_decision: Boolean(formModel.uni_was_my_decision),
        is_grades_important: Boolean(formModel.is_grades_important),
    }
}