const shuffle = require("../src/shuffle");

//check that it returns an array of the same length as the argument sent in

describe("shuffle should...", () => {
  test("return the same length", () => {
    const bots = require("../src/botsData");
    const result = shuffle(bots);
    expect(result.length).toEqual(bots.length);
    });
});

//check that it returns an array

describe("shuffle should...", () => {
  test("return an array", () => {
    const bots = require("../src/botsData");
    const result = shuffle(bots);
    expect(Array.isArray(result)).toEqual(true);
    });
});

//check that all the same items are in the array

describe("shuffle should...", () => {
  test("return an array that contains all the same items", () => {
    const bots = require("../src/botsData");
    const result = shuffle(bots);
    expect(result).toEqual(expect.arrayContaining(bots));
    });
});

//check that the items have been shuffled around

describe("shuffle should...", () => {
  test("return an array that is not the same as the original array", () => {
    const bots = require("../src/botsData");
    const result = shuffle(bots);
    expect(result).not.toEqual(bots);
    });
});