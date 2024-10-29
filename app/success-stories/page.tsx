import Image from 'next/image'
import Link from 'next/link'

const successStories = [
  {
    title: "Empowering Women in Tech",
    description: "How our Women's Safety Initiative led to the creation of a successful tech startup.",
    image: "/images/success-story-1.jpg",
  },
  {
    title: "Breaking Barriers in Education",
    description: "A story of how our Inclusive Education program changed the life of a child with special needs.",
    image: "/images/success-story-2.jpg",
  },
  {
    title: "From Grassroots to Gold",
    description: "The journey of an athlete from our Sports Engagement program to national recognition.",
    image: "/images/success-story-3.jpg",
  },
]

export default function SuccessStories() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Success Stories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {successStories.map((story, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image 
              src={story.image} 
              alt={story.title} 
              width={600} 
              height={400} 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{story.title}</h2>
              <p className="text-gray-600 mb-4">{story.description}</p>
              <Link href="#" className="text-primary font-semibold hover:underline">
                Read Full Story
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link href="/get-involved" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors">
          Be Part of Our Next Success Story
        </Link>
      </div>
    </div>
  )
}