import React from "react";

const Account = () => {
  return (
    <>
      <section className="mx-4 mt-15 lg:mx-35 bg-violet-50 px-4 lg:px-10 py-10 rounded-xl shadow-lg">
        <div>
          <h1 className="text-2xl lg:text-3xl font-bold mb-4">
            Start Your Child's Mindfulness Journey{" "}
          </h1>
          <p className="text-gray-500 text-md">
            Try it free. Build Calm, focus, and kindness&#8212;one small
            practice a day.
          </p>
          <div className="mt-5 flex items-center gap-4">
            <button className="bg-purple-600 text-white px-4 py-2 rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-lg focus:outline-none cursor-pointer">
              Create Account
            </button>
            <button className="bg-green-500 text-white px-4 py-2 rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-lg focus:outline-none cursor-pointer">
              Download App
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Account;
