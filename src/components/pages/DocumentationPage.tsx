const DocumentationPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-200 mb-2">Documentation</h1>
        <p className="text-slate-400">API guides, references, and technical documentation</p>
      </div>

      <div className="grid gap-6">
        {/* API Reference */}
        <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-200">API Reference</h3>
          </div>
          <p className="text-slate-400 mb-4">Complete API documentation for FluxGym endpoints</p>
          <button className="btn btn-secondary">View API Docs</button>
        </div>

        {/* SDK Guides */}
        <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-200">SDK Guides</h3>
          </div>
          <p className="text-slate-400 mb-4">Integration guides for Python, JavaScript, and REST APIs</p>
          <button className="btn btn-secondary">Browse SDKs</button>
        </div>

        {/* Best Practices */}
        <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-200">Best Practices</h3>
          </div>
          <p className="text-slate-400 mb-4">Tips and guidelines for optimal model training</p>
          <button className="btn btn-secondary">Read Guide</button>
        </div>
      </div>
    </div>
  );
};

export default DocumentationPage;
