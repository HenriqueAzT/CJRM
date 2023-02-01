// Escopo

const external = () => {
    const book = 'Sapiens'

    const internal = () => {
        console.log(book.toUpperCase());
    }

    internal();
}