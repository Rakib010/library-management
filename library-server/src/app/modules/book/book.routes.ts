import { Router } from "express";
import { createBook, deleteBook, getBook, getBookById, updateBookById } from "./book.controller";


const booksRoute = Router()

booksRoute.post('/create-book', createBook)
booksRoute.get('/books', getBook)
booksRoute.get('/books/:bookId', getBookById)
booksRoute.put('/edit-book/:bookId', updateBookById)
booksRoute.delete('/delete-book/:bookId', deleteBook)




export default booksRoute