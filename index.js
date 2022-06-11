let x = 1, y = 2, score = 0, level = 1, isGame = true, guessed = 0;

let name = prompt("Enter your name");
console.log("Welcome " + name);

const numRange = (y) => {
  guessed = prompt("Enter a number between " + 1 + " to " + y);
  return guessed;
}

while (isGame) {
  numRange(y);
  let value = Math.floor(Math.random() * y) + 1;
  if (guessed == value) {
    y = y + 1;
    score = score + 1;
    console.log("Score: " + score)
  }
  else {
    console.log("Game Over");
    console.log("Your Score is " + score);
    isGame = false;
  }
}





