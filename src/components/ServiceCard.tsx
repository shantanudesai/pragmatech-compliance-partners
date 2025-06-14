
import { ReactNode } from "react";
import { Check, ArrowRight } from "lucide-react";

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
  <div className="group bg-white rounded-2xl shadow-lg border border-gray-100 p-8 h-full hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
    <div className="flex items-center mb-6">
      <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gray-50 group-hover:bg-blue-50 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="font-bold text-xl text-gray-900 ml-4">{title}</h3>
    </div>
    
    <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
    
    <ul className="space-y-3 mb-8 flex-grow">
      {bullets.map((text, i) => (
        <li key={i} className="flex items-start gap-3 text-gray-700">
          <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
            <Check size={12} className="text-green-600" />
          </div>
          <span className="text-sm">{text}</span>
        </li>
      ))}
    </ul>
    
    <a
      href={link}
      className="group/link inline-flex items-center justify-center w-full px-6 py-3 bg-gray-50 hover:bg-blue-600 text-gray-900 hover:text-white font-semibold rounded-xl transition-all duration-300 border border-gray-200 hover:border-blue-600 mt-auto"
    >
      Learn More
      <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
    </a>
  </div>
);

export default ServiceCard;
