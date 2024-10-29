import Image from 'next/image'
import Link from 'next/link'

export default function InclusiveEducation() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Inclusive Education Initiative</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <Image src="/images/inclusive-education.jpg" alt="Inclusive Education" width={800} height={600} className="rounded-lg shadow-md" />
        </div>
        <div>
          <p className="text-lg mb-6">Our Inclusive Education Initiative focuses on supporting children with special needs in mainstream education, ensuring equal opportunities for all students.</p>
          <h2 className="text-2xl font-semibold mb-4">Key Focus Areas:</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Developing adaptive learning technologies</li>
            <li>Training teachers in inclusive education practices</li>
            <li>Creating accessible school infrastructure</li>
            <li>Promoting awareness and acceptance of diversity</li>
          </ul>
          <Link href="/get-involved" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors">
            Support This Cause
          </Link>
        </div>
      </div>
    </div>
  )
}