import React from "react";

const storeList = [
  { id: 1, value: "📝 Download Starter Kit (PDF)" },
  { id: 2, value: "📅 7-Day Calm Plan" },
  { id: 3, value: "🏫 Classroom Pack" },
];

const Store = () => {
  return (
    <>
      <section className="mx-4 mt-10 lg:mx-35 bg-violet-50 px-4 lg:px-10 py-10 rounded-xl shadow-lg">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold mb-4">
            Parent & Teacher Hub
          </h1>
          <p className="text-gray-500 w-full lg:w-[60%]">
            Practical guides, printable routines, and progress insights so you
            can support mindfulness at home and school.
          </p>
          <ul className="flex flex-wrap gap-5 mt-5">
            {storeList.map((item) => (
              <li
                key={item.id}
                className="bg-white border border-gray-200 px-4 py-2 rounded-xl text-violet-700 font-bold"
              >
                {item.value}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default Store;
