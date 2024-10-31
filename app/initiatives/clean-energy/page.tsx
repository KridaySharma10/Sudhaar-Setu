import Image from 'next/image';
import Link from 'next/link';

export default function CleanEnergy() {
  return (
    <div className="container mx-auto px-6 md:px-12 py-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center md:text-left">Clean Energy Initiative</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Column: Image */}
        <div className="flex justify-center md:justify-start">
          <Image
            src="/images/CLEANENERGies.jpg"
            alt="Clean Energy"
            width={800}
            height={600}
            className="rounded-lg shadow-md"
          />
        </div>
        
        {/* Right Column: Text Content */}
        <div>
          <p className="text-lg md:text-xl mb-6 leading-relaxed text-justify">
            Our Clean Energy Initiative is dedicated to driving the transition to renewable energy sources and promoting sustainable energy solutions. We are committed to reducing carbon footprints and building a future where clean, renewable energy powers our communities.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Vision</h2>
          <p className="text-lg md:text-xl mb-6 leading-relaxed text-justify">
            To foster a clean and sustainable energy ecosystem that addresses climate change and provides accessible, affordable energy to all.
          </p>

          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Our Approach</h2>
          <ul className="list-disc pl-6 md:pl-8 space-y-4 text-lg md:text-xl leading-relaxed">
            <li><strong>Renewable Energy Projects:</strong> Establishing solar, wind, and hydropower projects to diversify our energy sources and reduce reliance on fossil fuels.</li>
            <li><strong>Community Engagement:</strong> Educating communities on energy conservation, efficiency practices, and the benefits of transitioning to clean energy.</li>
            <li><strong>Policy Advocacy:</strong> Collaborating with policymakers to implement and strengthen renewable energy regulations and incentives.</li>
            <li><strong>Innovative Solutions:</strong> Investing in clean energy technologies and solutions to drive sustainable development and economic growth.</li>
          </ul>

          <div className="mt-6 flex justify-center md:justify-start">
            <Link href="/get-involved" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors text-lg">
              Join the Movement
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}