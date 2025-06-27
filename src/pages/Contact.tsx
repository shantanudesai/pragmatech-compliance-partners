import Navbar from "@/components/Navbar";
import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { sendContactMessage } from "@/services/emailService";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formElement = e.currentTarget;
    const formData = new FormData(formElement);
    const contactData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      message: formData.get("message") as string,
    };

    try {
      const result = await sendContactMessage(contactData);
      
      if (result.success) {
        setStatus("success");
        // Reset form safely using ref
        if (formRef.current) {
          formRef.current.reset();
        }
        // Reset status after 5 seconds
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        throw new Error(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : 'Failed to send message. Please try again.');
      // Reset error status after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  return (
    <div className="min-h-screen bg-[#f8f9fb]">
      <Navbar />
      <main className="pt-28 pb-20 max-w-2xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h1>
        
        {/* Discovery Questionnaire CTA */}
        <div className="bg-gradient-to-r from-[#143066] to-blue-800 rounded-xl shadow-lg border border-gray-100 p-8 mb-8 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Take our comprehensive Discovery Questionnaire to help us understand your compliance needs and provide you with a tailored solution.
            </p>
            <Link
              to="/questionnaire"
              className="inline-flex items-center gap-2 bg-white text-[#143066] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-md"
            >
              Fill Out Discovery Questionnaire
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Quick Connect? Fill out and we'll get back within 24 hours</h2>
          
          {/* Status Messages */}
          {status === "success" && (
            <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="text-green-800 font-medium">✓ Message sent successfully!</div>
              <div className="text-green-700 text-sm mt-1">Thank you for your message! We will get back to you within 24 hours.</div>
            </div>
          )}
          
          {status === "error" && (
            <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="text-red-800 font-medium">✗ Failed to send message</div>
              <div className="text-red-700 text-sm mt-1">{errorMessage}</div>
            </div>
          )}

          <form ref={formRef} className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label className="text-gray-700 font-semibold" htmlFor="name">
              Name *
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                disabled={status === "submitting"}
                className="mt-1 w-full border border-gray-200 rounded px-4 py-2 text-gray-900 focus:ring-2 focus:ring-blue-200 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </label>
            <label className="text-gray-700 font-semibold" htmlFor="email">
              Email *
              <input
                id="email"
                name="email"
                type="email"
                required
                autoComplete="email"
                disabled={status === "submitting"}
                className="mt-1 w-full border border-gray-200 rounded px-4 py-2 text-gray-900 focus:ring-2 focus:ring-blue-200 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </label>
            <label className="text-gray-700 font-semibold" htmlFor="message">
              Message *
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                disabled={status === "submitting"}
                className="mt-1 w-full border border-gray-200 rounded px-4 py-2 text-gray-900 focus:ring-2 focus:ring-blue-200 focus:outline-none disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
            </label>
            <button
              type="submit"
              className="mt-2 w-full py-2 px-4 bg-[#143066] text-white font-semibold rounded hover:bg-blue-900 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={status === "submitting" || status === "success"}
            >
              {status === "submitting" ? "Sending..." : status === "success" ? "Message Sent!" : "Send Message"}
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
