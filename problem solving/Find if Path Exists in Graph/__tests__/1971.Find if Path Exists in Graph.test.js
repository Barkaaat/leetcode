const validPath = require("../1971.Find if Path Exists in Graph");

test("test#1", () => {
        expect(validPath(3, [[0,1],[1,2],[2,0]], 0, 2)).toBe(1);
});

test("test#2", () => {
        expect(validPath(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5)).toBe(0);
});