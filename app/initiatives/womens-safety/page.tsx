import Image from 'next/image'
import Link from 'next/link'

export default function WomensSafety() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Women's Safety Initiative</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <Image src="/images/womens-safety.jpg" alt="Women's Safety" width={800} height={600} className="rounded-lg shadow-md" />
        </div>
        <div>
          <p className="text-lg mb-6">Our Women's Safety Initiative aims to create a safer environment for women in India through innovative technology solutions and community engagement programs.</p>
          <h2 className="text-2xl font-semibold mb-4">Key Focus Areas:</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Developing mobile apps for emergency assistance</li>
            <li>Organizing self-defense workshops</li>
            <li>Collaborating with local law enforcement</li>
            <li>Raising awareness about women's rights and safety</li>
          </ul>
          <Link href="/get-involved" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors">
            Get Involved
          </Link>
        </div>
      </div>
    </div>
  )
}