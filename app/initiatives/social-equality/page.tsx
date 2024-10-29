import Image from 'next/image'
import Link from 'next/link'

export default function SocialEquality() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Social Equality Initiative</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <Image src="/images/social-equality.jpg" alt="Social Equality" width={800} height={600} className="rounded-lg shadow-md" />
        </div>
        <div>
          <p className="text-lg mb-6">Our Social Equality Initiative aims to promote equal opportunities for backward classes in India, working towards a more inclusive and just society.</p>
          <h2 className="text-2xl font-semibold mb-4">Key Focus Areas:</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Providing skill development programs</li>
            <li>Offering scholarships and educational support</li>
            <li>Advocating for policy changes</li>
            <li>Raising awareness about social discrimination</li>
          </ul>
          <Link href="/get-involved" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors">
            Join Our Cause
          </Link>
        </div>
      </div>
    </div>
  )
}