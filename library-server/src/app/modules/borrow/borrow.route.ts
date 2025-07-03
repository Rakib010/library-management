import { Router } from "express"
import { borrowBook, getBorrowBook } from "./borrow.controller"


const borrowRoute = Router()

borrowRoute.post('/borrow/:bookId', borrowBook)
borrowRoute.get('/borrow-summary', getBorrowBook)



export default borrowRoute