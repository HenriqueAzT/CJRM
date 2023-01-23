const postTitle = 'É bolacha ou biscoito?'
const postAuthor = 'Henrique'
const postComment = 15

// usando concatenação

//const postMessage = 'O post "' + postTitle + '" do ' + postAuthor + ', tem  ' + postComment + ' comentários.'


// usando template strings

const postMessage = `O post "${postTitle}" do ${postAuthor}, tem ${postComment} comentários`

console.log(postMessage);

//criando templates HTML

const html = `
 <h2>${postTitle}</h2>
 <p>${postAuthor}</ph2>
 <span>Este post tem ${postComment} comentários</span>

`

console.log(html)