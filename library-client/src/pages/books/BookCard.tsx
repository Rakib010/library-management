import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Link, useNavigate } from "react-router";
import type { BookFormValues, BorrowFormValues } from "@/types";
import { useAddNewBorrowMutation } from "@/redux/api/borrowApi";
import { toast } from "sonner";

export const BookCard = ({
  book,
  onDelete,
}: {
  book: BookFormValues;
  onDelete: (id: string) => void;
}) => {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [borrowOpen, setBorrowOpen] = useState(false);
  const navigate = useNavigate();

  const [borrowBook] = useAddNewBorrowMutation();

  const borrowForm = useForm<BorrowFormValues>();
  const { control, handleSubmit, reset } = borrowForm;

  const onSubmitBorrow = async (data: BorrowFormValues) => {
    await borrowBook({
      bookId: book._id,
      quantity: data.quantity,
      dueDate: data.dueDate,
    }).unwrap();
    toast.success("📘 Borrow added successfully!");
    navigate("/borrowSummary");
    setBorrowOpen(false);
    reset();
  };

  // handleDelete
  const handleConfirmDelete = () => {
    onDelete(book._id);
    setDeleteOpen(false);
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 space-y-3 hover:shadow-lg transition-transform transform hover:-translate-y-1 duration-300">
      {/* Book List */}
      <h3 className="text-xl font-bold text-gray-800 border-b pb-2">
        {book.title}
      </h3>
      <div className="space-y-1 text-sm text-gray-600">
        <p>
          <span className="font-medium text-gray-700">Author:</span>{" "}
          {book.author}
        </p>
        <p>
          <span className="font-medium text-gray-700">Genre:</span> {book.genre}
        </p>
        <p>
          <span className="font-medium text-gray-700">ISBN:</span> {book.isbn}
        </p>
        <p>
          <span className="font-medium text-gray-700">Copies:</span>{" "}
          {book.copies}
        </p>
        <p className="flex items-center gap-2">
          <span className="font-medium text-gray-700">Status:</span>
          <span
            className={`px-2 py-0.5 rounded-full text-xs font-semibold 
        ${
          book.available
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
          >
            {book.available ? "Available" : "Not Available"}
          </span>
        </p>
      </div>

      <div className="flex flex-wrap gap-2 pt-4">
        {/* Book Details */}
        <Button variant="outline" size="sm" className="hover:bg-gray-100">
          <Link to={`/bookDetails/${book._id}`}>View</Link>
        </Button>

        {/* Updated book */}
        <Button
          variant="outline"
          size="sm"
          className="hover:bg-blue-100 text-indigo-700"
        >
          <Link to={`/editBook/${book._id}`}>Edit</Link>
        </Button>

        {/* Delete book */}
        <Dialog open={deleteOpen} onOpenChange={setDeleteOpen}>
          <DialogTrigger asChild>
            <Button variant="destructive" size="sm">
              Delete
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Delete Confirmation</DialogTitle>
            </DialogHeader>
            <p>
              Are you sure you want to delete <b>{book.title}</b>?
            </p>
            <DialogFooter>
              <Button variant="outline" onClick={() => setDeleteOpen(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleConfirmDelete}>
                Confirm Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Borrow book */}
        <Dialog open={borrowOpen} onOpenChange={setBorrowOpen}>
          <DialogTrigger asChild>
            <Button
              size="sm"
              disabled={!book.available}
              className={`${
                book.available
                  ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Borrow
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Borrow Book</DialogTitle>
            </DialogHeader>

            <Form {...borrowForm}>
              <form
                onSubmit={handleSubmit(onSubmitBorrow)}
                className="space-y-4"
              >
                <FormField
                  control={control}
                  name="quantity"
                  rules={{
                    required: "Quantity is required",
                    min: { value: 0, message: "Minimum 1 copy" },
                    max: {
                      value: book.copies,
                      message: `Cannot exceed available copies (${book.copies})`,
                    },
                  }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quantity</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          min={1}
                          max={book.copies}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={control}
                  name="dueDate"
                  rules={{ required: "Due date is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Due Date</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <DialogFooter>
                  <Button type="submit">Confirm Borrow</Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
