const sum = require("./lesson_3_1");

describe("Testing of various cases where sum <= 50", () => {
  
    test("Sum is equal 49", () => {
    expect(sum(25, 24)).toBe(49);
  });

  test("Sum is equal 50", () => {
    expect(sum(25, 25)).toBe(50);
  });

  test("Sum is negative with one negative number", () => {
    expect(sum(-5, 0)).toBe(-5);
  });

  test("Sum is negative with two negative numbers", () => {
    expect(sum(-5, -45)).toBe(-50);
  });

  test("Sum is equal 0", () => {
    expect(sum(0, 0)).toBe(0);
  });

  test("Sum is equal 1", () => {
    expect(sum(0, 1)).toBe(1);
  });

});

describe("Testing of various cases where sum >= 50", () => {
  
    test("Sum is equal 51", () => {
    expect(sum(25, 26)).toBe(50);
  });

  test("Sum is equal 1000", () => {
    expect(sum(500, 500)).toBe(50);
  });
});

describe("Testing of various cases where a and b is not a number", () => {
  
    test("a & b are numbers in string", () => {
    expect(sum("25", "25")).toBe(50);
  });

  test("a & b are string", () => {
    expect(sum("a", "b")).toBe("ab");
  });

  test("a is number, b is string", () => {
    expect(sum(25, "b")).toBe("25b");
  });

  test("a & b is not defined", () => {
    expect(sum()).toBe(NaN);
  });

});
