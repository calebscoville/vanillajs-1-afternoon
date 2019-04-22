

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
    console.log("ran")
