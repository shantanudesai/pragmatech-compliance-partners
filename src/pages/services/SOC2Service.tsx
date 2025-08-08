import { Link } from "react-router-dom";
import { FileSearch, ArrowRight, CheckCircle, Users, FileText, Award } from "lucide-react";
import { useEffect } from "react";
import Navbar from "../../components/Navbar";

const SOC2Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-indigo-50 pt-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-indigo-100 rounded-full">
                <FileSearch className="h-12 w-12 text-indigo-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              SOC 2 Compliance
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
              Achieving SOC 2 Type II attestation through comprehensive control implementation, continuous monitoring, and expert audit preparation.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/soc2-questionnaire" 
                className="inline-flex items-center justify-center px-8 py-4 bg-indigo-600 text-white font-semibold rounded-full shadow-lg hover:bg-indigo-700 hover:shadow-xl transition-all duration-300 text-lg"
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
              Comprehensive SOC 2 implementation services to achieve and maintain Type II attestation across all trust service criteria.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-indigo-50 rounded-lg w-fit mb-4">
                <FileText className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Control Design & Implementation</h3>
              <p className="text-gray-600">
                Design and implementation of SOC 2 controls across security, availability, confidentiality, and privacy criteria.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-blue-50 rounded-lg w-fit mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Risk Assessment & Management</h3>
              <p className="text-gray-600">
                Comprehensive risk assessments and ongoing management frameworks aligned with SOC 2 requirements.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-emerald-50 rounded-lg w-fit mb-4">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Monitoring</h3>
              <p className="text-gray-600">
                Implementation of monitoring systems and processes to ensure ongoing control effectiveness.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-purple-50 rounded-lg w-fit mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Audit Readiness & Support</h3>
              <p className="text-gray-600">
                Complete preparation for SOC 2 audits with ongoing support throughout the attestation process.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Benefits of SOC 2 Compliance
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Build customer trust and meet vendor requirements with industry-recognized security and operational controls.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-indigo-100 rounded-full w-fit mx-auto mb-4">
                <FileSearch className="h-8 w-8 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Trust</h3>
              <p className="text-gray-600">
                Demonstrate security commitment to customers and prospects through independent attestation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-green-100 rounded-full w-fit mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Vendor Requirements</h3>
              <p className="text-gray-600">
                Meet enterprise customer security requirements and accelerate sales cycles.
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-purple-100 rounded-full w-fit mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Operational Excellence</h3>
              <p className="text-gray-600">
                Improve internal processes and operational efficiency through structured control frameworks.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Achieve SOC 2 Compliance?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start your SOC 2 journey today and build customer trust through verified security controls.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/soc2-questionnaire" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-indigo-600 font-semibold rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 text-lg"
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

export default SOC2Service;
