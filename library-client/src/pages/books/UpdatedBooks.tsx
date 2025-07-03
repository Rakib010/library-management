import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  useGetSingleBookQuery,
  useUpdatedBookMutation,
} from "@/redux/api/baseApi";
import { toast } from "sonner";
import type { BookFormValues } from "@/types";

export const UpdatedBooks = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const { data: book, isLoading } = useGetSingleBookQuery(bookId);
  const [updateBook] = useUpdatedBookMutation();

  const form = useForm<BookFormValues>();
  const { control, handleSubmit, reset } = form;

  useEffect(() => {
    if (book?.data) {
      reset(book.data);
    }
  }, [book, reset]);

  const onSubmit = async (data: BookFormValues) => {
    try {
      await updateBook({ bookId, data }).unwrap();
      toast.success("Book updated successfully!");
      navigate("/allBooks");
      reset();
    } catch (error: any) {
      toast.error(error?.data?.message || "Update failed");
    }
  };

  if (isLoading) return <p className="text-center">Loading book data...</p>;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 bg-white/70 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 my-10">
      <h2 className="text-4xl font-extrabold mb-10 text-gray-800 text-center tracking-tight">
        ✍️ Update Book Details
      </h2>

      <Form {...form}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
          {/* Two-column layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Title */}
            <FormField
              control={control}
              name="title"
              rules={{ required: "Title is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Title</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter book title"
                      {...field}
                      className="focus:ring-2 focus:ring-indigo-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Author */}
            <FormField
              control={control}
              name="author"
              rules={{ required: "Author is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Author</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Enter author's name"
                      {...field}
                      className="focus:ring-2 focus:ring-indigo-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Genre */}
            <FormField
              control={control}
              name="genre"
              rules={{ required: "Genre is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Genre</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value}>
                    <FormControl>
                      <SelectTrigger className="focus:ring-2 focus:ring-indigo-500">
                        <SelectValue placeholder="Select a genre" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="FICTION">Fiction</SelectItem>
                      <SelectItem value="NON_FICTION">Non-fiction</SelectItem>
                      <SelectItem value="SCIENCE">Science</SelectItem>
                      <SelectItem value="HISTORY">History</SelectItem>
                      <SelectItem value="BIOGRAPHY">Biography</SelectItem>
                      <SelectItem value="FANTASY">Fantasy</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* ISBN */}
            <FormField
              control={control}
              name="isbn"
              rules={{ required: "ISBN is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">ISBN</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="ISBN Number"
                      {...field}
                      className="focus:ring-2 focus:ring-indigo-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Copies */}
            <FormField
              control={control}
              name="copies"
              rules={{
                required: "Copies are required",
                min: { value: 0, message: "Must be 0 or more" },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="font-semibold">Copies</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Number of copies"
                      {...field}
                      className="focus:ring-2 focus:ring-indigo-500"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          {/* Description full width */}
          <FormField
            control={control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Description</FormLabel>
                <FormControl>
                  <textarea
                    placeholder="Short summary"
                    {...field}
                    rows={4}
                    className="w-full rounded-md border border-gray-300 px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Buttons */}
          <div className="flex justify-end gap-4 pt-6">
            <Button
              variant="outline"
              onClick={() => navigate(-1)}
              className="border-gray-300 hover:bg-gray-100"
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold shadow-md"
            >
              💾 Save Book
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
