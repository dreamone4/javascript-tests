describe('scoping', function () {
  it('should correctly deal with scoping `this` back to the caller', function () {
    var mod = new Module(),
        request;

    request = function (callback) {
      callback = callback.bind(mod); // Passing mod-context to callback function
      return callback();
    };

    function Module () {
      this.foo = 'bar';
    }

    Module.prototype.method = function() {
      return this.foo;
    };

    Module.prototype.req = function() {
      return request(this.method);
    };

    expect(mod.req()).toBe('bar');
  });
});