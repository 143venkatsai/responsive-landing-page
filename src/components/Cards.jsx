import React from "react";

const cardList = [
  {
    id: 1,
    info: "Story Meditations",
    title: "Guided Adventures",
    message:
      "Short, age-wise journeys that help kids calm their bodies and name their feelings.",
  },
  {
    id: 2,
    info: "Anytime Calm",
    title: "Tools for Big Feelings",
    message:
      "Quick 'reset' audios for anger, worry, pre-exam jitters and bed time battles.",
  },
  {
    id: 3,
    info: "Parent Hub",
    title: "Guides & Routines",
    message:
      "Weekly tips, printable charts and simple routines you can use at home or school.",
  },
];

const Cards = () => {
  return (
    <>
      <section className="px-4 py-4 lg:px-35 my-10 lg:my-10">
        <h1 className="text-2xl lg:text-3xl font-bold transition-all duration-500 ease-in opacity-100 hover:opacity-90">
          Why Mindery Kids?
        </h1>
        <p className="w-full lg:w-[50%] text-md my-5 text-gray-500 transition-all duration-500 ease-in opacity-100 hover:opacity-90">
          Children learn best through play and stories. Our sessions blend
          gentle breathing, guided imagery, and music to make mindfulness
          enjoyable and effective.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {cardList.map((item) => (
            <li
              key={item.id}
              className="flex flex-col border border-gray-100 shadow-md p-4 rounded-xl bg-white
                transition-all duration-500 ease-in-out
                hover:scale-105 hover:shadow-xl hover:border-green-400"
            >
              <div className="bg-green-100 text-green-600 px-4 py-1 rounded-full w-fit mb-2 transition-colors duration-300 hover:bg-green-200">
                <p className="text-sm font-semibold">{item.info}</p>
              </div>
              <h1 className="font-bold text-lg mb-3 mt-1">{item.title}</h1>
              <p className="text-md text-gray-500">{item.message}</p>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Cards;
