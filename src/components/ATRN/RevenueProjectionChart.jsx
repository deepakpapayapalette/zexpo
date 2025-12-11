import React, { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, LabelList
} from "recharts";

const rawData = [
  { year: 2020, lakhs: 2200, usd: 290 },
  { year: 2021, lakhs: 2550, usd: 340 },
  { year: 2022, lakhs: 2800, usd: 375 },
  { year: 2023, lakhs: 3000, usd: 400 },
  { year: 2024, lakhs: 2600, usd: 3425 },
  { year: 2025, lakhs: 3250, usd: 2425 },
];

const RevenueProjectionChart = () => {
  const [currency, setCurrency] = useState("lakhs");

  const yLabel = currency === "lakhs" ? "₹ in Lakhs" : "USD Millions";
  const dataKey = currency === "lakhs" ? "lakhs" : "usd";

  return (
    <section className="space-top bg-white pb-10">
      <div className="container">
        <h3 className="text-3xl md:text-4xl font-semibold text-webprimary mb-2">
          Revenue Projection Chart
        </h3>
        <p className="text-gray-700 text-base md:text-lg mb-5">
          Visualizing our estimated growth trajectory and financial performance through projected revenues over time.
        </p>
        {/* Chart Card */}
        <div className="bg-white rounded-xl shadow-md md:px-6 px-2 py-3 md:py-8">
          <div className="flex justify-end gap-3 mb-2">
            <button
              className={`px-4 py-1 rounded-lg shadow text-sm font-semibold border ${currency === "lakhs" ? "bg-[#e7f0fa] text-webprimary" : "bg-white text-gray-700"
                }`}
              onClick={() => setCurrency("lakhs")}
            >
              ₹ in Lakhs
            </button>
            <button
              className={`px-4 py-1 rounded-lg shadow text-sm font-semibold border ${currency === "usd" ? "bg-[#e7f0fa] text-webprimary" : "bg-white text-gray-700"
                }`}
              onClick={() => setCurrency("usd")}
            >
              USD Millions
            </button>
          </div>
          <ResponsiveContainer width="100%" height={350} >
            <BarChart data={rawData} >
              <CartesianGrid stroke="#ddd" strokeDasharray="3 3" />
              <XAxis dataKey="year" />
              <YAxis />
              <Tooltip
                formatter={(val) => [
                  val,
                  currency === "lakhs" ? "₹ Lakhs" : "USD Millions"
                ]}
              />
              <Bar dataKey={dataKey} fill="#4b8cbb" radius={[2, 2, 0, 0]} barSize={70}>
                {/* Show value label on top for last data point in USD mode */}
                {currency === "usd" && (
                  <LabelList
                    dataKey={dataKey}
                    position="top"
                    formatter={(value, entry, i) =>
                      i === rawData.length - 1 ? `${value} USD Millions` : ''
                    }
                    style={{ fontWeight: "bold", fontSize: 10, fill: "#226091" }}
                  />
                )}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
};

export default RevenueProjectionChart;
