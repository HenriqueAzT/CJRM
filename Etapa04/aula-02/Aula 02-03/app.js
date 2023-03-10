// Palavra-chave this

let user = {
    name: 'Jorge',
    age: 28,
    email: 'jorgecamargo@gmail.com',
    city: 'Rio de janeiro',
    blogPosts: ['Empadão de frango', '4 receitas de purê de batata'],
    login: function () {
        console.log('Usuário logado');
    },
    logout: function () {
        console.log('Usuário deslogado');
    },
    logBlogPosts () { //Mesma coisa da function declaration acima
        console.log(`${this.name} escreveu os seguintes posts: `);
        this.blogPosts.forEach(post => {
            console.log(post);
        })
    }
}

user.logBlogPosts()
