import flatten from "../index";

test("Returns the array as is if no individual element is an array", () => {
  var testArray = [1, 2, undefined, 4, null, { a: 3 }];
  expect(flatten(testArray)).toEqual(testArray);
});

test("Flattens recursively all the individual array elements", () => {
  var testArray = [1, [2, 3]];
  var flattenedArray = [1, 2, 3];
  expect(flatten(testArray)).toEqual(flattenedArray);
  testArray = [[1, [2, 3]], [[4, 5], 6, 7, [8, 9]]];
  flattenedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(flatten(testArray)).toEqual(flattenedArray);
});
