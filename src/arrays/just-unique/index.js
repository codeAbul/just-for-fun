function unique(array) {
  var uniqueArray = array.reduce(removeDuplicates, []);
  uniqueArray.sort();
  return uniqueArray;
}

function removeDuplicates(accumulatorArray, element) {
  if (!accumulatorArray.includes(element)) {
    return [...accumulatorArray, element];
  } else {
    return accumulatorArray;
  }
}

export default unique;
