const newMain = document.querySelector('#main')
newMain.remove('#main')

let newHeader = document.createElement('h1')
newHeader.setAttribute('id', 'victory')

newHeader.innerHTML = 'Alex is the champion'