alert("ok");
var colors = ["black",
  "green",
  "red",
  "pink",
  "coral",
  "olive", 
  "khaki", 
  "lime", 
  "maroon", 
  "green", 
  "orchid"
];
var alpha_colors = colors.sort();
var finished = false;
var guesses = 0;
var target = colors[Math.floor(Math.random() * alpha_colors.length)];

function do_game() {
  alert("ok so far");
  var color_guess = prompt("I am thinking of these colors \n\n" + alpha_colors + "What color am I thinking of?");
  guesses += 1;
  checkguess(color_guess);
}

function checkguess(color_guess) {
  if (color_guess == "stop") {
    return false;
  }
  if (colors.indexOf(color_guess) == -1) {
    alert("Sorry.  I don't recognize your color. \n\n Please try again");
    do_game();
  }
  if (color_guess < target) {
    alert("Sorry, your guess is not correct. \n\n Hint: your color is alphabetically lower than mine");
    do_game();
  }
  if (color_guess > target) {
    alert("Sorry, your guess is not correct. \n\n Hint: your color is alphabetically higher than mine");
    do_game();
  }
  if (colors.indexOf(color_guess) >= 0) {
    alert("Congratulations! You have guessed the color! \n\n It took you " + guesses + "guesses to finish the game! \n\n You can see the color in the background");
  }
  document.body.style.backgroundColor = target;
}