const genresRouter = require("../../../routers/genres");
const http = require('http');
describe("Genres Router -", () => {
  describe("/", () => {

    // Tests
    // by default return some message
    // Still return the same output with input body

    // GET - Return default GET 
    it('should return default message', () => {
      expect(1).toBe(1);
    });
    // POST - NA

    // UPDATE - NA

    // DELETE - NA
  });

  describe("/:id ", () => {
    // Invalid body return 400
  });
});