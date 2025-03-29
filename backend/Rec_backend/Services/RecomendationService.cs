using Microsoft.ML.OnnxRuntime;
using Microsoft.ML.OnnxRuntime.Tensors;
using System;
using System.Reflection;

public class RecommendationService
{
    private readonly InferenceSession _session;

    public RecommendationService()
    {
        _session = new InferenceSession("resources/ml/model.onnx");
    }
    public List<string> GetRecommendations(float[] inputData)
    {
        if (inputData.Length != 36)
            throw new ArgumentException("Input data must contain exactly 36 elements.");

        using var results = RunModel(inputData);
        return ProcessModelOutput(results);
    }
    private IDisposableReadOnlyCollection<DisposableNamedOnnxValue> RunModel(float[] inputData)
    {
        var inputTensor = new DenseTensor<float>(inputData, new[] { 1, 36 });
        var inputs = new[] { NamedOnnxValue.CreateFromTensor("float_input", inputTensor) };
        return _session.Run(inputs);
    }
    private List<string> ProcessModelOutput(IDisposableReadOnlyCollection<DisposableNamedOnnxValue>? results)
    {
        var probabilityOutput = results
            .FirstOrDefault(x => x.Name == "output_probability")?
            .Value as IEnumerable<NamedOnnxValue>
            ?? throw new InvalidOperationException("Probability output not found");

        var recommendationsDict = probabilityOutput.First().Value as Dictionary<string, float>
            ?? throw new InvalidOperationException("Invalid recommendations format");

        return recommendationsDict
            .OrderByDescending(kv => kv.Value)
            .Take(3)
            .Select(kv => kv.Key)
            .ToList();
    }
}