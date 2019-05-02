function flatten(array) {
  return array.reduce(flattenArrayElements, []);
}

function flattenArrayElements(flattenedArray, element) {
  function addToFlattenedArray(nonArrayElem) {
    flattenedArray.push(nonArrayElem);
  }
  if (Array.isArray(element)) {
    if (checkIfItContainsAnArray(element)) {
      return [...flattenedArray, ...flatten(element)];
    } else {
      element.forEach(addToFlattenedArray);
      return flattenedArray;
    }
  } else {
    return [...flattenedArray, element];
  }
}

function checkIfItContainsAnArray(array) {
  return array.some(isElementAnArray);
  function isElementAnArray(elem) {
    return Array.isArray(elem);
  }
}

export default flatten;
