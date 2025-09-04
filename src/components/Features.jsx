import React from "react";

const featuresList = [
  {
    id: 1,
    title: "Ad-Free & Safe",
    message: "Child-first design with privacy controls and no external ads",
  },
  {
    id: 2,
    title: "Rewards that Motivate",
    message:
      "Stars, badges, and gentle streaks encourage healthy habits--no pressure.",
  },
  {
    id: 3,
    title: "Offline Access",
    message: "Download favourite sessions for calm on the go.",
  },
  {
    id: 4,
    title: "Sleep Mode",
    message: "Fade-out music and dim visuals help kids drift off peacefully.",
  },
  {
    id: 5,
    title: "Classroom Friendly",
    message: "Teacher packs with 5-minute start-of-class resets and posters.",
  },
  {
    id: 6,
    title: "Multi-Child Profiles",
    message: "Personalized tracks for each child in the family.",
  },
];

const Features = () => {
  return (
    <>
      <section className="px-4 py-4 lg:px-35 my-10 lg:my-20">
        <h1 className="text-2xl lg:text-3xl mb-6 font-bold transition-opacity duration-500 ease-in opacity-100 hover:opacity-90">
          Built for Kids, Loved by Parents
        </h1>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuresList.map((item, index) => (
            <li
              key={item.id}
              className={`p-4 border border-gray-200 bg-purple-50 rounded-2xl
                opacity-0 animate-fade-in
                transition transform duration-300
                hover:scale-105 hover:shadow-lg`}
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "forwards",
              }}
            >
              <h2 className="text-lg font-bold mb-2">{item.title}</h2>
              <p className="text-md text-gray-500">{item.message}</p>
            </li>
          ))}
        </ul>
      </section>
      <style>
        {`
          @layer utilities {
            .animate-fade-in {
              animation: fadeIn 0.6s ease forwards;
            }
            @keyframes fadeIn {
              from {
                opacity: 0;
                transform: translateY(10px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          }
        `}
      </style>
    </>
  );
};

export default Features;
