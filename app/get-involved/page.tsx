import Link from 'next/link'

const involvementOptions = [
  {
    title: "Volunteer",
    description: "Join our team of dedicated volunteers and make a direct impact in your community.",
    link: "/volunteer"
  },
  {
    title: "Donate",
    description: "Support our initiatives financially. Every contribution helps us reach more people.",
    link: "/donate"
  },
  

   
]

export default function GetInvolved() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Get Involved</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {involvementOptions.map((option, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">{option.title}</h2>
            <p className="text-gray-600 mb-6">{option.description}</p>
            <Link href={option.link} className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}