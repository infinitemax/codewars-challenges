const day1 = require('./day1')

test("1 returns 11", () => {
    expect(day1("1")).toBe(11);
});

test("1abc3 returns 13", () => {
    expect(day1("1abc3")).toBe(13);
});

test("1frt4, 2jf4 returns 2", () => {
    expect(day1("1frt4\n2jf4")).toBe(38);
});