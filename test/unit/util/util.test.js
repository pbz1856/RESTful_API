const lib = require("../../../util/util");

describe('Util Test', () => {
  describe('makeId function - ', () => {
    it('should return same length of string as its input length', () => {
      const idLength = 5;
      const result = lib.makeId(idLength);
      expect(result.length).toBe(idLength);
    });
    test('should throw an Error if the input is negative number', () => {
      expect(() => lib.makeId(-1)).toThrow(Error);
    });

    test('should throw an Error if the input is not positive number', () => {
      expect(() => lib.makeId("")).toThrow(Error);
      expect(() => lib.makeId("abc")).toThrow(Error);
      expect(() => lib.makeId(null)).toThrow(Error);
      expect(() => lib.makeId(undefined)).toThrow(Error);
      expect(() => lib.makeId(true)).toThrow(Error);
    });
  });
});