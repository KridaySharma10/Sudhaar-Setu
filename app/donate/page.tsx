'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Donate() {
  const [amount, setAmount] = useState('')

  const handleDonate = () => {
    // Redirect to Coinbase Commerce Checkout
    window.open('https://commerce.coinbase.com/checkout/f56623c6-cc09-43b2-af78-0e9435cf19b2', '_blank')
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Support Our Cause</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <Image 
            src="/images/donate now.jpeg" 
            alt="Donate" 
            width={600} 
            height={400} // Set a specific height
            className="rounded-lg shadow-md"
          />
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Your Donation Makes a Difference</h2>
            <p className="text-gray-600 mb-4">
              Every contribution helps us continue our mission to create positive change in India. 
              Your support enables us to run our initiatives, organize events, and reach more people in need.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Fund educational programs for underprivileged children</li>
              <li>Support women&apos;s safety initiatives</li> {/* Escaped apostrophe */}
              <li>Promote social equality and inclusivity</li>
              <li>Encourage sports engagement across communities</li>
            </ul>
          </div>
        </div>
        <div>
          <form onSubmit={(e) => { e.preventDefault(); handleDonate(); }} className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-6">Make a Donation</h3>
            <div className="mb-6">
              <label htmlFor="amount" className="block text-sm font-medium text-gray-700 mb-2">
                Donation Amount (₹)
              </label>
              <input
                type="number"
                id="amount"
                name="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
                min="1"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50 transition-colors duration-300"
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors duration-300"
            >
              Donate Now
            </button>
          </form>
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Other ways to support us:</p>
            <div className="space-x-4">
              <button className="bg-secondary text-white px-4 py-2 rounded-full font-semibold hover:bg-secondary-dark transition-colors duration-300">
                Become a Monthly Donor
              </button>
              <button className="bg-accent text-white px-4 py-2 rounded-full font-semibold hover:bg-accent-dark transition-colors duration-300">
                Corporate Partnerships
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
