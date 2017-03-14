function fire(row, col) {
  var board = [
    ['o', ' ', 'o', 'o', ' '],
    ['o', ' ', ' ', ' ', ' '],
    ['o', ' ', 'o', 'o', 'o'],
    ['o', ' ', ' ', ' ', ' '],
    [' ', ' ', 'o', ' ', 'o'],
    [' ', ' ', 'o', ' ', 'o']
  ];
  function hit() {
  if (board[row][col] === 'o') {
    board[row][col] = 'x';
    return 'Hit!';
  } else {
    return 'Miss';
  }
}
}

var hit = fire(0, 1);
console.log(hit());
