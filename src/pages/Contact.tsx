
import Navbar from "@/components/Navbar";
import { useState } from "react";

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
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
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
          <div className="mt-8 text-gray-700 text-sm">
            <div className="font-bold mb-1">Firm Details:</div>
            Pragmatech Compliance Partners<br/>
            Email: <a href="mailto:info@pragmatechcompliance.in" className="text-blue-700 underline">info@pragmatechcompliance.in</a><br/>
            Location: Chennai, India
          </div>
        </div>
      </main>
    </div>
  );
};

export default Contact;
