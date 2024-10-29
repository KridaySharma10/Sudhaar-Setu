import Image from 'next/image'
import Link from 'next/link'

interface InitiativeCardProps {
  title: string
  description: string
  image: string
  link: string
}

export default function InitiativeCard({ title, description, image, link }: InitiativeCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image src={image} alt={title} width={800} height={600} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link href={link} className="text-primary font-semibold hover:underline">
          Learn More
        </Link>
      </div>
    </div>
  )
}