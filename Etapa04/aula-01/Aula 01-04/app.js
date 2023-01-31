// adicionando métodos

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
    }
}

user.login()
user.logout()