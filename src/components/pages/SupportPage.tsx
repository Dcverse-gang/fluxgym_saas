const SupportPage = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-slate-200 mb-2">Support</h1>
        <p className="text-slate-400">Get help and contact our support team</p>
      </div>

      <div className="grid gap-6">
        {/* Contact Support */}
        <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-200">Contact Support</h3>
          </div>
          <p className="text-slate-400 mb-4">Get help from our support team</p>
          <div className="space-y-3 mb-4">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span>📧</span>
              <span>support@fluxgym.ai</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <span>⏰</span>
              <span>24/7 response within 2 hours</span>
            </div>
          </div>
          <button className="btn btn-secondary">Send Message</button>
        </div>

        {/* Live Chat */}
        <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-200">Live Chat</h3>
          </div>
          <p className="text-slate-400 mb-4">Chat with our support team in real-time</p>
          <div className="flex items-center gap-2 text-sm text-green-400 mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span>Online now</span>
          </div>
          <button className="btn btn-secondary">Start Chat</button>
        </div>

        {/* Knowledge Base */}
        <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-200">Knowledge Base</h3>
          </div>
          <p className="text-slate-400 mb-4">Browse our comprehensive help articles</p>
          <div className="flex items-center gap-4 text-sm text-slate-500 mb-4">
            <span>📚 200+ articles</span>
            <span>🔍 Searchable</span>
          </div>
          <button className="btn btn-secondary">Browse Articles</button>
        </div>

        {/* System Status */}
        <div className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center">
              <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-200">System Status</h3>
          </div>
          <p className="text-slate-400 mb-4">Check service availability and maintenance updates</p>
          <div className="flex items-center gap-2 text-sm text-green-400 mb-4">
            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            <span>All systems operational</span>
          </div>
          <button className="btn btn-secondary">View Status</button>
        </div>
      </div>
    </div>
  );
};

export default SupportPage;
