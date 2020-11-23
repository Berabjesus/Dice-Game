function rollDice() {
  let dice = document.getElementById('dice')
  dice.classList.add('roll')
  switch (getRandomNumber()) {
    case 1:
      dice.style.transform = 'rotate3d(1, 0, 0, 0deg)'
      break;
    case 2:
      dice.style.transform = 'rotate3d(1, 0, 0, 180deg)'
      break;
    case 3:
       dice.style.transform = 'rotate3d(1, 0, 0, 270deg)'
      break;
    case 4:
      dice.style.transform = 'rotate3d(1, 0, 0, 90deg)'
      break;
    case 5:
      dice.style.transform ='rotate3d(0, 1, 0, 270deg)'
      break;
    case 6:
      dice.style.transform = 'rotate3d(0, 1, 0, 90deg)'
      break;
  }

  setTimeout(function(){ 
    if (dice.classList.contains('roll')) {
      dice.classList.remove('roll')
    }}, 1001);
}

function getRandomNumber() {
  rand = Math.floor(Math.random() * 6) + 1
  return rand
}
