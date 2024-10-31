import InitiativeCard from '../components/InitiativeCard';

const initiative = [
  {
    title: "Women's Safety",
    description: "Empowering women through technology and community support.",
    image: "/images/woman-safety3.jpg",
    link: "/initiatives/womens-safety" // Make sure this matches your actual file structure
  },
  
  {
    title: "Inclusive Education",
    description: "Supporting children with special needs in mainstream education.",
    image: "/images/INCLUSIVEEDUCATION.jpg",
    link: "/initiatives/inclusive-education"
  },
  {
    title: "Social Equality",
    description: "Promoting equal opportunities for backward classes.",
    image: "/images/socialequalityfinalest.png",
    link: "/initiatives/social-equality"
  },
  {
    title: "Sports Engagement",
    description: "Encouraging participation in sports and athletics.",
    image: "/images/sports%202.jpeg", // Note the space is encoded as %20
    link: "/initiatives/sports-engagement"
  },
  {
    title: "Clean Energy",
    description: "Promoting sustainable and renewable energy solutions.",
    image: "/images/CLEANENERYG.png",
    link: "/initiatives/clean-energy"
  }
];

export default function initiatives() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-12">Our Proposals</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {initiative.map((initiative, index) => (
          <InitiativeCard key={index} {...initiative} />
        ))}
      </div>
    </div>
  );
}
