// choose at most `maxKeywords` keywords with confidence score of at least `minConfidence`
// TODO: make this user configurable
const maxKeywords = 4;
const minConfidence = 0.8;

export function transformResponse(data) {
  // returned data is heavily, and annoyingly nested
  // we really want data.outputs[0].data.concepts
  // null coalescing operator would be awesome here
  if (
    data.outputs &&
    data.outputs.length &&
    data.outputs[0].status &&
    data.outputs[0].status.code === 10000 &&
    data.outputs[0].data
  ) {
    const concepts = (data.outputs[0].data.concepts || []).slice(
      0,
      maxKeywords,
    );
    return concepts
      .filter(concept => concept.value > minConfidence)
      .map(concept => concept.name);
  }

  return [];
}
