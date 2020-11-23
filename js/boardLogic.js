let winnerBanner = document.getElementById('winnerBanner')

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
  if (parseInt(totalScore.textContent) >= 100) {  
    winnerBanner.style.display = 'block'
    let bannerMsg = document.getElementById('bannerMsg')
    bannerMsg.innerText = "Player " + (parseInt(activePlayer) + 1) + ' Won the game'
    reset()
    return 0;
  }
  updatePlayer(player)
}

function updatePlayer(player, reset = false) {
  player.textContent = 0
  player.parentElement.parentElement.classList.remove('active-player')
  if (reset == false) {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0
  }
  document.querySelector('#current-' + activePlayer).parentElement.parentElement.classList.add('active-player')
}

function reset() {
  activePlayer = 0
  let player = document.querySelector('#current-' + activePlayer)
  updatePlayer(player, true)
  let allTotalScores = document.getElementsByClassName('total-count')

  for (let i = 0; i < allTotalScores.length; i++) {
    allTotalScores[i].textContent = 0
  }

  updateDice(document.getElementById('dice'), 1)
}


function closeBanner() {
  winnerBanner.style.display = 'none'
}