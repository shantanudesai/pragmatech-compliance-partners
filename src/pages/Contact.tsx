
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { ExternalLink } from "lucide-react";

const Contact = () => {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: Integrate backend for emails. Simulate submit for now.
    setStatus("success");
    setTimeout(() => setStatus("idle"), 3000);
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
            <a
              href="https://lovable.dev/projects/29a210ee-5c43-4401-8a30-662d353f3769"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-[#143066] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-md"
            >
              Fill Out Discovery Questionnaire
              <ExternalLink size={18} />
            </a>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h2 className="text-xl font-semibold mb-6 text-gray-800">Quick Connect? Fill out and we'll get back within 24 hours</h2>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <label className="text-gray-700 font-semibold" htmlFor="name">
              Name *
              <input
                id="name"
                name="name"
                type="text"
                required
                autoComplete="name"
                className="mt-1 w-full border border-gray-200 rounded px-4 py-2 text-gray-900 focus:ring-2 focus:ring-blue-200 focus:outline-none"
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
                className="mt-1 w-full border border-gray-200 rounded px-4 py-2 text-gray-900 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              />
            </label>
            <label className="text-gray-700 font-semibold" htmlFor="message">
              Message *
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="mt-1 w-full border border-gray-200 rounded px-4 py-2 text-gray-900 focus:ring-2 focus:ring-blue-200 focus:outline-none"
              />
            </label>
            <button
              type="submit"
              className="mt-2 w-full py-2 px-4 bg-[#143066] text-white font-semibold rounded hover:bg-blue-900 transition-colors"
              disabled={status === "success"}
            >
              {status === "success" ? "Message Sent!" : "Send Message"}
            </button>
            {status === "success" && (
              <div className="text-green-700 text-center mt-2">Thank you for your message! We will get back to you soon.</div>
            )}
          </form>
        </div>
      </main>
    </div>
  );
};

export default Contact;
