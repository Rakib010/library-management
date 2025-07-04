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
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import type { BookFormValues } from "@/types";
import { useAddNewBookMutation } from "@/redux/api/baseApi";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

export const AddBook = () => {
  const form = useForm<BookFormValues>();
  const { handleSubmit, control, reset } = form;
  const navigate = useNavigate();

  const [createBook] = useAddNewBookMutation();

  const onSubmit = async (data: BookFormValues) => {
    try {
      const newBook = { ...data, available: true };
      await createBook(newBook).unwrap();
      toast.success("📘 Book added successfully!");
      navigate("/allBooks");
      reset();
    } catch (error: any) {
      if (error) {
        toast.error(error?.data?.message || "Something went wrong");
      }
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <div className="bg-white rounded-xl shadow-xl border p-8">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">
          📚 Add a New Book to the Library
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Fill out the form below to register a new book in the system.
        </p>

        <Form {...form}>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Title */}
            <FormField
              control={control}
              name="title"
              rules={{ required: "Title is required" }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter book title" {...field} />
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
                  <FormLabel>Author</FormLabel>
                  <FormControl>
                    <Input placeholder="Author's full name" {...field} />
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
                  <FormLabel>Genre</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select genre" />
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
                  <FormLabel>ISBN</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. 978-3-16-148410-0" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Description */}
            <FormField
              control={control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Short book summary (optional)"
                      {...field}
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
                required: "Copies required",
                min: { value: 0, message: "Minimum 0" },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Copies</FormLabel>
                  <FormControl>
                    <Input
                      type="number"
                      placeholder="Total copies"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Submit Button */}
            <div className="flex justify-end pt-4 gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/allBooks")}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-md shadow-md"
              >
                Save Book
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};
