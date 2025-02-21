"use client";
import { faqs } from "@/data/data";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useState } from "react";
import React from "react";

export default function Faq() {
  const [index, setIndex] = useState(0);

  return (
    <div className="px-8">
      <div className="text-center">
        <h1 className="text-slate-500">Frequently Asked Question</h1>
        <h2 className="text-2xl font-semibold">
          Need A <span className="text-orange-400">Support ?</span>
        </h2>
      </div>
      <div className="mt-5 shadow-sm">
        {faqs.map((item) => (
          <div key={item.id} onClick={() => setIndex(item.id)}>
            <div
              className={`w-full border p-5 rounded-sm flex justify-between cursor-pointer font-medium text-slate-600 ${
                index === item.id ? "bg-slate-100" : ""
              }`}
            >
              <span className="">{item.question}</span>
              {index === item.id ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {index === item.id && (
              <div className="w-full border p-5 rounded-sm flex justify-between cursor-default text-slate-500 bg-slate-50 transition-all duration-300 ease-in-out">
                <span>{item.answer}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
