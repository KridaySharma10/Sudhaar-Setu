import Image from 'next/image'
import Link from 'next/link'

export default function CleanEnergy() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Clean Energy Initiative</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <Image src="/images/clean-energy.jpg" alt="Clean Energy" width={800} height={600} className="rounded-lg shadow-md" />
        </div>
        <div>
          <p className="text-lg mb-6">Our Clean Energy Initiative focuses on promoting sustainable and renewable energy solutions across India, contributing to a cleaner and greener future.</p>
          <h2 className="text-2xl font-semibold mb-4">Key Focus Areas:</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Supporting solar energy projects in rural areas</li>
            <li>Educating communities about renewable energy</li>
            <li>Advocating for clean energy policies</li>
            <li>Collaborating with businesses for sustainable practices</li>
          </ul>
          <Link href="/get-involved" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors">
            Go Green With Us
          </Link>
        </div>
      </div>
    </div>
  )
}