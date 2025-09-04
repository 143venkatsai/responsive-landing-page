import React from "react";

const planList = [
  {
    id: 1,
    title: "Starter",
    info: "Perfect for new Explorers",
    type: "Free",
    planDetails: [
      { id: 1, value: "5 guided meditations" },
      { id: 2, value: "2 sleep stories" },
      { id: 3, value: "Parent starter kit" },
    ],
    buttonText: "Get Started",
  },
  {
    id: 2,
    title: "Premium",
    info: "Unlock full potential",
    type: "₹200/mo",
    planDetails: [
      { id: 1, value: "Unlimited meditations" },
      { id: 2, value: "Sleep stories & calming music" },
      { id: 3, value: "Printable guides for parents" },
    ],
    buttonText: "Upgrade Now",
  },
  {
    id: 3,
    title: "Family",
    info: "For multiple kids",
    type: "₹499/mo",
    planDetails: [
      { id: 1, value: "4 child profiles" },
      { id: 2, value: "Rewards & streaks" },
      { id: 3, value: "Classroom meditation pack" },
    ],
    buttonText: "Get Family Plan",
  },
];

const Plan = () => {
  return (
    <>
      <section className="mx-4 my-4 lg:mx-35 bg-violet-50 py-10 rounded-xl">
        <h1 className="text-center text-2xl lg:text-3xl font-bold mb-2">
          Choose Your Plan
        </h1>
        <p className="text-center text-md text-gray-600 py-4 mb-6">
          Start free, cancel anytime. No hidden charges.
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
          {planList.map((item, index) => (
            <li
              key={item.id}
              className={`bg-white flex flex-col p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer
                opacity-0 animate-fadeInUp`}
              style={{
                animationDelay: `${index * 150}ms`,
                animationFillMode: "forwards",
              }}
            >
              <h2 className="text-center text-xl font-bold mb-3">
                {item.title}
              </h2>
              <p className="text-center text-sm text-gray-500 mb-3">
                {item.info}
              </p>
              <h1 className="text-center text-violet-700 font-bold text-3xl">
                {item.type}
              </h1>
              <ul className="flex flex-col gap-1 my-4">
                {item.planDetails.map((plan) => (
                  <li key={plan.id} className="text-sm">
                    ✅ {plan.value}
                  </li>
                ))}
              </ul>
              <button className="bg-violet-500 text-white px-4 py-2 text-sm font-semibold rounded-md w-fit mx-auto mt-5">
                {item.buttonText}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <style>
        {`
          @keyframes fadeInUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
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
        `}
      </style>
    </>
  );
};

export default Plan;
