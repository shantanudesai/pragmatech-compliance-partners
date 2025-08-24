import { Link } from "react-router-dom";
import { blogPosts } from "../data/blog-data";
import React from "react";
import {
  ArrowLeft,
  Calendar,
  User,
  Clock,
  Shield,
  FileCheck,
  BarChart3,
  Users,
  Building2,
  ClipboardCheck,
  FileText,
  DollarSign,
  Library,
  RefreshCw,
  Monitor,
  Banknote,
  Heart,
  Building,
  Globe,
  ShoppingBag,
  GraduationCap,
  Truck,
  ArrowRight,
  Puzzle,
  CheckCircle,
  BarChart,
  Rocket,
  Info
} from "lucide-react";

interface BlogPostContentProps {
  slug: string;
}

// ... (all the helper components: FeatureCard, StepCard, ClauseCard, SectionDivider, IndustryCard, IntegrationCard, ActionStep)

// Copy all helper components from the provided BlogPostContent.tsx here
// ... existing code ...

// (For brevity, the helper components will be copied as in the provided file)

const FeatureCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0">
        <div className="p-3 bg-sky-50 rounded-lg">
          <Icon className="h-6 w-6 text-sky-600" />
        </div>
      </div>
      <div>
        <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  </div>
);

const StepCard = ({ number, title, description }: { number: number, title: string, description: string }) => (
  <div className="relative">
    <div className="absolute left-0 top-0 -ml-3 mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-sky-600 text-white text-sm font-medium">
      {number}
    </div>
    <div className="pl-8">
      <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

const ClauseCard = ({ number, title, description }: { number: string, title: string, description: string }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0">
        <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600 font-bold">
          {number}
        </div>
      </div>
      <div>
        <h4 className="text-xl font-semibold text-gray-900 mb-3">{title}</h4>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  </div>
);

const SectionDivider = ({ title }: { title: string }) => (
  <div className="relative my-16">
    <div className="absolute inset-0 flex items-center" aria-hidden="true">
      <div className="w-full border-t border-gray-200"></div>
    </div>
    <div className="relative flex justify-center">
      <h2 className="bg-white px-6 py-2 text-3xl font-bold text-gray-900 rounded-full shadow-sm border border-gray-100">
        {title}
      </h2>
    </div>
  </div>
);

const IndustryCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1">
    <div className="flex flex-col items-center text-center">
      <div className="p-3 bg-sky-50 rounded-xl mb-4">
        <Icon className="h-8 w-8 text-sky-600" />
      </div>
      <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </div>
  </div>
);

const IntegrationCard = ({ title, description }: { title: string, description: string }) => (
  <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex items-center space-x-4">
    <div className="flex-shrink-0">
      <Puzzle className="h-8 w-8 text-sky-500" />
    </div>
    <div>
      <h4 className="text-lg font-semibold text-gray-900 mb-1">{title}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </div>
);

const ActionStep = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="flex items-start space-x-4">
    <div className="flex-shrink-0">
      <div className="p-2 bg-sky-50 rounded-lg">
        <Icon className="h-6 w-6 text-sky-600" />
      </div>
    </div>
    <div>
      <h4 className="text-lg font-semibold text-gray-900 mb-2">{title}</h4>
      <p className="text-gray-600">{description}</p>
    </div>
  </div>
);

// AI Model vs Solution Blog Post Component
const AIModelVsSolutionPost: React.FC<{ post: any }> = ({ post }) => {
  const lifecyclePhases = [
    {
      phase: "Use Case Development",
      modelLifecycle: "Define the specific problem the model is intended to solve.",
      solutionLifecycle: "Identify and justify the business problem the overall AI system will address.",
      similarities: "Similar intent, but solution encompasses broader business justification and stakeholder alignment."
    },
    {
      phase: "Design",
      modelLifecycle: "Plan model architecture and data preprocessing steps.",
      solutionLifecycle: "Design system architecture including model, data flows, UI, privacy, security.",
      similarities: "Model design focuses on algorithm and data; solution design integrates full system considerations."
    },
    {
      phase: "Development",
      modelLifecycle: "Build and train the AI model using selected data and algorithms.",
      solutionLifecycle: "Develop and integrate the model, data pipelines, interfaces, and business logic.",
      similarities: "Model development is one part; solution development includes end-to-end system building and integration."
    },
    {
      phase: "Evaluation",
      modelLifecycle: "Test and validate model performance using new or holdout data.",
      solutionLifecycle: "Evaluate both model performance and system usability, compliance, and workflows.",
      similarities: "Both validate effectiveness, but solution evaluation covers system-wide impacts and user experience."
    },
    {
      phase: "Deployment",
      modelLifecycle: "Deploy model to production environment for inference.",
      solutionLifecycle: "Deploy entire AI solution including backend, frontend, model, and APIs.",
      similarities: "Shared deployment phase, solution deployment is more complex and involves multiple components."
    },
    {
      phase: "Monitoring & Maintenance",
      modelLifecycle: "Monitor model accuracy, retrain or update to handle drift.",
      solutionLifecycle: "Monitor system health, gather user feedback, maintain model and supporting components.",
      similarities: "Both require ongoing oversight, solution monitoring covers broader operational and compliance metrics."
    },
    {
      phase: "Decommissioning",
      modelLifecycle: "Retire model versions and artifacts safely.",
      solutionLifecycle: "Retire full solution including model, data pipelines, UI, and business processes.",
      similarities: "Both require safe retirement, solution decommissioning is broader and includes coordination across teams."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-zinc-50/50">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link
              to="/blog"
              className="inline-flex items-center text-base font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Blog
            </Link>
            <div className="flex space-x-8">
              <Link to="/blog" className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors">
                Blog
              </Link>
              <Link to="/about" className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 mb-16 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #60a5fa 0%, transparent 50%), 
                             radial-gradient(circle at 75% 75%, #a855f7 0%, transparent 50%)`,
          }}></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
          <article className="max-w-6xl mx-auto">
            <header className="text-center mb-16">
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-300 mb-12">
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <User className="h-4 w-4 mr-2 text-blue-400" />
                  <span className="text-white">{post.author}</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <Calendar className="h-4 w-4 mr-2 text-blue-400" />
                  <span className="text-white">{new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                  <Clock className="h-4 w-4 mr-2 text-blue-400" />
                  <span className="text-white">{post.readingTime}</span>
                </div>
              </div>
              
              {/* AI Visual Representation */}
              <div className="mb-12 flex justify-center">
                <div className="relative">
                  {/* Pragmatech Logo Area */}
                  <div className="flex items-center justify-center mb-8">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-left">
                        <div className="text-2xl font-bold text-white">PRAGMATECH</div>
                        <div className="text-sm text-blue-200">Compliance Partners</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* AI Model vs Solution Visual */}
                  <div className="flex items-center justify-center space-x-16 mb-8">
                    {/* AI Model Circle */}
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full border-4 border-blue-400 bg-blue-500/20 backdrop-blur-sm flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-8 h-8 mx-auto mb-2 grid grid-cols-3 gap-1">
                            {[...Array(9)].map((_, i) => (
                              <div key={i} className="w-1 h-1 bg-blue-300 rounded-full"></div>
                            ))}
                          </div>
                          <div className="text-xs text-blue-200 font-semibold">MODEL</div>
                        </div>
                      </div>
                      {/* Connection lines */}
                      <div className="absolute -top-4 -left-4 w-6 h-6 border-2 border-blue-300 rounded-full"></div>
                      <div className="absolute -top-4 -right-4 w-4 h-4 border-2 border-blue-300 rounded-full"></div>
                      <div className="absolute -bottom-4 -left-4 w-4 h-4 border-2 border-blue-300 rounded-full"></div>
                      <div className="absolute -bottom-4 -right-4 w-6 h-6 border-2 border-blue-300 rounded-full"></div>
                    </div>
                    
                    {/* VS Text */}
                    <div className="text-4xl font-bold text-white">VS</div>
                    
                    {/* AI Solution Circle */}
                    <div className="relative">
                      <div className="w-32 h-32 rounded-full border-4 border-purple-400 bg-purple-500/20 backdrop-blur-sm flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-8 h-8 mx-auto mb-2 border-2 border-purple-300 rounded">
                            <div className="w-full h-full grid grid-cols-2 gap-1 p-1">
                              <div className="bg-purple-300 rounded-sm"></div>
                              <div className="bg-purple-300 rounded-sm"></div>
                              <div className="bg-purple-300 rounded-sm"></div>
                              <div className="bg-purple-300 rounded-sm"></div>
                            </div>
                          </div>
                          <div className="text-xs text-purple-200 font-semibold">SOLUTION</div>
                        </div>
                      </div>
                      {/* Connection lines */}
                      <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-purple-300"></div>
                      <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-1 h-4 bg-purple-300"></div>
                      <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-4 h-1 bg-purple-300"></div>
                      <div className="absolute -right-6 top-1/2 transform -translate-y-1/2 w-4 h-1 bg-purple-300"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 font-heading leading-tight">
                  AI MODEL vs. SOLUTION
                </h1>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-blue-200 mb-8 font-heading leading-tight">
                  Why the Distinction Matters in AI Lifecycle Planning
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
                  {post.description}
                </p>
              </div>
            </header>
          </article>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <article className="max-w-4xl mx-auto">

          {/* Introduction */}
          <div className="prose prose-lg max-w-none mx-auto mb-16">
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              At Pragmatech, we spend a lot of time translating technical standards into branded, audit-ready documents. But every so often, a pattern emerges that demands more than formatting—it calls for reflection. One such pattern I've noticed in recent client engagements and industry conversations is the casual interchangeability of the terms <strong>AI model</strong> and <strong>AI solution</strong>.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              While they often appear side by side in documentation, proposals, and even certification prep, they are not the same—and conflating them can lead to misaligned expectations, incomplete evaluations, and compliance blind spots.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              This blog post is my attempt to clarify the distinction—not just for semantic precision, but to support better lifecycle planning, stakeholder alignment, and audit readiness.
            </p>
          </div>

          {/* Why This Matters */}
          <SectionDivider title="Why This Matters" />
          <div className="mb-16">
            <div className="bg-gradient-to-br from-purple-50 to-white rounded-2xl p-8">
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                When teams refer to "the model" as if it encompasses the entire AI system, they risk overlooking critical components: user interfaces, data pipelines, business logic, privacy controls, and operational workflows.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Conversely, when "the solution" is treated as a black box, the rigor of model development and evaluation may be diluted. For compliance professionals, architects, and product leads, this distinction isn't academic—it's foundational.
              </p>
            </div>
          </div>

          {/* Lifecycle Comparison */}
          <SectionDivider title="A Comparative View: AI Model vs. AI Solution Lifecycle" />
          <div className="mb-16">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              To bring clarity, I've structured the following table to compare the lifecycle phases of an AI model and an AI solution. This framework has helped our clients at Pragmatech align their documentation, development workflows, and audit narratives.
            </p>
            
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-sm overflow-hidden">
                <thead>
                  <tr className="bg-purple-600 text-white">
                    <th className="px-6 py-4 text-left font-semibold">Lifecycle Phase</th>
                    <th className="px-6 py-4 text-left font-semibold">AI Model Lifecycle</th>
                    <th className="px-6 py-4 text-left font-semibold">AI Solution Lifecycle</th>
                    <th className="px-6 py-4 text-left font-semibold">Similarities & Differences</th>
                  </tr>
                </thead>
                <tbody>
                  {lifecyclePhases.map((phase, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="px-6 py-4 font-semibold text-purple-900 border-b border-gray-200">
                        {phase.phase}
                      </td>
                      <td className="px-6 py-4 text-gray-700 border-b border-gray-200">
                        {phase.modelLifecycle}
                      </td>
                      <td className="px-6 py-4 text-gray-700 border-b border-gray-200">
                        {phase.solutionLifecycle}
                      </td>
                      <td className="px-6 py-4 text-gray-600 border-b border-gray-200 text-sm">
                        {phase.similarities}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Compliance Implications */}
          <SectionDivider title="Implications for Compliance and Certification" />
          <div className="mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8">
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                Whether you're pursuing <strong>ISO 42001</strong> for AI governance or integrating AI into an <strong>ISO 27001</strong>-certified environment, this distinction becomes even more critical. Certification bodies will expect clarity on what's being evaluated: the model's fairness and accuracy, or the solution's end-to-end security, usability, and accountability.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                This is especially relevant when drafting documentation for clause alignment, risk assessments, or audit prep. At Pragmatech, we've found that separating model lifecycle artifacts from solution-level workflows not only improves traceability—it builds trust.
              </p>
            </div>
          </div>

          {/* Final Thoughts */}
          <SectionDivider title="Final Thoughts" />
          <div className="mb-16">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8">
              <p className="text-lg text-gray-600 leading-relaxed mb-4">
                This post isn't a call to split hairs (I am bald you know! 😊) but it's to have clear conversations minus the jargon. As AI systems become more embedded in business-critical processes, our language must evolve to reflect the complexity we're managing.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By distinguishing between model and solution lifecycles, we empower teams to plan better, document smarter, and certify with confidence.
              </p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-center text-white">
            <h3 className="text-2xl font-bold mb-4">Need Help with AI Governance?</h3>
            <p className="text-xl mb-6 opacity-90">
              Get expert guidance on AI lifecycle planning, compliance documentation, and certification readiness.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full shadow-lg hover:bg-gray-50 transition-all duration-300 text-lg"
            >
              Let's Talk
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>

        </article>
      </div>
    </main>
  );
};

const BlogPostContent: React.FC<BlogPostContentProps> = ({ slug }) => {
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-gradient-to-b from-white to-zinc-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Blog Post Not Found
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              The blog post you're looking for doesn't exist.
            </p>
            <Link
              to="/blog"
              className="inline-flex items-center text-base font-medium text-sky-600 hover:text-sky-700"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Blog
            </Link>
          </div>
        </div>
      </main>
    );
  }

  // Handle AI Model vs Solution blog post
  if (slug === 'ai-model-vs-solution-lifecycle') {
    return <AIModelVsSolutionPost post={post} />;
  }

  // (All the arrays: benefits, certificationSteps, clauses, industries, integrations, nextSteps)
  // Copy these from the provided BlogPostContent.tsx

  const benefits = [
    {
      icon: Shield,
      title: "Enhanced Security Posture",
      description: "Build a fortress that adapts and strengthens over time with proven security practices."
    },
    {
      icon: FileCheck,
      title: "Regulatory Compliance",
      description: "Meet legal requirements while reducing compliance headaches with GDPR, HIPAA, and more."
    },
    {
      icon: BarChart3,
      title: "Proactive Risk Management",
      description: "Prevent security incidents before they occur, protecting reputation and costs."
    },
    {
      icon: Users,
      title: "Security-Conscious Culture",
      description: "Create a culture where everyone understands their role in protecting information assets."
    }
  ];

  const certificationSteps = [
    {
      title: "Building Your Foundation",
      description: "Establish ISMS framework, develop documentation, and implement processes across your organization."
    },
    {
      title: "Internal Validation",
      description: "Conduct internal audits and management reviews to evaluate system effectiveness."
    },
    {
      title: "External Certification",
      description: "Work with an accredited certification body for formal documentation review and on-site assessment."
    },
    {
      title: "Ongoing Compliance",
      description: "Maintain ISMS with annual surveillance audits and three-year recertification."
    }
  ];

  const clauses = [
    {
      number: "1-3",
      title: "The Foundation",
      description: "Establish the groundwork by defining scope, referencing essential documents, and clarifying terminology—ensuring everyone speaks the same security language."
    },
    {
      number: "4",
      title: "Understanding Your Context",
      description: "Analyze internal and external factors that impact your ISMS. Identify stakeholders and industry challenges to ensure your security approach aligns with reality."
    },
    {
      number: "5",
      title: "Leadership Commitment",
      description: "Security isn't just an IT concern. Top management must be involved in establishing policies and defining clear roles and responsibilities throughout the organization."
    },
    {
      number: "6",
      title: "Strategic Planning",
      description: "Identify risks and opportunities, set information security objectives, and create actionable plans. Move from hoping for the best to deliberate, strategic action."
    },
    {
      number: "7",
      title: "Building Your Support System",
      description: "Ensure you have the right resources, competent people, proper infrastructure, and comprehensive documentation for a successful security program."
    },
    {
      number: "8",
      title: "Operations in Action",
      description: "Put your ISMS into daily operation—conducting risk assessments, implementing treatments, and managing security incidents proactively."
    },
    {
      number: "9-10",
      title: "Monitoring and Improvement",
      description: "Focus on measuring performance, conducting internal audits, reviewing management effectiveness, and continuously improving your security posture."
    }
  ];

  const industries = [
    {
      icon: Monitor,
      title: "Technology Companies",
      description: "Protect client data and demonstrate your commitment to security in an industry where trust is paramount."
    },
    {
      icon: Banknote,
      title: "Financial Institutions",
      description: "Safeguard sensitive financial information and meet strict regulatory requirements in the banking sector."
    },
    {
      icon: Heart,
      title: "Healthcare Providers",
      description: "Ensure patient records security and comply with healthcare data protection standards like HIPAA."
    },
    {
      icon: Building,
      title: "Government Agencies",
      description: "Secure public information and maintain citizen trust with robust information security practices."
    },
    {
      icon: Globe,
      title: "Multinational Corporations",
      description: "Implement consistent security standards across global operations and diverse regulatory environments."
    },
    {
      icon: ShoppingBag,
      title: "Retail & E-commerce",
      description: "Protect customer data and payment information while building trust in online transactions."
    },
    {
      icon: GraduationCap,
      title: "Educational Institutions",
      description: "Secure student records and research data while maintaining academic integrity."
    },
    {
      icon: Truck,
      title: "Supply Chain & Logistics",
      description: "Ensure secure data exchange between partners and protect sensitive logistics information."
    }
  ];

  const integrations = [
    {
      title: "ISO 9001 Quality Management",
      description: "Align security practices with quality management processes for better operational excellence."
    },
    {
      title: "ISO 14001 Environmental Management",
      description: "Integrate security controls with environmental management systems for sustainable operations."
    },
    {
      title: "ISO 45001 Health & Safety",
      description: "Combine security measures with health and safety protocols for comprehensive risk management."
    },
    {
      title: "Other Management Systems",
      description: "Seamlessly integrate with various standards while maintaining individual system integrity."
    }
  ];

  const nextSteps = [
    {
      icon: CheckCircle,
      title: "Gap Analysis",
      description: "Conduct an informal assessment of your current security practices against ISO 27001:2022 requirements."
    },
    {
      icon: BarChart,
      title: "Implementation Planning",
      description: "Build a realistic timeline based on your organization's specific needs and resources."
    },
    {
      icon: Rocket,
      title: "Begin Implementation",
      description: "Start your journey towards a more resilient and secure organization."
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-zinc-50/50">
      {/* Navigation */}
      <nav className="border-b border-gray-100 bg-white/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link
              to="/blog"
              className="inline-flex items-center text-base font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="mr-2 h-5 w-5" />
              Back to Blog
            </Link>
            <div className="flex space-x-8">
              <Link to="/blog" className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors">
                Blog
              </Link>
              <Link to="/about" className="text-base font-medium text-gray-500 hover:text-gray-900 transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-sky-50/50 to-white py-16 mb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <article className="max-w-4xl mx-auto">
            <header className="text-center mb-16">
              <div className="flex items-center justify-center space-x-8 text-sm text-gray-500 mb-8">
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                  <User className="h-4 w-4 mr-2 text-sky-500" />
                  {post.author}
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                  <Calendar className="h-4 w-4 mr-2 text-sky-500" />
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>
                <div className="flex items-center bg-white px-4 py-2 rounded-full shadow-sm">
                  <Clock className="h-4 w-4 mr-2 text-sky-500" />
                  {post.readingTime}
                </div>
              </div>
              <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 mb-6 font-heading leading-tight">
                  The Complete Guide to
                  <br className="hidden sm:block" />
                  <span className="text-sky-900">ISO 27001:2022</span>
                </h1>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-800 mb-8 font-heading leading-tight">
                  Securing Your Organization's Future
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  {post.description}
                </p>
              </div>
            </header>
          </article>
        </div>
      </div>

      {/* Main Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
        <article className="max-w-4xl mx-auto">

          {/* Introduction Section */}
          <div className="prose prose-lg max-w-none mx-auto mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is ISO 27001:2022?</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Think of ISO 27001:2022 as a comprehensive blueprint for building an Information Security Management System (ISMS) that actually works. This internationally recognized standard creates a robust framework that systematically manages your information security risks.
            </p>
          </div>

          {/* Benefits Grid */}
          <SectionDivider title="Key Benefits" />
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <FeatureCard key={index} {...benefit} />
              ))}
            </div>
          </div>

          {/* ISO Structure Section */}
          <SectionDivider title="Understanding ISO 27001:2022" />
          <div className="mb-16">
            <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 mb-8">
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                The standard is thoughtfully organized into ten key clauses, each building upon the previous one to create a comprehensive security framework.
              </p>
              <div className="grid grid-cols-1 gap-6">
                {clauses.map((clause, index) => (
                  <ClauseCard key={index} {...clause} />
                ))}
              </div>
            </div>
          </div>

          {/* Certification Journey */}
          <SectionDivider title="Your Certification Journey" />
          <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8 mb-16">
            <div className="space-y-8">
              {certificationSteps.map((step, index) => (
                <StepCard key={index} number={index + 1} {...step} />
              ))}
            </div>
          </div>

          {/* Documentation Requirements */}
          <SectionDivider title="Essential Documentation" />
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 mb-16">
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 mb-6">
                ISO 27001:2022 requires specific mandatory documents to ensure your ISMS is properly documented and maintained:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none pl-0 mb-8">
                <li className="flex items-center gap-3 text-gray-600">
                  <FileCheck className="h-5 w-5 text-sky-500 flex-shrink-0" />
                  ISMS Scope Definition
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <FileCheck className="h-5 w-5 text-sky-500 flex-shrink-0" />
                  Information Security Policy
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <FileCheck className="h-5 w-5 text-sky-500 flex-shrink-0" />
                  Risk Assessment Methodology
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <FileCheck className="h-5 w-5 text-sky-500 flex-shrink-0" />
                  Statement of Applicability
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <FileCheck className="h-5 w-5 text-sky-500 flex-shrink-0" />
                  Internal Audit Records
                </li>
                <li className="flex items-center gap-3 text-gray-600">
                  <FileCheck className="h-5 w-5 text-sky-500 flex-shrink-0" />
                  Corrective Actions Log
                </li>
              </ul>
              <div className="bg-sky-50 rounded-xl p-6 border border-sky-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Info className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 leading-relaxed">
                      Note: This is a foundational list of required documentation. Depending on your organization's context, scope, and specific requirements, 
                      additional documentation may be necessary to ensure comprehensive coverage of your ISMS. We recommend consulting with certification experts 
                      to determine the complete documentation requirements for your specific case.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Who Should Pursue Section */}
          <SectionDivider title="Who Should Pursue Certification?" />
          <div className="mb-16">
            <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8">
              <div className="max-w-3xl mx-auto text-center mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Is ISO 27001:2022 Right for Your Organization?
                </h3>
                <p className="text-xl text-gray-600 leading-relaxed">
                  The short answer? Almost everyone. ISO 27001:2022 is industry-agnostic and scalable, 
                  making it suitable for organizations of all sizes and sectors.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {industries.map((industry, index) => (
                  <IndustryCard key={index} {...industry} />
                ))}
              </div>

              <div className="mt-12 bg-sky-50 rounded-xl p-6 border border-sky-100">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Shield className="h-6 w-6 text-sky-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 leading-relaxed">
                      No matter your industry, ISO 27001:2022 adapts to your specific context and requirements, 
                      providing a flexible framework that grows with your organization.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Capabilities */}
          <SectionDivider title="Integration & Next Steps" />
          <div className="mb-16">
            <div className="bg-gradient-to-br from-sky-50 to-white rounded-2xl p-8">
              {/* Integration Section */}
              <div className="mb-12">
                <div className="max-w-3xl mx-auto text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Seamless Integration with Other Standards
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    One of ISO 27001:2022's greatest strengths is its compatibility with other management system standards, 
                    allowing you to create a unified Integrated Management System (IMS).
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {integrations.map((integration, index) => (
                    <IntegrationCard key={index} {...integration} />
                  ))}
                </div>

                <div className="bg-sky-50 rounded-xl p-6 border border-sky-100">
                  <p className="text-gray-600 leading-relaxed">
                    This integration reduces administrative burden, eliminates duplicate processes, and creates 
                    synergies between different management systems while maintaining their individual integrity.
                  </p>
                </div>
              </div>

              {/* Taking the Next Step */}
              <div className="border-t border-gray-200 pt-12">
                <div className="max-w-3xl mx-auto">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Taking the Next Step
                  </h3>
                  <div className="space-y-8 mb-8">
                    {nextSteps.map((step, index) => (
                      <ActionStep key={index} {...step} />
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-sky-600 to-sky-700 rounded-xl p-8 text-white mt-12">
                    <h4 className="text-xl font-bold mb-4">
                      The Time to Act is Now
                    </h4>
                    <p className="mb-6 leading-relaxed">
                      Remember, ISO 27001:2022 certification isn't just about compliance—it's about building a resilient 
                      organization that can thrive in an increasingly digital and threat-filled world. The question isn't 
                      whether you can afford to pursue certification, but whether you can afford not to.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                      <Link
                        to="/contact"
                        className="inline-flex items-center px-6 py-3 border border-white text-base font-medium rounded-lg text-white hover:bg-white hover:text-sky-600 transition-colors duration-200 w-full sm:w-auto justify-center"
                      >
                        Start Your Journey
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                      <p className="text-sky-100 text-sm">
                        Get in touch to begin your ISO 27001 journey
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
};

export default BlogPostContent; 