
import Navbar from "@/components/Navbar";

const About = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
    <Navbar />
    <main className="pt-28 pb-20 max-w-4xl mx-auto px-4">
      <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-900 text-center">
        About Pragmatech Compliance Partners
      </h1>
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 sm:p-12">
        <div className="text-gray-700 text-lg leading-relaxed space-y-6">
          <p>
            At Pragmatech Compliance Partners, we believe compliance shouldn't be complicated. We're an independent consultancy based in India, helping organizations worldwide navigate today's complex regulatory landscape with practical, technology-driven solutions.
          </p>
          
          <p>
            Our team brings together seasoned professionals with over two decades of hands-on experience. We've walked in your shoes – as Information Security Managers, Legal Compliance leads, Internal Technology Auditors, and Legal Advisors across IT consulting, banking, and global conglomerates.
          </p>
          
          <p>
            What sets us apart is our unique blend of technical certifications (ISO 27001/42001 Lead Auditor, CISA, CISSP) and practicing lawyers with hands-on cyber law experience. We don't just understand compliance frameworks – we've implemented them, audited them, and defended them in legal proceedings.
          </p>
          
          <p>
            Whether you're tackling ISO 27001, SOC 2, India's Digital Personal Data Protection Act, or AI governance frameworks, we bring thought leadership backed by proven expertise that goes beyond textbook knowledge.
          </p>
          
          <p>
            We partner with organizations of all sizes, helping them build compliance programs that actually work in the real world, not just on paper.
          </p>
        </div>
      </div>
    </main>
  </div>
);

export default About;
