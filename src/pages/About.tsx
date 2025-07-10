import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Code, Zap } from "lucide-react";

function About() {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Modern Development",
      description:
        "Built with React, TypeScript, and Vite for fast development",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized performance with modern build tools",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Beautiful Design",
      description: "Minimalist UI with Tailwind CSS styling",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-3xl shadow-xl p-8 mb-8 border border-purple-100">
          <div className="flex items-center justify-between mb-6">
            <Link
              to="/"
              className="flex items-center gap-2 text-purple-600 hover:text-purple-800 transition-colors duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
          </div>

          <h1 className="text-4xl font-bold text-slate-800 mb-4 tracking-tight">
            About This Project
          </h1>
          <p className="text-slate-600 text-lg leading-relaxed">
            This is a modern React application showcasing beautiful UI design,
            smooth animations, and efficient routing with React Router.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-purple-50 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-4 text-white">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="bg-white rounded-3xl shadow-xl p-8 border border-purple-100">
          <h2 className="text-2xl font-bold text-slate-800 mb-6 text-center">
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "React",
              "TypeScript",
              "Vite",
              "Tailwind CSS",
              "React Router",
              "Lucide Icons",
              "ESLint",
              "PostCSS",
            ].map((tech) => (
              <div
                key={tech}
                className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 text-center border border-purple-100"
              >
                <span className="text-slate-700 font-medium text-sm">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
