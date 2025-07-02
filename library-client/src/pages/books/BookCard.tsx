import { Button } from "@/components/ui/button";
import type { BookFormValues } from "@/types";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { UpdatedBooks } from "./updatedBooks";

export const BookCard = ({
  book,
  onDelete,
}: {
  book: BookFormValues;
  onDelete: (id: string) => void;
}) => {
  const [open, setOpen] = useState(false);

  const handleConfirmDelete = () => {
    onDelete(book._id);
    setOpen(false);
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

      {/* Action buttons  */}
      <div className="flex flex-wrap gap-2 pt-2">
        {/* view details book */}
        <Button variant="outline" size="sm">
          View
        </Button>

        {/* Edit book */}
        <UpdatedBooks book={book} />

        {/* Delete Book */}
        <Dialog open={open} onOpenChange={setOpen}>
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
              <Button variant="outline" onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button variant="destructive" onClick={handleConfirmDelete}>
                Confirm Delete
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Button size="sm">Borrow</Button>
      </div>
    </div>
  );
};
