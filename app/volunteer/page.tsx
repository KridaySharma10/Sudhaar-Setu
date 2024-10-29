'use client'

import { useState } from 'react'
import Image from 'next/image'

const volunteerOpportunities = [
  "Community Outreach",
  "Event Organization",
  "Mentorship Programs",
  "Social Media Management",
  "Fundraising",
  "Content Creation",
]

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interests: [],
    experience: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target
    setFormData(prevState => ({
      ...prevState,
      interests: checked
        ? [...prevState.interests, value]
        : prevState.interests.filter(interest => interest !== value)
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log(formData)
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      interests: [],
      experience: '',
    })
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Volunteer With Us</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <Image 
            src="/images/volunteer-bg.jpg" 
            alt="Volunteer" 
            width={800} 
            height={600} 
            className="rounded-lg shadow-md"
          />
          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Why Volunteer?</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Make a tangible impact in your community</li>
              <li>Develop new skills and gain valuable experience</li>
              <li>Connect with like-minded individuals</li>
              <li>Be part of India's positive transformation</li>
            </ul>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Areas of Interest
              </label>
              <div className="space-y-2">
                {volunteerOpportunities.map((opportunity, index) => (
                  <div key={index} className="flex items-center">
                    <input
                      type="checkbox"
                      id={`interest-${index}`}
                      name="interests"
                      value={opportunity}
                      checked={formData.interests.includes(opportunity)}
                      onChange={handleCheckboxChange}
                      className="rounded border-gray-300 text-primary focus:ring-primary"
                    />
                    <label htmlFor={`interest-${index}`} className="ml-2 text-sm text-gray-700">
                      {opportunity}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                Relevant Experience
              </label>
              <textarea
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
              ></textarea>
            </div>
            <div>
              <button type="submit" className="w-full bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors">
                Submit Volunteer Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}