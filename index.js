// Get the dodger element
const dodger = document.getElementById('dodger');

// Define the moveDodgerLeft function
function moveDodgerLeft() {
  // Get the current left position of the dodger
  let left = dodger.style.left;
  left = parseInt(left);

  // Check if the dodger is already at the left edge of the game field
  if (left > 0) {
    // Move the dodger to the left by 10 pixels
    dodger.style.left = `${left - 10}px`;
  }
}

// Define the moveDodgerRight function
function moveDodgerRight() {
  // Get the current left position of the dodger
  let left = dodger.style.left;
  left = parseInt(left);

  // Check if the dodger is already at the right edge of the game field
  if (left < 360) {
    // Move the dodger to the right by 10 pixels
    dodger.style.left = `${left + 10}px`;
  }
}
