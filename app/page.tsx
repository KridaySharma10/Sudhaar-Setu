'use client'

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Users, Trophy, Heart, ArrowBigDownDash } from 'lucide-react';
import ParticleBackground from './components/ParticleBackground';
import SuccessStory from './components/SuccessStory';
import StatCard from './components/StatCard';
import MapWithMarkers from './components/MapWithMarkers'; // Ensure this import is correct

const successStories = [
  {
    title: "Empowering Rural Education",
    description: "Bringing digital learning to 100 villages in Bihar.",
    image: "/images/improvededu.jpg"
  },
  {
    title: "Clean Water Initiative",
    description: "Providing clean drinking water to 50,000 people in Rajasthan.",
    image: "/images/cleanwater.jpg"
  },
  {
    title: "Women Entrepreneurship",
    description: "Supporting 1000 women entrepreneurs in starting their businesses.",
    image: "/images/WEP.png",
  }
];

const impactStats = [
  { icon: MapPin, value: '28', label: 'States & UTs' },
  { icon: Users, value: '1M+', label: 'Volunteers' },
  { icon: Trophy, value: '500+', label: 'Projects' },
  { icon: Heart, value: '10M+', label: 'Lives Touched' }
];

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <ParticleBackground />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 gradient-text">सुधार Setu:</h1>
          <h1 className="text-7xl md:text-2xl text-blue-1000 mb-8">A Confluence Of New Ideas</h1>
          <Link 
            href="#impact-map"
            onClick={(e) => {
              e.preventDefault(); // Prevent default anchor behavior
              const sectionElement = document.getElementById("impact-map");
              if (sectionElement) {
                sectionElement.scrollIntoView({ behavior: 'smooth' });
              } else {
                console.warn("Section with ID 'impact-map' not found!");
              }
            }}
            className="inline-flex items-center px-8 py-4 rounded-full bg-primary hover:bg-primary-dark transition-all transform hover:scale-105 text-white font-semibold text-lg shadow-lg hover:shadow-xl"
          >
            Explore Further
            <ArrowBigDownDash className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>

    
      {/* Success Stories */}
      <section id="success-stories" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
            Truthful Testimonies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <SuccessStory key={index} {...story} />
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section id="impact-statistics" className="py-20 bg-gradient-to-b from-background-light to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {impactStats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Global Impact Section with Map */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-bold mb-6 gradient-text"
          >
            Global Impact
          </motion.h2>
          <MapWithMarkers />  {/* MapWithMarkers Component */}
          <p className="mt-4 text-gray-700">
            Our initiatives span across the globe, making a difference in communities worldwide.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-12 rounded-xl text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              Be Part of the Change
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join thousands of change-makers who are transforming India, one initiative at a time.
            </p>
            <Link 
              href="/join"
              className="inline-flex items-center px-8sa py-4 rounded-full bg-primary hover:bg-primary-dark transition-all transform hover:scale-105 text-white font-semibold text-lg"
            >
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
