import { gameOfLife } from "./app";

test('', () => {
    const a = 1;
    const b = 1;
    const e = 2;
    const r = gameOfLife(a, b)
    expect (r) .toBe (e)
});
