window.onload = () => {
  let faceOne = document.querySelector('#faceOne')
  let dot = document.createElement('div')
  dot.classList.add('dot')

  let diceDots = [
    ['e'], ['c', 'g'],['c','e', 'g'],['a','c','g','i'],['a','c','e','g','i'],['a','c','d','f','g','i']
  ]

  diceDots.forEach(element => {
    
  });
    dot.style.gridArea = 'e'
    faceOne.appendChild(dot.cloneNode())  
    dot.style.gridArea = 'a'
    faceOne.appendChild(dot.cloneNode())  
}