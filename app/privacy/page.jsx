export const metadata = {
    title: "Privacy Policy — JSON Grandpa",
    description: "JSON Grandpa's privacy policy: We don't collect your data. Everything runs locally in your browser.",
};

export default function PrivacyPage() {
    return (
        <div className="container mx-auto px-4 py-16 max-w-3xl">
            <h1 className="text-4xl font-bold text-brand-charcoal mb-8">Privacy Policy</h1>

            <div className="prose prose-lg text-gray-600">
                <p className="text-xl font-medium mb-8">
                    TL;DR: We do not collect, store, or transmit your JSON data. It never leaves your browser.
                </p>

                <h2 className="text-2xl font-bold text-brand-charcoal mt-8 mb-4">Data Processing</h2>
                <p className="mb-6">
                    JSON Grandpa operates as a client-side application. All validation, formatting, and manipulation of JSON data is performed locally on your device using JavaScript. Your input data is NOT sent to any server, including ours.
                </p>

                <h2 className="text-2xl font-bold text-brand-charcoal mt-8 mb-4">Analytics</h2>
                <p className="mb-6">
                    We do not use any third-party analytics services that track your content. We may use basic, privacy-preserving access logs for infrastructure maintenance (provided by Vercel), but these do not contain any payload data.
                </p>

                <h2 className="text-2xl font-bold text-brand-charcoal mt-8 mb-4">Local Storage</h2>
                <p className="mb-6">
                    We do not use cookies or local storage to persist your data across sessions. Once you close the tab, your data is gone from the application memory.
                </p>

                <p className="mt-12 text-sm text-gray-500">
                    Last updated: {new Date().toLocaleDateString()}
                </p>
            </div>
        </div>
    );
}
