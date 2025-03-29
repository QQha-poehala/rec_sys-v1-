using System.Text.Json.Serialization;

namespace Rec_backend.Contracts;

public record GetQuestionnaireRequest(
        string gender,
        int sum_use_score,
        HobbiesDto hobbies,
        bool is_grades_important,
        LikesDto likes,
        OlympiadsDto olympiads,
        string preferred_it_job,
        bool uni_was_my_decision
    );

public record HobbiesDto(
    bool game_development,
    bool sport,
    bool programming,
    bool robotics,
    [property: JsonPropertyName("3d_modeling")] bool modeling_3d,
    bool creativity,
    bool mathematics,
    bool physics
);

public record LikesDto(
    int web_development,
    int system_administration,
    int mathematics,
    int hardware,
    int biology,
    int backend_development,
    int data_science,
    int design,
    int economy,
    int frontend_development,
    int hacking
);

public record OlympiadsDto(
    bool mathematics,
    bool computer_science,
    bool physics
);
