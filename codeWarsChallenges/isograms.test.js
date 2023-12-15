const isIsogram = require("./isograms")


test("empty string returns true", () => {
    expect(isIsogram("")).toBe(true);
})


test("aba returns false", () => {
    expect(isIsogram("aba")).toBe(false);
})


test("max returns true", () => {
    expect(isIsogram("max")).toBe(true);
})

test("abcde returns true", () => {
    expect(isIsogram("abcde")).toBe(true);
})

test("AnNie returns false", () => {
    expect(isIsogram("AnNie")).toBe(false);
})