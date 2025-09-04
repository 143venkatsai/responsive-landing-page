import React from "react";

const data = [
  {
    feature: "Child-Friendly Guided Meditations",
    kids: "✅ Story-based, fun & short",
    apps: "❌ Generic adult content",
  },
  {
    feature: "Safe & Ad-Free Environment",
    kids: "✅ 100% secure for kids",
    apps: "❌ Ads & distractions",
  },
  {
    feature: "Age-Specific Programs",
    kids: "✅ Tailored for 4–14",
    apps: "❌ One-size-fits-all",
  },
  {
    feature: "Parent & Teacher Support",
    kids: "✅ Guides, printables, progress insights",
    apps: "❌ Limited or none",
  },
];

const CompareTable = () => (
  <section className="px-4 py-4 lg:px-35">
    <h2 className="text-2xl lg:text-3xl font-bold mb-5">
      Why Choose Mindery Kids Over Others?
    </h2>
    <div className="overflow-x-auto scrollbar-hide">
      <table className="min-w-[600px] w-full border border-gray-200 bg-white shadow-lg">
        <thead>
          <tr className="bg-violet-50">
            <th className="text-violet-700 font-bold text-center py-3 px-4">
              Feature
            </th>
            <th className="text-violet-700 font-bold text-center py-3 px-4">
              Mindery Kids
            </th>
            <th className="text-violet-700 font-bold text-center py-3 px-4">
              Other Apps
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.feature} className="border-t border-gray-200">
              <td className="py-4 px-4 text-center align-middle border-r border-gray-200">
                {row.feature}
              </td>
              <td className="py-4 px-4 text-center align-middle border-r border-gray-200">
                {row.kids}
              </td>
              <td className="py-4 px-4 text-center align-middle">{row.apps}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </section>
);

export default CompareTable;
