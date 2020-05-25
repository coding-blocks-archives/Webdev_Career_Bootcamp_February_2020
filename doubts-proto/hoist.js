var foo = {
  bar: function () {
    console.log(this)
    return this.baz
  },
  baz: 1,
};

(function (x) {
  return x()
})(foo.bar)

