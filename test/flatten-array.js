Array.prototype.flatten = function() {
  var newArray = [];

  for (var i = 0; i < this.length; i++) {
    if (Object.prototype.toString.call(this[i]) === '[object Array]') {
        newArray = newArray.concat(this[i].flatten());
      }
      else newArray.push(this[i]);
  }
  return newArray.sort();
};

describe('flatten array', function () {
  it('should flatten an array', function () {
    var arr = [1, 2, [1, 2, [3, 4, 5, [1]]], 2, [2]],
        expected = [1, 1, 1, 2, 2, 2, 2, 3, 4, 5];

    arr = arr.flatten();

    expect(arr).toEqual(expected);
  });
});