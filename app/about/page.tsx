import Image from 'next/image'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">About सुधार Setu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <Image 
            src="/images/aboutus.png" 
            alt="About Us" 
            width={800} 
            height={600} 
            className="rounded-lg shadow-md" 
            title="About Us" // Adding title for accessibility
          />
        </div>
        <div>
          <p className="text-lg mb-6">
            <strong>Mission Statement</strong> <br />
            Welcome to Sudhaar Setu! Our mission is to empower communities across India through positive social change. We aim to bridge gaps in access to essential resources like education, women&apos;s safety, and social equality via impactful initiatives.

            Our platform fosters participation and collaboration, utilizing modern web technologies such as JavaScript, React, and Firebase to provide a seamless user experience. We focus on sustainability and community engagement, exploring innovative fundraising solutions while prioritizing ethical practices.

            Join us as we work together to build a more equitable future for all.
          </p>
          <a 
            href="https://github.com/your-repository" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-500 hover:underline"
          >
            View our GitHub Repository
          </a>
        </div>
      </div>
    </div>
  )
}
