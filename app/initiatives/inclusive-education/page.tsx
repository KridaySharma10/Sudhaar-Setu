import Image from 'next/image';
import Link from 'next/link';

export default function InclusiveEducation() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center md:text-left">Inclusive Education Model</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Column: Text Content */}
        <div>
          <p className="text-lg md:text-xl mb-6 leading-relaxed text-justify">
            Our Inclusive Education Model focuses on creating a learning environment where all children, regardless of their abilities, backgrounds, or circumstances, can thrive together. We believe in equal opportunities for every student.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">The Mission</h2>
          <p className="text-lg md:text-xl mb-6 leading-relaxed text-justify">
            To build a supportive educational system that welcomes diversity and ensures equitable access to quality education for all. We aim to remove barriers and promote inclusion at every level.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">The Approach</h2>

          {/* Bullet points for each focus area */}
          <ul className="space-y-4 list-disc pl-6 md:pl-8 text-lg md:text-xl leading-relaxed">
            <li><strong>Teacher Training:</strong> Equipping educators with skills to address diverse learning needs and adopt inclusive teaching practices.</li>
            <li><strong>Adaptive Learning Materials:</strong> Developing resources that cater to different learning styles and abilities.</li>
            <li><strong>Community Engagement:</strong> Creating awareness among parents and communities to embrace and support inclusive education.</li>
            <li><strong>Accessible Infrastructure:</strong> Promoting the development of barrier-free school facilities to accommodate every student.</li>
            <li><strong>Policy Advocacy:</strong> Working with stakeholders to implement policies that prioritize inclusion in education.</li>
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
            src="/images/inclusive-education.jpg"
            alt="Inclusive Education"
            width={800}
            height={600}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
    </div>
  );
}