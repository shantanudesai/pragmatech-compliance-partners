import { Link } from "react-router-dom";
import { FileCode, ArrowRight, CheckCircle, Users, FileText, Award } from "lucide-react";
import { useEffect } from "react";
import Navbar from "../../components/Navbar";

const ISO42001Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-orange-50 pt-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-orange-100 rounded-full">
                <FileCode className="h-12 w-12 text-orange-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              ISO 42001 Compliance
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
              Responsible AI governance with comprehensive risk assessments, bias monitoring, and ethical framework development for ISO 42001 certification.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/iso42001-questionnaire" 
                className="inline-flex items-center justify-center px-8 py-4 bg-orange-600 text-white font-semibold rounded-full shadow-lg hover:bg-orange-700 hover:shadow-xl transition-all duration-300 text-lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              What We Offer
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive ISO 42001 implementation services for responsible AI management and governance frameworks.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-orange-50 rounded-lg w-fit mb-4">
                <FileText className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Risk & Impact Assessment</h3>
              <p className="text-gray-600">
                Comprehensive evaluation of AI systems to identify risks, impacts, and mitigation strategies.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-blue-50 rounded-lg w-fit mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ethical Framework Development</h3>
              <p className="text-gray-600">
                Development of ethical AI frameworks and governance structures for responsible AI deployment.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-emerald-50 rounded-lg w-fit mb-4">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Bias Monitoring & Reporting</h3>
              <p className="text-gray-600">
                Implementation of bias detection systems and regular monitoring protocols for AI fairness.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-purple-50 rounded-lg w-fit mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Compliant Documentation</h3>
              <p className="text-gray-600">
                Creation of comprehensive documentation meeting ISO 42001 requirements for AI governance.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Benefits of ISO 42001 Certification
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Lead in responsible AI development and build trust with stakeholders through certified AI governance practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-orange-100 rounded-full w-fit mx-auto mb-4">
                <FileCode className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Responsible AI Development</h3>
              <p className="text-gray-600">
                Systematic approach to developing and deploying AI systems with ethical considerations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-green-100 rounded-full w-fit mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Mitigation</h3>
              <p className="text-gray-600">
                Proactive identification and management of AI-related risks and potential negative impacts.
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-purple-100 rounded-full w-fit mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Market Leadership</h3>
              <p className="text-gray-600">
                Demonstrate leadership in responsible AI and gain competitive advantage through certified practices.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready for Responsible AI Governance?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start your ISO 42001 journey today and build ethical AI management systems.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/iso42001-questionnaire" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 font-semibold rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 text-lg"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ISO42001Service;
