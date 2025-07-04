import { Input } from "@/components/ui/input";
import book from "../../assets/book.png";

export const HeroSection = () => {
  return (
    <section className="bg-[#F7F9EB] min-h-[85vh] flex items-center justify-center px-4  font-serif">
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/*  Text */}
        <div className="space-y-6 text-center md:text-left px-2 sm:px-0">
          <p className="text-sm text-gray-600 font-medium flex items-center justify-center md:justify-start gap-2">
            <span className="text-yellow-500 text-xl">⭐</span> Start your
            reading journey today
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Where every page <br />
            is a new <span className="text-indigo-600">Adventure</span>
          </h1>
          <p className="text-gray-600 text-base max-w-md mx-auto md:mx-0">
            From classics to contemporary, our library offers a wide selection
            of books to suit every taste and interest.
          </p>

          {/* Search box */}
          <div className="relative max-w-sm mx-auto md:mx-0">
            <Input
              type="text"
              placeholder="🔍 Search Books"
              className="pl-8 pr-4 py-2 border rounded-full shadow-sm bg-white w-full"
            />
          </div>
        </div>

        {/* Image */}
        <div className="w-full flex justify-center">
          <div className="rounded-xl p-4 max-w-lg w-full">
            <img src={book} alt="Stack of books" />
          </div>
        </div>
      </div>
    </section>
  );
};
