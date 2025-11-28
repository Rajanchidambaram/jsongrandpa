export const metadata = {
    title: "About JSON Grandpa — Private JSON Tools",
    description: "Learn about JSON Grandpa, the privacy-first JSON validator and formatter that runs entirely in your browser.",
};

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-3xl">
            <h1 className="text-4xl font-bold text-brand-charcoal mb-8">About JSON Grandpa</h1>

            <div className="prose prose-lg text-gray-600">
                <p className="mb-6">
                    JSON Grandpa was built with a simple mission: to provide a fast, reliable, and <strong>completely private</strong> way to validate and format JSON data.
                </p>

                <h2 className="text-2xl font-bold text-brand-charcoal mt-8 mb-4">Why "Grandpa"?</h2>
                <p className="mb-6">
                    Because like a wise elder, it spots your mistakes instantly but doesn't gossip about them. It's reliable, old-school in its principles (privacy first), but modern in its execution.
                </p>

                <h2 className="text-2xl font-bold text-brand-charcoal mt-8 mb-4">How it works</h2>
                <p className="mb-6">
                    Most online validators send your data to a backend server to process it. This introduces latency and, more importantly, privacy risks. You never know if that server is logging your sensitive API keys or customer data.
                </p>
                <p className="mb-6">
                    <strong>JSON Grandpa is different.</strong> It runs 100% in your web browser using JavaScript. When you paste your JSON, it never leaves your device. The validation, formatting, and minification all happen locally on your machine.
                </p>

                <h2 className="text-2xl font-bold text-brand-charcoal mt-8 mb-4">Tech Stack</h2>
                <ul className="list-disc pl-6 mb-6 space-y-2">
                    <li>Next.js for the framework</li>
                    <li>Monaco Editor (the engine behind VS Code) for the editing experience</li>
                    <li>Tailwind CSS for styling</li>
                    <li>Vercel for hosting</li>
                </ul>
            </div>
        </div>
    );
}
