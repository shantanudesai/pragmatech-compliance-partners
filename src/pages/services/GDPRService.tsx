import { Link } from "react-router-dom";
import { Gavel, ArrowRight, CheckCircle, Users, FileText, Award } from "lucide-react";
import { useEffect } from "react";
import Navbar from "../../components/Navbar";

const GDPRService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-cyan-50 pt-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-cyan-100 rounded-full">
                <Gavel className="h-12 w-12 text-cyan-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              GDPR Compliance
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive GDPR compliance services including data protection frameworks, privacy policies, and ongoing regulatory compliance management.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/gdpr-questionnaire" 
                className="inline-flex items-center justify-center px-8 py-4 bg-cyan-600 text-white font-semibold rounded-full shadow-lg hover:bg-cyan-700 hover:shadow-xl transition-all duration-300 text-lg"
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
              Comprehensive GDPR compliance services to ensure your organization meets all European data protection requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-cyan-50 rounded-lg w-fit mb-4">
                <FileText className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Protection Framework</h3>
              <p className="text-gray-600">
                Development of comprehensive data protection frameworks aligned with GDPR requirements and best practices.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-blue-50 rounded-lg w-fit mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy Policy & Documentation</h3>
              <p className="text-gray-600">
                Creation of GDPR-compliant privacy policies, notices, and comprehensive documentation packages.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-emerald-50 rounded-lg w-fit mb-4">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Subject Rights Management</h3>
              <p className="text-gray-600">
                Implementation of processes and systems to handle data subject requests and maintain compliance.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-purple-50 rounded-lg w-fit mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ongoing Compliance Monitoring</h3>
              <p className="text-gray-600">
                Continuous monitoring and updates to ensure ongoing GDPR compliance and regulatory alignment.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Benefits of GDPR Compliance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Protect your organization from regulatory fines while building trust with European customers and stakeholders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-cyan-100 rounded-full w-fit mx-auto mb-4">
                <Gavel className="h-8 w-8 text-cyan-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Regulatory Protection</h3>
              <p className="text-gray-600">
                Avoid significant GDPR fines and penalties through comprehensive compliance measures.
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-green-100 rounded-full w-fit mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Market Access</h3>
              <p className="text-gray-600">
                Enable business operations across European markets with confidence in data protection compliance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-purple-100 rounded-full w-fit mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Trust</h3>
              <p className="text-gray-600">
                Build stronger relationships with customers through transparent and compliant data practices.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Achieve GDPR Compliance?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start your GDPR compliance journey today and protect your organization from regulatory risks.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/gdpr-questionnaire" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-cyan-600 font-semibold rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 text-lg"
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

export default GDPRService;
