import Link from 'next/link';
import Image from 'next/image';

interface InitiativeCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const InitiativeCard: React.FC<InitiativeCardProps> = ({ title, description, image, link }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 max-w-xs">
      <Image src={image} alt={title} width={200} height={100} className="rounded" />
      <h3 className="font-bold text-lg mt-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
      <Link href={link}>
        <a className="text-blue-500 hover:underline">Learn More</a>
      </Link>
    </div>
  );
};

export default InitiativeCard;
