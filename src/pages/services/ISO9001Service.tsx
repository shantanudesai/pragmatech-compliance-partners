import { Link } from "react-router-dom";
import { Award, ArrowRight, CheckCircle, Users, FileText, Cog } from "lucide-react";
import { useEffect } from "react";
import Navbar from "../../components/Navbar";

const ISO9001Service = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-amber-50 pt-24">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-amber-100 rounded-full">
                <Award className="h-12 w-12 text-amber-600" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              ISO 9001 Compliance
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 leading-relaxed">
              Comprehensive ISO 9001 quality management system implementation to improve operational efficiency and customer satisfaction across your organization.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/iso9001-questionnaire" 
                className="inline-flex items-center justify-center px-8 py-4 bg-amber-600 text-white font-semibold rounded-full shadow-lg hover:bg-amber-700 hover:shadow-xl transition-all duration-300 text-lg"
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
              Comprehensive ISO 9001 implementation services to establish and maintain your quality management system for operational excellence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-amber-50 rounded-lg w-fit mb-4">
                <FileText className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">QMS Design & Implementation</h3>
              <p className="text-gray-600">
                Comprehensive quality management system design and implementation aligned with ISO 9001 requirements.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-blue-50 rounded-lg w-fit mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Process Optimization</h3>
              <p className="text-gray-600">
                Analysis and optimization of business processes to improve efficiency and quality outcomes.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-emerald-50 rounded-lg w-fit mb-4">
                <CheckCircle className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Training & Competency</h3>
              <p className="text-gray-600">
                Employee training programs and competency frameworks to ensure quality awareness and capability.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
              <div className="p-3 bg-purple-50 rounded-lg w-fit mb-4">
                <Cog className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Continuous Improvement</h3>
              <p className="text-gray-600">
                Implementation of continuous improvement processes and performance monitoring systems.
              </p>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Benefits of ISO 9001 Certification
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Achieve operational excellence and customer satisfaction through internationally recognized quality management standards.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="p-4 bg-amber-100 rounded-full w-fit mx-auto mb-4">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Enhanced Quality</h3>
              <p className="text-gray-600">
                Improve product and service quality through systematic quality management processes.
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-green-100 rounded-full w-fit mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Customer Satisfaction</h3>
              <p className="text-gray-600">
                Increase customer satisfaction and loyalty through consistent quality delivery and service excellence.
              </p>
            </div>
            
            <div className="text-center">
              <div className="p-4 bg-purple-100 rounded-full w-fit mx-auto mb-4">
                <Cog className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Operational Efficiency</h3>
              <p className="text-gray-600">
                Streamline operations and reduce waste through optimized processes and continuous improvement.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-2xl p-8 lg:p-12 text-center text-white">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Achieve Quality Excellence?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Start your ISO 9001 journey today and build a world-class quality management system.
            </p>
            <div className="flex justify-center">
              <Link 
                to="/iso9001-questionnaire" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-amber-600 font-semibold rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 text-lg"
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

export default ISO9001Service;
