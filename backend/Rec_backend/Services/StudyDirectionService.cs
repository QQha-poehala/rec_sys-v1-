namespace Rec_backend.Services;

public class StudyDirectionService
{
    private readonly Dictionary<string, string> _directions = new ()
    {
        ["Информатика и вычислительная техника"] = "09.03.01",
        ["Информационные системы и технологии"] = "09.03.02",
        ["Прикладная информатика"] = "09.03.03",
        ["Программная инженерия"] = "09.03.04",
        ["Информационная безопасность"] = "10.03.01",
        ["Информационная безопасность автоматизированных систем"] = "10.05.03",
        ["Приборостроение"] = "12.03.01",
        ["Биотехнические системы и технологии"] = "12.03.04",
        ["Управление в технических системах"] = "27.03.04"
    };
    public string? GetDirectionCode(string name)
    {
        return _directions.TryGetValue(name, out var code) ? code : null;
    }
}
