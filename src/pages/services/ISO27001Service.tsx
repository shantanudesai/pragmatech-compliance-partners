import { Link } from "react-router-dom";
import { ShieldCheck, ArrowRight, CheckCircle, Users, FileText, Award } from "lucide-react";
import { useEffect } from "react";
import Navbar from "../../components/Navbar";

const ISO27001Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 pt-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-blue-100 rounded-full">
                <ShieldCheck className="h-12 w-12 text-blue-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              ISO 27001 Compliance
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
              Guiding organizations to achieve and maintain ISO 27001 certification through comprehensive risk assessment, policy development, and audit readiness.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/iso27001-questionnaire" 
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 hover:shadow-xl transition-all duration-300 text-lg"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/blog/iso-27001-2022-guide" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-gray-200 text-gray-800 font-semibold rounded-full shadow-lg hover:border-blue-200 hover:shadow-xl transition-all duration-300 text-lg"
              >
                Learn More
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
              Comprehensive ISO 27001 implementation services tailored to your organization's unique needs and industry requirements.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-blue-50 rounded-lg w-fit mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Gap Analysis & Risk Assessment</h3>
              <p className="text-gray-600">
                Comprehensive evaluation of your current security posture and identification of gaps against ISO 27001 requirements.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-emerald-50 rounded-lg w-fit mb-4">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Policy & Procedure Development</h3>
              <p className="text-gray-600">
                Creation of comprehensive information security policies, procedures, and documentation framework.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-orange-50 rounded-lg w-fit mb-4">
                <CheckCircle className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Employee Awareness Training</h3>
              <p className="text-gray-600">
                Customized training programs to ensure all staff understand their role in information security.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-purple-50 rounded-lg w-fit mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Audit Preparation & Support</h3>
              <p className="text-gray-600">
                Complete preparation for certification audits with ongoing support throughout the process.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Benefits of ISO 27001 Certification
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Achieve competitive advantage and build trust with stakeholders through internationally recognized information security management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-blue-100 rounded-full w-fit mx-auto mb-4">
                <ShieldCheck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enhanced Security Posture</h3>
              <p className="text-gray-600">
                Systematic approach to identifying, managing, and reducing information security risks.
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-green-100 rounded-full w-fit mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Regulatory Compliance</h3>
              <p className="text-gray-600">
                Meet legal and regulatory requirements while demonstrating due diligence to stakeholders.
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-purple-100 rounded-full w-fit mx-auto mb-4">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Competitive Advantage</h3>
              <p className="text-gray-600">
                Stand out in tenders and build trust with customers, partners, and investors.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Secure Your Organization?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start your ISO 27001 journey today and build a robust information security management system.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/iso27001-questionnaire" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 text-lg"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/blog/iso-27001-2022-guide" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 text-lg"
              >
                Read Our Guide
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ISO27001Service; 