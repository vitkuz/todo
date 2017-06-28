export function postBooks(books) {
    return {
        type: "POST_BOOK",
        books: books
    }
}

export function updateBook(book) {
    return {
        type: "UPDATE_BOOK",
        book: book
    }
}

export function removeBook(book) {
    return {
        type: "REMOVE_BOOK",
        book: book
    }
}

export function getBooks() {
    return {
        type: "GET_BOOKS",
    }
}