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
import { Link } from "react-router";
import type { BookFormValues } from "@/types";

type BorrowFormValues = {
  quantity: number;
  dueDate: string;
};

export const BookCard = ({
  book,
  onDelete,
  onBorrow,
}: {
  book: BookFormValues;
  onDelete: (id: string) => void;
  onBorrow: (bookId: string, data: BorrowFormValues) => void;
}) => {
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [borrowOpen, setBorrowOpen] = useState(false);

  const handleConfirmDelete = () => {
    onDelete(book._id);
    setDeleteOpen(false);
  };

  const borrowForm = useForm<BorrowFormValues>();

  const {
    control,
    handleSubmit,
    reset,
    
  } = borrowForm;

  const onSubmitBorrow = (data: BorrowFormValues) => {
    if (data.quantity > book.copies) {
      alert(`Quantity cannot exceed available copies (${book.copies})`);
      return;
    }
    onBorrow(book._id, data);
    setBorrowOpen(false);
    reset();
  };

  return (
    <div className="bg-white rounded-xl border shadow-sm p-5 space-y-2">
      <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
      <p className="text-sm text-gray-600">Author: {book.author}</p>
      <p className="text-sm text-gray-600">Genre: {book.genre}</p>
      <p className="text-sm text-gray-600">ISBN: {book.isbn}</p>
      <p className="text-sm text-gray-600">Copies: {book.copies}</p>
      <p className="text-sm">
        Availability:{" "}
        <span className={book.available ? "text-green-600" : "text-red-600"}>
          {book.available ? "Available" : "Not Available"}
        </span>
      </p>

      {/* Action buttons */}
      <div className="flex flex-wrap gap-2 pt-2">
        <Button variant="outline" size="sm">
          View
        </Button>
        {/* updated */}
        <Button variant="outline" size="sm">
          <Link to={`/editBook/${book._id}`}>Edit</Link>
        </Button>
        {/* Delete  */}
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

        {/* Borrow */}
        <Dialog open={borrowOpen} onOpenChange={setBorrowOpen}>
          <DialogTrigger asChild>
            <Button size="sm" disabled={!book.available}>
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
                    min: { value: 1, message: "Minimum 1 copy" },
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
