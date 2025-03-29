using System;
using Rec_backend.Contracts;
using System.Collections.Generic;
namespace Rec_backend.Services;

public class OnnxMapper {
    public float[] ToMlInput(GetQuestionnaireRequest request)
    {
        var inputList = new List<float>();

        // Gender
        inputList.Add(MapGender(request.gender));

        // SumUseScore
        inputList.Add((float)request.sum_use_score);

        // Olympiads
        inputList.Add(MapBoolean(request.olympiads.mathematics));
        inputList.Add(MapBoolean(request.olympiads.computer_science));
        inputList.Add(MapBoolean(request.olympiads.physics));

        // Hobbies
        inputList.Add(MapBoolean(request.hobbies.game_development));
        inputList.Add(MapBoolean(request.hobbies.sport));
        inputList.Add(MapBoolean(request.hobbies.programming));
        inputList.Add(MapBoolean(request.hobbies.robotics));
        inputList.Add(MapBoolean(request.hobbies.modeling_3d));
        inputList.Add(MapBoolean(request.hobbies.creativity));
        inputList.Add(MapBoolean(request.hobbies.mathematics));
        inputList.Add(MapBoolean(request.hobbies.physics));

        // Likes
        inputList.Add((float)request.likes.web_development);
        inputList.Add((float)request.likes.system_administration);
        inputList.Add((float)request.likes.mathematics);
        inputList.Add((float)request.likes.hardware);
        inputList.Add((float)request.likes.biology);
        inputList.Add((float)request.likes.backend_development);
        inputList.Add((float)request.likes.design);
        inputList.Add((float)request.likes.backend_development);
        inputList.Add((float)request.likes.frontend_development);
        inputList.Add((float)request.likes.economy);
        inputList.Add((float)request.likes.hacking);

        // Other fields
        inputList.Add(MapBoolean(request.uni_was_my_decision));
        inputList.Add(MapBoolean(request.is_grades_important));

        // Preferred IT Job (one-hot encoding)
        AddPreferredItJob(inputList, request.preferred_it_job);

        return inputList.ToArray();
    }

    private float MapGender(string gender)
    {
        return gender.ToLower() == "male" ? 1f : 0f;
    }

    private float MapBoolean(bool value)
    {
        return value ? 1f : 0f;
    }
    // Так как List ссылочный тип данных, то переданный target будет изменен
    private void AddPreferredItJob(List<float> target, string preferredItJob)
    {
        var positions = new Dictionary<string, int>
        {
            ["qa"] = 0,
            ["data_analytics"] = 1,
            ["web_development"] = 2,
            ["artificial_intelligence_and_machine_learning"] = 3,
            ["cybersecurity"] = 4,
            ["mobile_development"] = 5,
            ["devops"] = 6,
            ["design_ui_ux"] = 7,
            ["game_development"] = 8,
            ["systems_programming"] = 9
        };

        int position = positions.TryGetValue(preferredItJob.ToLower(), out var pos) ? pos : -1;

        for (int i = 0; i < positions.Count; i++)
        {
            target.Add(MapBoolean(i == position));
        }
    }
}

