import { Link } from "react-router-dom";
import { blogPosts } from "../data/blog-data";
import Navbar from "../components/Navbar";

export default function Blog() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gradient-to-b from-white to-zinc-50/50 pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-10 text-center text-gray-900">Blog</h1>
          <div className="grid gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="block bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-100 p-6 transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <img
                    src={post.heroImage}
                    alt={post.title}
                    className="w-full md:w-48 h-32 object-cover rounded-lg mb-4 md:mb-0"
                  />
                  <div className="flex-1">
                    <h2 className="text-2xl font-semibold text-gray-900 mb-2">{post.title}</h2>
                    <p className="text-gray-600 mb-2">{post.description}</p>
                    <div className="text-sm text-gray-500 flex gap-4">
                      <span>{post.author}</span>
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                      <span>{post.readingTime}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
} 