import Image from 'next/image';
import Link from 'next/link';

export default function WomensSafety() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center md:text-left">Women&apos;s Safety Initiative</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Column: Text Content */}
        <div>
          <p className="text-lg md:text-xl mb-6 leading-relaxed text-justify">
            Our Women&apos;s Safety Initiative is dedicated to creating safer spaces for women across India. We address gender-based violence, enhance safety measures, and empower women to lead secure lives.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">The Mission</h2>
          <p className="text-lg md:text-xl mb-6 leading-relaxed text-justify">
            To build a society where women feel safe, respected, and empowered. We focus on preventive measures, legal frameworks, community engagement, and direct support.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">The Approach</h2>

          {/* Bullet points for each focus area */}
          <ul className="space-y-4 list-disc pl-6 md:pl-8 text-lg md:text-xl leading-relaxed">
            <li><strong>Safety Workshops:</strong> Educating communities on gender-based violence, bystander intervention, and women’s rights.</li>
            <li><strong>Law Enforcement Collaboration:</strong> Training officers, creating women’s safety cells, and improving police-community communication.</li>
            <li><strong>Self-Defense Training:</strong> Practical programs to empower women with skills for personal safety and confidence.</li>
            <li><strong>Advocating for Stronger Laws:</strong> Supporting legal reforms and accountability to ensure women’s safety.</li>
            <li><strong>Supporting Survivors:</strong> Providing counseling, legal aid, and rehabilitation for a holistic recovery.</li>
          </ul>

          <div className="mt-6 flex justify-center md:justify-start">
            <Link href="/get-involved" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors text-lg">
              Get Involved
            </Link>
          </div>
        </div>

        {/* Right Column: Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/woman-safety.jpg" // Update the path to match your project
            alt="Women's Safety"
            width={900}
            height={1000}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}