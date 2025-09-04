import React from "react";

const Programs = () => {
  return (
    <>
      <section className="px-4 py-4 lg:px-35 my-10 lg:my-20 animate-fadeInUp">
        <h1 className="text-2xl lg:text-3xl font-bold transition-all duration-500 ease-in opacity-100 hover:opacity-90">
          Programs for Every Age
        </h1>
        <p className="w-full lg:w-[50%] text-md my-5 text-gray-500 transition-all duration-500 ease-in opacity-100 hover:opacity-90">
          Pick track or mix and match. Each program grows with your child.
        </p>

        <div className="flex flex-col gap-10">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 w-full animate-fadeInUp delay-100">
            <img
              src="https://thumbs.dreamstime.com/b/young-girl-standing-her-balcony-sunset-enjoying-beautiful-view-city-young-girl-standing-her-balcony-233915784.jpg"
              alt="women"
              className="rounded-xl w-full lg:w-1/2 transition-transform duration-500 hover:scale-105 hover:shadow-lg"
            />
            <div className="w-full lg:w-1/2">
              <h1 className="text-lg font-bold mb-2">Little Explorers (4-6)</h1>
              <p className="text-gray-500 mb-3">
                Three to five-minute stories with animal friends that teach
                belly-breathing, noticing sounds, and gentle stretching.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-gray-200 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-green-200">
                  <p className="text-sm font-semibold">🐵 Cozy Corner</p>
                </div>
                <div className="bg-gray-200 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-blue-200">
                  <p className="text-sm font-semibold">🎵 Calm Music</p>
                </div>
                <div className="bg-gray-200 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-yellow-200">
                  <p className="text-sm font-semibold">🏅 Sticker Badges</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-6 w-full animate-fadeInUp delay-200">
            <div className="w-full lg:w-1/2 order-1 lg:order-0">
              <h1 className="text-lg font-bold mb-2">Brave Thinkers (7-10)</h1>
              <p className="text-gray-500 mb-3">
                Mindset stories, focus timers, and kindness practices that build
                confidence and classroom readiness.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="bg-gray-200 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-purple-200">
                  <p className="text-sm font-semibold">⏱️ Focus Timer</p>
                </div>
                <div className="bg-gray-200 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-pink-200">
                  <p className="text-sm font-semibold">📝 Gratitude Notes</p>
                </div>
                <div className="bg-gray-200 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-yellow-200">
                  <p className="text-sm font-semibold">🌟 Streak Rewards</p>
                </div>
              </div>
            </div>
            <img
              src="https://thumbs.dreamstime.com/b/portrait-little-girl-shantiniketan-birbhum-west-bengal-india-th-march-children-enjoying-holi-color-festival-87839235.jpg"
              alt="women"
              className="rounded-xl order-0 lg:order-1 w-full lg:w-1/2 transition-transform duration-500 hover:scale-105 hover:shadow-lg"
            />
          </div>

          <div className="flex flex-col gap-10">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-6 w-full animate-fadeInUp delay-300">
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9vciUyMGNoaWxkfGVufDB8fDB8fHww"
                alt="women"
                className="rounded-xl w-full lg:w-1/2 transition-transform duration-500 hover:scale-105 hover:shadow-lg"
              />
              <div className="w-full lg:w-1/2">
                <h1 className="text-lg font-bold mb-2">
                  Calm & Curious (11-14)
                </h1>
                <p className="text-gray-500 mb-3">
                  Longer meditations, reframing thoughts, and sleep stories for
                  deeper rest and emotional balance.
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="bg-gray-200 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-blue-200">
                    <p className="text-sm font-semibold">⏲️ Mindset Minus</p>
                  </div>
                  <div className="bg-gray-200 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-purple-200">
                    <p className="text-sm font-semibold">🌙 Sleep Stories </p>
                  </div>
                  <div className="bg-gray-200 px-4 py-2 rounded-full transition-colors duration-300 hover:bg-green-200">
                    <p className="text-sm font-semibold">🎯 Goal Cands</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;
