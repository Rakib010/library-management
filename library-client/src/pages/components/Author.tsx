import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

import a1 from "../../assets/a1.jpg";
import a2 from "../../assets/a2.jpg";
import a3 from "../../assets/a3.jpg";
import a4 from "../../assets/a4.jpg";
import a5 from "../../assets/a5.jpg";

const authors = [
  {
    name: "John Doe",
    image: a1,
    bio: "John is a best-selling author known for inspiring stories and sharp insights.",
  },
  {
    name: "Jane Smith",
    image: a2,
    bio: "Jane writes on science and philosophy. Her works challenge conventional thinking.",
  },
  {
    name: "Alex Brown",
    image: a3,
    bio: "Alex is a historical fiction writer with a passion for storytelling and culture.",
  },
  {
    name: "Emily Carter",
    image: a4,
    bio: "Emily is an award-winning novelist who focuses on empowering stories about women and identity.",
  },
  {
    name: "David Kim",
    image: a5,
    bio: "David is a tech blogger and futurist who explores the intersection of AI, ethics, and society.",
  },
];

export default function Author() {
  return (
    <section className="w-11/12 mx-auto px-6 py-12 bg-gradient-to-br from-indigo-50 to-white rounded-xl shadow-md my-16">
      <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
        ✍️ Meet the Authors
      </h2>

      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="author-swiper"
      >
        {authors.map((author, index) => (
          <SwiperSlide key={index}>
            <div className="bg-gray-50 p-6 rounded-xl shadow-md text-center space-y-4 hover:shadow-lg transition-all duration-300">
              <img
                src={author.image}
                alt={author.name}
                className="w-24 h-24 mx-auto rounded-full object-cover shadow"
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {author.name}
              </h3>
              <p className="text-sm text-gray-600">{author.bio}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
