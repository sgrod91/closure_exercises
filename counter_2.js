function counter(parameter) {
  var count = parameter;
  function actuallyCount() {
    count++;
    return count;
  }
  return actuallyCount;
}


var count = counter(4);
console.log(count());
console.log(count());
console.log(count());
