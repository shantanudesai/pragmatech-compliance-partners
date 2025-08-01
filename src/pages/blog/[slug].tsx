import { useParams } from "react-router-dom";
import { blogPosts } from "../../data/blog-data";
import BlogPostContent from "../../components/BlogPostContent";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600">The blog post you are looking for does not exist.</p>
        </div>
      </main>
    );
  }

  return <BlogPostContent slug={slug as string} />;
} 