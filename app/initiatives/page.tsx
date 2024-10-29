import InitiativeCard from '../components/InitiativeCard'

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

export default function Initiatives() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Initiatives</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initiatives.map((initiative, index) => (
          <InitiativeCard  key={index} {...initiative} />
        ))}
      </div>
    </div>
  )
}