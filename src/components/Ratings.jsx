import React from "react";

const ratingList = [
  {
    id: 1,
    stars: "★★★★★",
    review:
      "Bedtime is finally peaceful My 6-year old asks for the Star Boat story every night.",
    name: "Priya, Mom of 6-year-old",
  },
  {
    id: 2,
    stars: "★★★★★",
    review:
      "The 5-minute 'reset' before homework has been a game changer for focus.",
    name: "Ravi, Dad of 10-year-old",
  },
  {
    id: 3,
    stars: "★★★★★",
    review:
      "Our class uses the breathing game after lunch. Kids come back calm and ready.",
    name: "Anika, Grade 4 Teacher",
  },
];

const Ratings = () => {
  return (
    <>
      <section className="px-4 py-4 mt-15 lg:px-35">
        <h1 className="text-2xl lg:text-3xl font-bold mb-5">
          What Families Say
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {ratingList.map((item, index) => (
            <li
              key={item.id}
              className={`bg-white border border-gray-200 rounded-xl p-4 shadow-xl opacity-0 animate-fadeInUp
                transition-transform duration-300 hover:scale-105 cursor-pointer`}
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "forwards",
              }}
            >
              <span className=" text-xl">{item.stars}</span>
              <p className="py-2">“{item.review}”</p>
              <p className="text-gray-500 font-semibold mt-2">— {item.name}</p>
            </li>
          ))}
        </ul>
      </section>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation-name: fadeInUp;
          animation-duration: 0.6s;
          animation-timing-function: ease-out;
          animation-fill-mode: forwards;
        }
      `}</style>
    </>
  );
};

export default Ratings;
