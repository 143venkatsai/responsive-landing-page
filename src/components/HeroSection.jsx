import React, { useState } from "react";

const HeroData = [
  { id: 1, info: "Improves", name: "Focus", icon: "🧠" },
  { id: 2, info: "Reduces", name: "Stress", icon: "😞" },
  { id: 3, info: "Better", name: "Sleep", icon: "💤" },
  { id: 4, info: "Builds", name: "Empathy", icon: "❤️" },
];

const HeroSection = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    class: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted", formData);
    alert("Form Submitted");
    setPopupOpen(false);
    setFormData({ name: "", email: "", phone: "", class: "", message: "" });
  };

  return (
    <>
      <section className="px-4 py-4 lg:px-35 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-10 my-10 lg:mb-15 animate-fadeIn">
        <div className="flex flex-col w-full lg:w-[50%]">
          <div className="bg-purple-100 px-4 py-2 rounded-full w-fit transition duration-500 animate-slideInDown">
            <p className="text-purple-600 font-bold text-md">
              🌈 Calm Minds, Happy Hearts
            </p>
          </div>
          <h1 className="text-2xl lg:text-5xl font-bold my-4 leading-snug transition-all duration-700 ease-in-out hover:scale-105">
            Mindfullness & Meditation for Kids (4-14)
          </h1>
          <p className="text-gray-500 text-md transition-opacity duration-700 opacity-90">
            Fun, Story-based meditations that builds focus, kindness and
            confidence.
          </p>
          <p className="text-gray-500 text-md transition-opacity duration-700 opacity-90">
            Safe, ad-free, and crafted with child-development experts.
          </p>
          <div className="my-5 flex items-center gap-4">
            <button
              onClick={() => setPopupOpen(true)}
              className="bg-purple-600 text-white px-4 py-2 rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-lg focus:outline-none cursor-pointer"
            >
              Start Free Trial
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-lg focus:outline-none cursor-pointer">
              Explore Programs
            </button>
          </div>
          <ul className="flex flex-wrap lg:flex-nowrap items-center gap-4">
            {HeroData.map((item) => (
              <li
                key={item.id}
                className="p-4 shadow-md flex items-center rounded-xl bg-white transition duration-500 ease-in-out hover:scale-105 hover:shadow-xl"
              >
                <div className="text-2xl">{item.icon}</div>
                <div className="ml-2">
                  <h2 className="text-xs text-gray-400">{item.info}</h2>
                  <h1 className="text-xl font-bold">{item.name}</h1>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative bg-gray-200 h-[250px] lg:h-[520px] w-full lg:w-1/2 rounded-md flex items-end">
          <div
            className="bg-white shadow-md p-5 rounded-xl transition-transform duration-700 ease-in-out hover:rotate-3 hover:scale-105"
            style={{
              transform: "rotate(-8deg) translateY(-50px)",
            }}
          >
            <h1 className="font-bold mb-2">Today's Journey</h1>
            <ul className="ml-6 list-disc text-md text-gray-500">
              <li>🦖 Dragon Breath (3 min)</li>
              <li>🦋 Butterfly Body Scan (5 min)</li>
              <li>☽ Sleep Story State Boat (7 min)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Popup Form */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-10 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-lg p-4 lg:p-6 relative shadow-lg">
            <button
              onClick={() => setPopupOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 font-bold text-xl cursor-pointer"
              aria-label="Close form"
            >
              ×
            </button>
            <h2 className="text-2xl font-bold mb-4 text-center">
              Start Free Trial
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
              <input
                type="text"
                name="class"
                value={formData.class}
                onChange={handleChange}
                placeholder="Class"
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message"
                rows={3}
                className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                required
              />
              <button
                type="submit"
                className="w-full cursor-pointer bg-purple-600 text-white py-2 rounded font-semibold hover:bg-purple-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSection;
