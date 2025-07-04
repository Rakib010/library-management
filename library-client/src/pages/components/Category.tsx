import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import b1 from "../../assets/b1.jpg";
import b2 from "../../assets/b2.jpg";
import b3 from "../../assets/b3.jpg";
import b4 from "../../assets/b4.jpg";
import b5 from "../../assets/b5.jpg";
import b6 from "../../assets/b6.jpg";
import b7 from "../../assets/b7.jpg";

export default function CategorySlider() {
  const categories = [
    { name: "Adventure", image: b1 },
    { name: "Biography", image: b2 },
    { name: "Romance", image: b3 },
    { name: "Science", image: b4 },
    { name: "History", image: b5 },
    { name: "Fiction", image: b6 },
    { name: "Children’s Book", image: b7 },
  ];

  return (
    <div className="py-10 px-6 bg-gradient-to-br from-white to-indigo-50 max-w-7xl mx-auto my-10 rounded-lg">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-2xl font-extrabold text-gray-900 leading-tight">
          Browse Books <br /> by Genre
        </h2>
        <button className="text-yellow-500 font-semibold  hover:underline transition text-lg">
          Explore More Categories
        </button>
      </div>

      <Swiper
        spaceBetween={24}
        grabCursor={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="w-full"
        breakpoints={{
          320: { slidesPerView: 1.2 },
          480: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          1024: { slidesPerView: 5 },
        }}
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group transform transition duration-300 hover:scale-105 hover:shadow-2xl">
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-48 object-cover"
              />

              {/* Gradient overlay for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition" />

              {/* Text overlay */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center px-3">
                <p className="text-white text-lg font-semibold tracking-wide drop-shadow-lg">
                  {category.name}
                </p>
                <div className="h-1 w-10 bg-red-500 rounded mx-auto mt-1 opacity-0 group-hover:opacity-100 transition" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
