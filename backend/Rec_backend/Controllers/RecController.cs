using Microsoft.AspNetCore.Mvc;
using Rec_backend.Contracts;
using Rec_backend.Services;

namespace Rec_backend.Controllers
{
    [ApiController]
    [Route("recommendation")]
    public class RecController : ControllerBase
    {
        private readonly RecommendationService _recommendationService;
        private readonly StudyDirectionService _studyDirectionService;
        private readonly OnnxMapper _onnxMapper;

        public RecController(RecommendationService recommendationService, OnnxMapper onnxMapper, StudyDirectionService studyDirectionService)
        {
            _recommendationService = recommendationService;
            _onnxMapper = onnxMapper;
            _studyDirectionService = studyDirectionService;
        }
        [HttpPost]
        public Task<IActionResult> GetRecommendation([FromBody] GetQuestionnaireRequest request, CancellationToken ct)
        {
            try
            {
                // Преобразование запроса в массив float для ML модели
                var mlInput = _onnxMapper.ToMlInput(request);
                // Получение рекомендаций 
                var recommendationNames = _recommendationService.GetRecommendations(mlInput);
                if (recommendationNames.Count < 3)
                    return Task.FromResult<IActionResult>(BadRequest("Модель вернула недостаточно рекомендаций"));
                //  Получение кодов направлений
                var result = recommendationNames
                .Select(name => new
                {
                    Name = name,
                    Code = _studyDirectionService.GetDirectionCode(name) ?? "NOT_FOUND"
                })
                .ToList();
                return Task.FromResult<IActionResult>(Ok(result));
            }
            catch (Exception ex)
            {
                return Task.FromResult<IActionResult>(StatusCode(500, $"Произошла ошибка: {ex.Message}"));
            }
        }
    }
}
