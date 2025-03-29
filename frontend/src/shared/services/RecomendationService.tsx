import { StudyDirection } from "../models/studyDirection"

export const RecommendationService = {
    async getRecommendation(data : string): Promise<StudyDirection[]> {
        console.log(`${process.env.REACT_APP_API_URI}`);
        return fetch(`${process.env.REACT_APP_API_URI}/recommendation`, {
            method: "post",
            body: data,
            mode: "cors",
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((response) => response.json())
    }

}