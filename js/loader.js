window.onload = () => {
  const dot = document.createElement('div')
  dot.classList.add('dot')

  const sides = document.querySelectorAll('.face')
  const diceDots = [
    ['e'], ['c', 'g'],['c','e', 'g'],['a','c','g','i'],['a','c','e','g','i'],['a','c','d','f','g','i']
  ]

  for (let i = 0; i < sides.length; i++) {
    for (let j = 0; j < diceDots[i].length; j++) {
      dot.style.gridArea = diceDots[i][j]
      sides[i].appendChild(dot.cloneNode()) 
    }    
  }
}