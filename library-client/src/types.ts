export type BookFormValues = {
    _id: string
    id: string,
    title: string;
    author: string;
    genre: string;
    isbn: string;
    description: string;
    copies: number;
    available?: boolean;
};

export type BorrowFormValues = {
    book: BookFormValues
    totalQuantity: number;
    dueDate: string;
    quantity: number
    isbn:number
    title:string
};
