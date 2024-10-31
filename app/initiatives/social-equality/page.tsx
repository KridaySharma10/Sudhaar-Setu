import Image from 'next/image'
import Link from 'next/link'

export default function SocialEquality() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center md:text-left">Social Equality Initiative</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Column: Image */}
        <div className="flex justify-center md:justify-start">
          <Image 
            src="/images/socialequalityfinalest.png" 
            alt="Social Equality" 
            width={800} 
            height={600} 
            className="rounded-lg shadow-md" 
          />
        </div>

        {/* Right Column: Text Content */}
        <div>
          <p className="text-lg md:text-xl mb-6 leading-relaxed text-justify">
            Our Social Equality Initiative envisions a society where every individual, regardless of their social or economic background, has equal access to opportunities and resources. We strive to bridge the gaps and empower marginalized communities to achieve their full potential.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">The Vision</h2>
          <p className="text-lg md:text-xl mb-6 leading-relaxed text-justify">
            To build an inclusive and just society where equality is not just an ideal but a lived reality. We believe that true social progress comes from uplifting all communities, ensuring their rights and dignity.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">The Approach</h2>
          <ul className="list-disc pl-6 md:pl-8 text-lg md:text-xl leading-relaxed space-y-4 mb-6">
            <li><strong>Empowerment through Education:</strong> Facilitating access to quality education and scholarships for underprivileged communities.</li>
            <li><strong>Skill Development Programs:</strong> Providing training in essential skills to enable economic independence and career growth.</li>
            <li><strong>Advocacy for Equal Rights:</strong> Working towards policy changes that protect and promote the rights of marginalized groups.</li>
            <li><strong>Awareness Campaigns:</strong> Engaging communities to challenge discrimination and advocate for inclusivity and equal treatment.</li>
          </ul>

          <div className="flex justify-center md:justify-start">
            <Link href="/get-involved" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors text-lg">
              Join Our Cause
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}