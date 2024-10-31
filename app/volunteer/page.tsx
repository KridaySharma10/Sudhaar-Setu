'use client';

import { useState } from 'react';
import { db } from '../firebase'; // Import the Firestore instance
import { collection, addDoc } from 'firebase/firestore';

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null // New field for resume
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'resume' ? files[0] : value // Handle file input for resume
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, resume } = formData;

    if (!resume) {
      setError('Please upload your resume.');
      return;
    }

    try {
      // Create a FormData object to send the resume as well
      const formDataToSend = new FormData();
      formDataToSend.append('name', name);
      formDataToSend.append('email', email);
      formDataToSend.append('phone', phone);
      formDataToSend.append('resume', resume);
      // Add volunteer data to Firestore
      await addDoc(collection(db, 'volunteers'), {
        name,
        email,
        phone,
        resumeName: resume.name,
        createdAt: new Date()
      });
      console.log('Volunteer data:', formData);
      setSuccess('Your application has been submitted successfully!');
      // Reset form
      setFormData({ name: '', email: '', phone: '', resume: null });
      setError('');
    } catch (err) {
      console.error('Error adding document:', err);
      setError('Failed to submit your application. Please try again.');
      setSuccess('');
    }
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Join Us as a Volunteer</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {success && <p className="text-green-500 text-center">{success}</p>}
      <div className="max-w-2xl mx-auto">
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
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
          </div>
          <div>
            <label htmlFor="resume" className="block text-sm font-medium text-gray-700">
              Upload Your Resume
            </label>
            <input
              type="file"
              id="resume"
              name="resume"
              accept=".pdf,.doc,.docx" // Accept only specific file types
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
            />
          </div>
          <div>
            <button type="submit" className="w-full bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors">
              Apply Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
