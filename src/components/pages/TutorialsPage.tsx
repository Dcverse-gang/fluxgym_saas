import React from "react";

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      title: "Getting Started with LoRA Training",
      level: "Beginner",
      duration: "15 min",
      levelColor: "bg-green-500",
      description:
        "Learn the basics of LoRA training and create your first custom AI model.",
      topics: [
        "LoRA fundamentals",
        "Dataset requirements",
        "Basic parameters",
        "First training session",
      ],
    },
    {
      title: "Dataset Preparation & Quality",
      level: "Intermediate",
      duration: "25 min",
      levelColor: "bg-blue-500",
      description:
        "Master the art of preparing high-quality datasets for optimal training results.",
      topics: [
        "Image selection",
        "Captioning techniques",
        "Dataset balancing",
        "Quality assessment",
      ],
    },
    {
      title: "Advanced Training Parameters",
      level: "Advanced",
      duration: "45 min",
      levelColor: "bg-purple-500",
      description:
        "Fine-tune your training parameters for professional-grade AI models.",
      topics: [
        "Learning rates",
        "Batch sizes",
        "Regularization",
        "Advanced techniques",
      ],
    },
    {
      title: "Troubleshooting Common Issues",
      level: "All Levels",
      duration: "20 min",
      levelColor: "bg-red-500",
      description: "Solve common training problems and optimize your workflow.",
      topics: [
        "Error resolution",
        "Performance optimization",
        "Debugging techniques",
        "Best practices",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-slate-50 to-purple-300 bg-clip-text text-transparent">
              Tutorials
            </h1>
          </div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Step-by-step guides to master AI model training with FluxGym
          </p>
        </div>

        {/* Tutorials Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {tutorials.map((tutorial, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur border border-slate-700/50 rounded-2xl p-6 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-900/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-slate-50 mb-2 group-hover:text-purple-300 transition-colors">
                    {tutorial.title}
                  </h3>
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${tutorial.levelColor}`}
                    >
                      {tutorial.level}
                    </span>
                    <span className="text-sm text-slate-400 flex items-center gap-1">
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12,6 12,12 16,14" />
                      </svg>
                      {tutorial.duration}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-slate-300 mb-4 leading-relaxed">
                {tutorial.description}
              </p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-400 mb-2 uppercase tracking-wide">
                  What you'll learn:
                </h4>
                <ul className="space-y-1">
                  {tutorial.topics.map((topic, topicIndex) => (
                    <li
                      key={topicIndex}
                      className="text-sm text-slate-300 flex items-center gap-2"
                    >
                      <span className="text-purple-400">•</span>
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-purple-900/30 transform hover:scale-[1.02]">
                Start Tutorial
              </button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-slate-800/50 to-slate-900/50 backdrop-blur border border-slate-700/30 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-slate-50 mb-4">
              Need More Help?
            </h2>
            <p className="text-slate-300 mb-6 max-w-md mx-auto">
              Join our community for additional resources, tips, and support
              from fellow AI trainers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-orange-900/30">
                Join Community
              </button>
              <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-red-900/30">
                Get Support
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TutorialsPage;
