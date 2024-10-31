import Image from 'next/image'
import Link from 'next/link' // Ensure this import is present

const successStories = [
  {
    title: "Ms. Doe, John",
    description: "'This organisation has the potential, but considering it is still in inception it will take time but it can solve many lacunas'",
    image: "/images/avatar-3.png",
  },
  {
    title: "Mr. Michael Myers",
    description: "They need a professional expansion, their ideas and proposals might be slightly ambitious but with the proper sponsorship and support they can make it happen",
    image: "/images/avatar-1.png",
  },
  {
    title: "Mr. Dear, John",
    description: "It's hard to comment anything in the initial stages but this is good, all the best team.",
    image: "/images/avatar-2.png",
  },
]

export default function SuccessStories() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Truthful Testimonies</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {successStories.map((story, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="flex justify-center items-center">
              <Image 
                src={story.image} 
                alt={story.title} 
                width={150} // Adjust size as needed
                height={150} // Adjust size as needed
                className="rounded-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2">{story.title}</h2>
              <p className="text-gray-600 mb-4">{story.description}</p>
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
