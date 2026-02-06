const { add, subtract } = require("./index");

// Normal cases
test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("adds 10 + 5 to equal 15", () => {
  expect(add(10, 5)).toBe(15);
});

test("subtracts 5 - 3 to equal 2", () => {
  expect(subtract(5, 3)).toBe(2);
});

// Edge cases
test("adds negative numbers -5 + -3 to equal -8", () => {
  expect(add(-5, -3)).toBe(-8);
});

test("adds zero 0 + 0 to equal 0", () => {
  expect(add(0, 0)).toBe(0);
});

test("subtracts to get negative result 3 - 10 to equal -7", () => {
  expect(subtract(3, 10)).toBe(-7);
});
