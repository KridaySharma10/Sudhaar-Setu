import Image from 'next/image'
import Link from 'next/link'

const events = [
  {
    title: "Annual Charity Gala",
    date: "September 15, 2023",
    location: "Mumbai, India",
    description: "Join us for an evening of inspiration and giving back to the community.",
    image: "/images/event-1.jpg",
  },
  {
    title: "Women's Empowerment Workshop",
    date: "October 5, 2023",
    location: "Delhi, India",
    description: "A day-long workshop focusing on skills development and networking for women.",
    image: "/images/event-2.jpg",
  },
  {
    title: "Youth Sports Festival",
    date: "November 12, 2023",
    location: "Bangalore, India",
    description: "Encouraging young athletes and promoting sports engagement in local communities.",
    image: "/images/sports-engagement.jpg",
  },
]

export default function Events() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map((event, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image 
              src={event.image} 
              alt={event.title} 
              width={600} 
              height={400} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{event.title}</h2>
              <p className="text-gray-600 mb-2">{event.date}</p>
              <p className="text-gray-600 mb-4">{event.location}</p>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <Link 
                href="#" 
                className="inline-block bg-primary text-white px-4 py-2 rounded-full font-semibold hover:bg-primary-dark transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link 
          href="/contact" 
          className="bg-secondary text-white px-6 py-3 rounded-full font-semibold hover:bg-secondary-dark transition-colors duration-300"
        >
          Contact Us to Organize an Event
        </Link>
      </div>
    </div>
  )
}