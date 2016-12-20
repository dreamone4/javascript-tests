Object.prototype.clone = function(originalObject) {
    for (var prop in originalObject) {
      if (originalObject.hasOwnProperty(prop)) {
        this[prop] = originalObject[prop];
      }
    }
}

describe('clone object', function () {
  it('should clone an object', function () {
    var expected = {name: 'Ahmed', age: 27, skills: ['cycling', 'walking', 'eating']},
        obj = {};

    obj.clone(expected);

    expect(obj).toEqual(expected);
    expect(obj).not.toBe(expected);
  });
});
