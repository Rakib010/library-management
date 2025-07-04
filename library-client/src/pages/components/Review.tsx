export default function Review() {
  const reviews = [
    {
      name: "Ariana R.",
      quote:
        "This library is amazing! Borrowing books was super easy and fast. Highly recommend!",
      book: "Atomic Habits",
    },
    {
      name: "Mohammad H.",
      quote:
        "I love the collection. Found exactly what I needed for my thesis in a few minutes.",
      book: "Sapiens",
    },
    {
      name: "Anonymous",
      quote:
        "User-friendly system and responsive support. Made my research journey smoother.",
      book: "The Alchemist",
    },
  ];

  return (
    <section className="w-11/12 mx-auto py-12 px-4 md:px-10 my-16 bg-gradient-to-br from-indigo-50 to-white rounded-xl shadow-md">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
        💬 What Readers Are Saying
      </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 p-6 rounded-xl shadow hover:shadow-md transition"
          >
            <p className="text-gray-700 italic mb-4">"{review.quote}"</p>
            <div className="text-sm text-gray-600">
              <p className="font-semibold">{review.name}</p>
              <p>
                📖 Borrowed: <span className="font-medium">{review.book}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
