import unique from "../index";

test("Removes duplicates from the array", () => {
  var testArray = [1, 1, NaN, NaN, 3, 3, 4, 4, 4];
  var uniqueArray = [1, 3, 4, NaN];
  expect(unique(testArray)).toEqual(uniqueArray);
});

test("Sorts the unique array", () => {
  var testArrayWithOnlyNumbers = [3, 3, 4, 4, 4, 2, 2, 2, 2, 1, 1, 1];
  var uniqueSortedArray = [1, 2, 3, 4];
  expect(unique(testArrayWithOnlyNumbers)).toEqual(uniqueSortedArray);
  var testArrayWithNumberAndStrings = [1, "1", "2", 2, 3, 2];
  uniqueSortedArray = [1, "1", "2", 2, 3];
  expect(unique(testArrayWithNumberAndStrings)).toEqual(uniqueSortedArray);
});
