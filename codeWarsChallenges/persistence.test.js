const persistence = require("./persistence");

test("4 returns 0", () => {
    expect(persistence(4)).toBe(0);
});

test("25 returns 2", () => {
    expect(persistence(25)).toBe(2);
});

test("999 returns 4", () => {
    expect(persistence(999)).toBe(4);
});

test("39 returns 3", () => {
    expect(persistence(39)).toBe(3);
    expect(persistence(4)).toBe(0);
    expect(persistence(25)).toBe(2);
    expect(persistence(999)).toBe(4);
});

