// Objetos em arrays

let user = {
    name: 'Jorge',
    age: 28,
    email: 'jorgecamargo@gmail.com',
    city: 'Rio de janeiro',
    blogPosts: [
        { title: 'Empadão de frango', likes: 30},
        { title: '4 receitas de purê de batata', likes: 50}
    ],
    login: function () {
        console.log('Usuário logado');
    },
    logout: function () {
        console.log('Usuário deslogado');
    },
    logBlogPosts () { //Mesma coisa da function declaration acima
        console.log(`${this.name} escreveu os seguintes posts: `);

        this.blogPosts.forEach(post => {
            console.log(post.title, post.likes);
        })
    }
}

user.logBlogPosts()
