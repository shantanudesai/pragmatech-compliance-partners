
import Navbar from "@/components/Navbar";

const About = () => (
  <div className="min-h-screen bg-[#f8f9fb]">
    <Navbar />
    <main className="pt-28 pb-20 max-w-2xl mx-auto px-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">About Pragmatech Compliance Partners</h1>
      <div className="text-gray-700 text-lg">
        <p>
          [About Us content coming soon.]
        </p>
        <p className="mt-4">
          Pragmatech Compliance Partners is an independent consultancy based in India, helping organizations worldwide achieve robust compliance with modern standards.
        </p>
      </div>
    </main>
  </div>
);

export default About;
