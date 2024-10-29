import Image from 'next/image'
import Link from 'next/link'

export default function SportsEngagement() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Sports Engagement Initiative</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <Image src="/images/sports-engagement.jpg" alt="Sports Engagement" width={800} height={600} className="rounded-lg shadow-md" />
        </div>
        <div>
          <p className="text-lg mb-6">Our Sports Engagement Initiative aims to encourage more participation in sports and athletics across India, promoting physical fitness and national pride.</p>
          <h2 className="text-2xl font-semibold mb-4">Key Focus Areas:</h2>
          <ul className="list-disc list-inside mb-6">
            <li>Organizing grassroots sports programs</li>
            <li>Providing sports equipment to underprivileged communities</li>
            <li>Offering coaching and mentorship programs</li>
            <li>Advocating for better sports infrastructure</li>
          </ul>
          <Link href="/get-involved" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors">
            Support Athletes
          </Link>
        </div>
      </div>
    </div>
  )
}