var assert = require('assert');
describe('Array', function () {
  describe('#indexOf()', function () {
    it('should return -1 when the value is not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});


describe('str', function () {
  describe('pascalToSnake()', function () {
    it('should return test_controller', function () {
      assert.equal(pascalToSnake("TestController"), "test_controller");
    });
    it('should return string in snake_case', function () {
      assert.equal(pascalToSnake("MovieAndBook"), "movie_and_book");
    });
    it('should return string in snake_case', function () {
      assert.equal(pascalToSnake("App7Test"), "app7_test");
    });
    it('should return string in snake_case', function () {
      assert.equal(pascalToSnake("Home"), "home");
    });
    it('should return string in snake_case', function () {
      assert.equal(pascalToSnake("play-movie"), "play-movie");
    });
    it('should return string in snake_case', function () {
      assert.equal(pascalToSnake(1), "1");
    });
  });
});