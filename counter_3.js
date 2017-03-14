function counter(parameter) {
  var x = parameter;

  function increment() {
    x++;
    return x;
  }

  function decrement() {
    x--;
    return x;
  }

  return {
    StevenDecrement : decrement,
    StevenIncrement : increment
  };
}

var count = counter(4);
console.log(count.StevenDecrement());
