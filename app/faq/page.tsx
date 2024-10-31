"use client";

import { useState } from 'react';

const faqs = [
  {
    question: "What is the difference between a &apos;Coin&apos; and a &apos;Token&apos; on the site?",
    answer: "Coins usually refer to cryptocurrencies that have their own blockchain (e.g., Bitcoin, Ethereum), while tokens are built on existing blockchains (e.g., ERC-20 tokens on Ethereum)."
  },
  {
    question: "How do I purchase cryptocurrency?",
    answer: "You can purchase cryptocurrency through exchanges, by linking your bank account or credit card to buy and store digital assets."
  },
  {
    question: "At what time is the 24-hour % change based?",
    answer: "The 24-hour percentage change is based on the difference between the current price and the price 24 hours ago."
  },
  {
    question: "Am I allowed to use content (screenshots, data, graphs, etc.) for personal or commercial projects?",
    answer: "Content usage depends on the terms of service. For personal use, it’s generally okay, but commercial use may require permission."
  },
  {
    question: "Why does a question mark sometimes show up for the circulating supply and market cap of a cryptocurrency?",
    answer: "A question mark indicates that the data may not be available or is unreliable at the moment."
  }
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Some common questions we&apos;re often asked</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg shadow-md transition-all duration-300 cursor-pointer ${
              activeIndex === index ? 'bg-cyan-600 text-white' : 'bg-white text-gray-900'
            }`}
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="font-semibold text-lg">{faq.question}</h3>
            {activeIndex === index && <p className="mt-2">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
