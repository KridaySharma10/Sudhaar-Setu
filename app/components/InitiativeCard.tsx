// app/components/InitiativeCard.tsx
"use client"; // Mark this component as a client component to use hooks

import Image from 'next/image';
import Link from 'next/link';

export default function InitiativeCard({ title, description, image, link }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-xs">
      <Image 
        src={image} 
        alt={title} 
        width={300} 
        height={180} 
        className="rounded-md mb-3 object-cover h-40" // Restrict image height
      />
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="mb-4 text-sm line-clamp-3">{description}</p> {/* Limit description height */}
      <Link href={link}>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg transition-all duration-300 hover:bg-cyan-500 hover:text-blue-800 hover:scale-105 hover:shadow-lg">
          Learn More
        </button>
      </Link>
    </div>
  );
}
