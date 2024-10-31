import Image from 'next/image';
import Link from 'next/link';

export default function SportsEngagement() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center md:text-left">Sports Engagement Initiative</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/images/sports 1.jpeg"
            alt="Sports Engagement"
            width={800}
            height={600}
            className="rounded-lg shadow-md"
          />
        </div>
        
        {/* Right Column: Text Content */}
        <div>
          <p className="text-lg md:text-xl mb-6 leading-relaxed text-justify">
            The Sports Engagement Initiative aims to inspire widespread participation in sports and athletics across India. Our goal is to create a culture of physical fitness, teamwork, and national pride, making sports a core aspect of community life.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">The Vision</h2>
          <p className="text-lg md:text-xl mb-6 leading-relaxed text-justify">
            To foster a sports-driven community where every individual, regardless of background, has the opportunity to explore their athletic potential and lead a healthy, active life.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">The Approach</h2>
          <ul className="list-disc pl-6 md:pl-8 space-y-4 text-lg md:text-xl leading-relaxed">
            <li><strong>Grassroots Programs:</strong> Engaging young talent through community-based sports programs and events.</li>
            <li><strong>Sports Accessibility:</strong> Providing essential sports equipment and resources to underserved communities.</li>
            <li><strong>Coaching and Mentorship:</strong> Offering skill development through expert coaching and guidance for aspiring athletes.</li>
            <li><strong>Infrastructure Advocacy:</strong> Collaborating with stakeholders to improve and expand sports facilities nationwide.</li>
          </ul>

          <div className="mt-6 flex justify-center md:justify-start">
            <Link href="/get-involved" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors text-lg">
              Support Athletes
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}