const testimonials = [
  {
    initial: "K",
    name: "Kelvin",
    country: "Kenya",
    text: "Nice app, best ever!",
    date: "January 2025",
  },
  {
    initial: "J",
    name: "Joseph",
    country: "Angola",
    text: "Legitimacy is the key.",
    date: "January 2025",
  },
  {
    initial: "S",
    name: "Sandra",
    country: "South Africa",
    text: "User-friendly and super fast.",
    date: "February 2025",
  },
  {
    initial: "T",
    name: "Tunde",
    country: "Nigeria",
    text: "Great experience, highly recommended!",
    date: "February 2025",
  },
  {
    initial: "M",
    name: "Moses",
    country: "Ghana",
    text: "Smooth transactions, no issues.",
    date: "March 2025",
  },
  {
    initial: "A",
    name: "Alice",
    country: "Tanzania",
    text: "Excellent support and easy to use.",
    date: "March 2025",
  },
];

export function Testimonials() {
  return (
    <div className="max-w-3xl mx-auto mt-12 space-y-4 px-4">
      {testimonials.map((testimonial, index) => (
        <div
          key={index}
          className="bg-white rounded-lg shadow-sm p-4 flex gap-4"
        >
          <div
            className={`w-12 h-12 rounded-full bg-${testimonial.initial.toLowerCase()} flex items-center justify-center text-white font-semibold`}
          >
            {testimonial.initial}
          </div>
          <div>
            <div className="flex items-baseline gap-2">
              <h3 className="font-semibold text-gray-900">
                {testimonial.name}
              </h3>
              <span className="text-sm text-gray-500">
                {testimonial.country}
              </span>
            </div>
            <p className="text-gray-600 mt-1">{testimonial.text}</p>
            <p className="text-sm text-gray-400 mt-2">{testimonial.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
