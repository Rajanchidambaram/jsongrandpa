import Link from "next/link";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "url": "https://your-domain.com",
        "name": "JSON Grandpa",
        "description": "JSON Grandpa — fast, private online JSON Validator and Formatter."
      },
      {
        "@type": "WebApplication",
        "name": "JSON Validator",
        "url": "https://your-domain.com/json-validator",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All"
      },
      {
        "@type": "Organization",
        "name": "JSON Grandpa",
        "alternateName": "JSON Validator Grandpa",
        "url": "https://your-domain.com",
        "logo": "https://your-domain.com/logo.png",
        "sameAs": [
          "https://github.com/jsongrandpa",
          "https://twitter.com/jsongrandpa",
          "https://www.linkedin.com/company/jsongrandpa"
        ],
        "description": "JSON Grandpa — fast, private online JSON Validator and Formatter. Validate, format, compress and fix JSON entirely in your browser."
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="bg-white">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-bold text-brand-charcoal mb-6">
              JSON Grandpa — Your JSON’s Favorite Elder
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Fast, private JSON validation and formatting. Paste your JSON, Grandpa checks it — no uploads, no fuss.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/json-validator"
                className="bg-brand-orange text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
              >
                Validate JSON →
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-500 flex items-center justify-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              Runs fully in your browser. Your JSON never leaves your device.
            </p>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 text-brand-orange">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-3">100% Private</h3>
                <p className="text-gray-600">Your data is processed locally using JavaScript. No server uploads, ever.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 text-brand-orange">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-3">Blazing Fast</h3>
                <p className="text-gray-600">Instant validation and formatting. No network latency, works offline.</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6 text-brand-orange">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                </div>
                <h3 className="text-xl font-bold text-brand-charcoal mb-3">Developer Friendly</h3>
                <p className="text-gray-600">Monaco editor (VS Code), keyboard shortcuts, and clear error messages.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Sample Section */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-brand-charcoal mb-8">Simple, Clean, Effective</h2>
            <div className="bg-gray-900 rounded-lg p-6 text-left overflow-hidden shadow-2xl">
              <pre className="text-green-400 font-mono text-sm">
                {`{
  "status": "success",
  "message": "JSON Grandpa approves this JSON",
  "data": {
    "validated": true,
    "privacy": "guaranteed",
    "speed": "instant"
  }
}`}
              </pre>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
