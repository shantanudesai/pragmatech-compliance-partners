import { Link } from "react-router-dom";
import { Lock, ArrowRight, CheckCircle, Users, FileText, Award } from "lucide-react";
import { useEffect } from "react";
import Navbar from "../../components/Navbar";

const ISO27701Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-emerald-50 pt-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-emerald-100 rounded-full">
                <Lock className="h-12 w-12 text-emerald-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              ISO 27701 Compliance
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
              Implementing a Privacy Information Management System (PIMS) for global privacy standards and comprehensive data protection frameworks.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/iso27701-questionnaire" 
                className="inline-flex items-center justify-center px-8 py-4 bg-emerald-600 text-white font-semibold rounded-full shadow-lg hover:bg-emerald-700 hover:shadow-xl transition-all duration-300 text-lg"
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
              Comprehensive ISO 27701 implementation services to establish and maintain your Privacy Information Management System.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-emerald-50 rounded-lg w-fit mb-4">
                <FileText className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">PIMS Implementation</h3>
              <p className="text-gray-600">
                Comprehensive Privacy Information Management System design and implementation aligned with ISO 27701 requirements.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-blue-50 rounded-lg w-fit mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy Policy Drafting</h3>
              <p className="text-gray-600">
                Development of comprehensive privacy policies and procedures that meet global privacy requirements.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-orange-50 rounded-lg w-fit mb-4">
                <CheckCircle className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Data Mapping & Impact Assessment</h3>
              <p className="text-gray-600">
                Detailed data flow mapping and privacy impact assessments to identify and mitigate privacy risks.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-purple-50 rounded-lg w-fit mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Privacy Framework Compliance</h3>
              <p className="text-gray-600">
                Ensuring compliance with multiple privacy frameworks including GDPR, CCPA, and other regional regulations.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Benefits of ISO 27701 Certification
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Build trust and demonstrate commitment to privacy protection with internationally recognized privacy management standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-emerald-100 rounded-full w-fit mx-auto mb-4">
                <Lock className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enhanced Privacy Protection</h3>
              <p className="text-gray-600">
                Systematic approach to protecting personal information and maintaining privacy rights.
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-green-100 rounded-full w-fit mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Global Privacy Compliance</h3>
              <p className="text-gray-600">
                Meet international privacy regulations and demonstrate compliance to global stakeholders.
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-purple-100 rounded-full w-fit mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Stakeholder Trust</h3>
              <p className="text-gray-600">
                Build confidence with customers, partners, and regulators through certified privacy practices.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Protect Privacy Rights?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start your ISO 27701 journey today and build a comprehensive privacy management system.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/iso27701-questionnaire" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 text-lg"
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

export default ISO27701Service;
