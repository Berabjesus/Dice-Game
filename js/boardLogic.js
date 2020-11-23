function updateCurrentScore(randomNumber) {
  let player = document.querySelector('#current-' + activePlayer)
  let currentScore = player.textContent

  if (randomNumber === 1) {
    updatePlayer(player)
  } else {
    player.textContent = parseInt(currentScore) + parseInt (randomNumber)
  }
}


function updateTotalScore() {
  let player = document.querySelector('#current-' + activePlayer)
  let currentScore = player.textContent
  let totalScore = document.querySelector('#total-' + activePlayer)

  totalScore.textContent = parseInt(totalScore.textContent) + parseInt(currentScore)
  updatePlayer(player)
}

function updatePlayer(player) {
  player.textContent = 0
  player.parentElement.parentElement.classList.remove('active-player')
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
  document.querySelector('#current-' + activePlayer).parentElement.parentElement.classList.add('active-player')

}