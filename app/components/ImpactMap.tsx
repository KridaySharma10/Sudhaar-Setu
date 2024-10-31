'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const impactImages = [
  '/images/impact/1.jpg',
  '/images/impact/2.jpg',
  '/images/impact/3.jpg',
  '/images/impact/4.jpg',
  '/images/impact/5.jpg',
  '/images/impact/6.jpg',
  '/images/impact/7.jpg',
  '/images/impact/8.jpg',
]

export default function ImpactMap() {
  const [count, setCount] = useState(0)
  const [filledImages, setFilledImages] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev >= 1000000) {
          setFilledImages(0)
          return 0
        }
        if (prev % 125000 === 0) {
          setFilledImages(prevImages => Math.min(prevImages + 1, impactImages.length))
        }
        return prev + 10000
      })
    }, 50)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-[400px] rounded-xl overflow-hidden glass-card">
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-1 p-4">
        {impactImages.map((src, index) => (
          <div
            key={index}
            className={`relative rounded-md overflow-hidden transition-opacity duration-500 ${
              index < filledImages ? 'opacity-100' : 'opacity-30'
            }`}
          >
            <Image
              src={src}
              alt={`Impact image ${index + 1}`}
              layout="fill"
              objectFit="cover"
              priority // Optional: prioritizes this image loading for better performance
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="text-center">
          <div className="text-5xl font-bold mb-4 gradient-text">
            {count.toLocaleString()}+
          </div>
          <div className="text-xl text-gray-200">Lives Impacted</div>
        </div>
      </div>
    </div>
  )
}
