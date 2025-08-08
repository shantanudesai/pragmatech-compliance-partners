import { Link } from "react-router-dom";
import { Heart, ArrowRight, CheckCircle, Users, FileText, Award } from "lucide-react";
import { useEffect } from "react";
import Navbar from "../../components/Navbar";

const HealthcareITService = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-pink-50 pt-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-pink-100 rounded-full">
                <Heart className="h-12 w-12 text-pink-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Healthcare IT Compliance
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
              Specialized healthcare IT compliance services including HIPAA, HITECH, and medical device security for protecting patient data and ensuring regulatory compliance.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/healthcare-it-questionnaire" 
                className="inline-flex items-center justify-center px-8 py-4 bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:bg-pink-700 hover:shadow-xl transition-all duration-300 text-lg"
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
              Specialized healthcare IT compliance services to protect patient data and ensure regulatory compliance across all healthcare systems.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-pink-50 rounded-lg w-fit mb-4">
                <FileText className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">HIPAA Compliance</h3>
              <p className="text-gray-600">
                Comprehensive HIPAA compliance assessments, implementation, and ongoing monitoring for healthcare organizations.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-blue-50 rounded-lg w-fit mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Medical Device Security</h3>
              <p className="text-gray-600">
                Security assessments and compliance frameworks for medical devices and connected healthcare systems.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-emerald-50 rounded-lg w-fit mb-4">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Patient Data Protection</h3>
              <p className="text-gray-600">
                Implementation of robust patient data protection measures and privacy safeguards across all systems.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-purple-50 rounded-lg w-fit mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Healthcare IT Governance</h3>
              <p className="text-gray-600">
                Development of comprehensive IT governance frameworks specific to healthcare industry requirements.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Benefits of Healthcare IT Compliance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Protect patient trust and avoid regulatory penalties while ensuring the highest standards of healthcare data security.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-pink-100 rounded-full w-fit mx-auto mb-4">
                <Heart className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Patient Trust</h3>
              <p className="text-gray-600">
                Build and maintain patient trust through demonstrable commitment to data privacy and security.
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-green-100 rounded-full w-fit mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Regulatory Protection</h3>
              <p className="text-gray-600">
                Avoid significant HIPAA penalties and regulatory sanctions through comprehensive compliance measures.
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-purple-100 rounded-full w-fit mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Operational Excellence</h3>
              <p className="text-gray-600">
                Improve healthcare delivery through secure, compliant, and efficiently managed IT systems.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Secure Healthcare Data?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start your healthcare IT compliance journey today and protect patient data with confidence.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/healthcare-it-questionnaire" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-pink-600 font-semibold rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 text-lg"
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

export default HealthcareITService;
