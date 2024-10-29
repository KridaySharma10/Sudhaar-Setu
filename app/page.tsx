import Hero from './components/Hero'
import InitiativeCard from './components/InitiativeCard'
import Link from 'next/link'

const initiatives = [
  {
    title: "Women's Safety",
    description: "Empowering women through technology and community support.",
    image: "/images/womens-safety.jpg",
    link: "/initiatives/womens-safety"
  },
  {
    title: "Inclusive Education",
    description: "Supporting children with special needs in mainstream education.",
    image: "/images/inclusive-education.jpg",
    link: "/initiatives/inclusive-education"
  },
  {
    title: "Social Equality",
    description: "Promoting equal opportunities for backward classes.",
    image: "/images/social-equality.jpg",
    link: "/initiatives/social-equality"
  },
  {
    title: "Sports Engagement",
    description: "Encouraging participation in sports and athletics.",
    image: "/images/sports-engagement.jpg",
    link: "/initiatives/sports-engagement"
  },
  {
    title: "Clean Energy",
    description: "Promoting sustainable and renewable energy solutions.",
    image: "/images/clean-energy.jpg",
    link: "/initiatives/clean-energy"
  }
]

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <InitiativeCard key={index} {...initiative} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/initiatives" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors">
              Explore All Initiatives
            </Link>
          </div>
        </div>
      </section>
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
          <p className="text-xl mb-8">Together, we can create a better future for India.</p>
          <Link href="/get-involved" className="bg-secondary text-white px-6 py-3 rounded-full font-semibold hover:bg-secondary-dark transition-colors">
            Get Involved
          </Link>
        </div>
      </section>
    </div>
  )
}