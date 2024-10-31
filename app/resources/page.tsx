import Link from 'next/link';
import { Book, FileText, Video, Download } from 'lucide-react';

const resources = [
  {
    title: "Women&apos;s Safety Handbook", // Escape the single quote
    description: "A comprehensive guide on personal safety and empowerment.",
    icon: Book,
    link: "#",
  },
  {
    title: "Inclusive Education Toolkit",
    description: "Resources for educators to create inclusive learning environments.",
    icon: FileText,
    link: "#",
  },
  {
    title: "Social Equality Webinar Series",
    description: "Recorded sessions on promoting equality and combating discrimination.",
    icon: Video,
    link: "#",
  },
  {
    title: "Sports Engagement Program Guide",
    description: "Step-by-step guide to implement sports programs in communities.",
    icon: Download,
    link: "#",
  },
];

export default function Resources() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {resources.map((resource, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <resource.icon className="w-8 h-8 text-primary mr-3" />
              <h2 className="text-xl font-semibold">{resource.title}</h2>
            </div>
            <p className="text-gray-600 mb-4">{resource.description}</p>
            <Link href={resource.link} className="text-primary font-semibold hover:underline">
              Access Resource
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <p className="text-lg mb-4">Can&apos;t find what you&apos;re looking for?</p> {/* Escape the single quote */}
        <Link href="/contact" className="bg-secondary text-white px-6 py-3 rounded-full font-semibold hover:bg-secondary-dark transition-colors">
          Contact Us for More Resources
        </Link>
      </div>
    </div>
  );
}
