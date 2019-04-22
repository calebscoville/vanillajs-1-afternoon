const board = [];

function play(clickedId) {
    const playerSpan = document.getElementById('player');
    const clickedElement = document.getElementById(clickedId);

    if (playerSpan.innerText === 'X') {
        playerSpan.innerText = 'O';
        clickedElement.innerText = 'X';
      } else {
        playerSpan.innerText = 'X';
        clickedElement.innerText = 'O';
      }
    }
    console.log("board")

    const topLeft = board[0];
  const topCenter = board[1];
  const topRight = board[2];
  const middleLeft = board[3];
  const middleCenter = board[4];
  const middleRight = board[5];
  const bottomLeft = board[6];
  const bottomCenter = board[7];
  const bottomRight = board[8];

  if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert(`${topLeft} is the winner`);
    return;

    if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight) {
        alert(`${middleLeft} is the winner`);
        return;

        if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomRight) {
            alert(`${bottomLeft} is the winner`);
            return;

if (topLeft !== undefined && topLeft === middleCenter && topLeft === bottomRight) {
    alert(`${topLeft} is the winner`);
    return;

    if (topRight !== undefined && topRight === middleCenter && bottomLeft === topRight) {
        alert(`${topRight} is the winner`);
        return;
