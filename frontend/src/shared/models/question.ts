
export class Question {
    name: string;
    question: string;
    description: string;
    options: { label: string, value: any }[];
    type: QuestionType;
    min: number | undefined;
    max: number | undefined;

    constructor(obj: Partial<Question>) {
        this.name = obj.name ?? '';
        this.question = obj.question ?? '';
        this.description = obj.description ?? '';
        this.options = obj.options ?? [];
        this.type = obj.type ?? QuestionType.Single;
        this.min = obj.min;
        this.max = obj.max;
    }
}

export enum QuestionType {
    Single,
    Multiple,
    Scale,
    Numeric,
}