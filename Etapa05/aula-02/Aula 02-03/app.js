const link = document.querySelector('a')

console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://youtube.com.br')

link.innerText = 'YouTube'

const paragraph = document.querySelector('p')
console.log(paragraph.getAttribute('class'));

paragraph.setAttribute('class', 'success')

paragraph.setAttribute('style', 'color: violet;')