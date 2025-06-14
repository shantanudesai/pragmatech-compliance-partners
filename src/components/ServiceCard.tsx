
import { ReactNode } from "react";
import { Check } from "lucide-react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  bullets: string[];
  link?: string;
}

const ServiceCard = ({
  icon,
  title,
  description,
  bullets,
  link = "#"
}: ServiceCardProps) => (
  <div className="bg-white rounded-xl shadow-md border border-gray-100 p-7 flex flex-col h-full hover:shadow-lg transition-shadow">
    <div className="flex items-center mb-3 gap-2 text-[1.3rem]">{icon}<span className="font-bold text-lg">{title}</span></div>
    <div className="text-gray-700 mb-4">{description}</div>
    <ul className="flex flex-col gap-1 mb-6">
      {bullets.map((text, i) => (
        <li key={i} className="flex items-start gap-2 text-sm text-gray-800">
          <Check size={18} className="mt-0.5 text-green-600" />
          {text}
        </li>
      ))}
    </ul>
    <a
      href={link}
      className="w-full mt-auto px-4 py-2 rounded border border-gray-300 bg-white hover:bg-gray-50 font-semibold text-center transition-colors"
    >
      Learn More
    </a>
  </div>
);

export default ServiceCard;
