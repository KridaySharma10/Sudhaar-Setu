import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface SuccessStoryProps {
  title: string
  description: string
  image: string
}

export default function SuccessStory({ title, description, image }: SuccessStoryProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      transition={{ duration: 0.3 }}
      className="glass-card p-6 rounded-xl"
    >
      <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <Link 
        href="#" 
        className="text-primary hover:text-primary-light transition-colors"
      >
        Read More →
      </Link>
    </motion.div>
  )
}