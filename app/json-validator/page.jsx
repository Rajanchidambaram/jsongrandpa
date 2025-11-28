import ValidatorClient from "./ValidatorClient";

export const metadata = {
    title: "JSON Validator — Validate JSON Online (Error lines & pretty print)",
    description: "Use JSON Grandpa's JSON Validator to find syntax errors, pretty-print and minify JSON. Inline Monaco editor, keyboard shortcuts, and local-only processing.",
    alternates: {
        canonical: "https://your-domain.com/json-validator",
    },
    openGraph: {
        title: "JSON Validator — JSON Grandpa",
        description: "Validate, format and compress JSON instantly. Runs fully in your browser — no uploads.",
        images: ["https://your-domain.com/assets/json-validator-og.png"],
    },
};

export default function ValidatorPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "JSON Validator",
        "url": "https://your-domain.com/json-validator",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All",
        "description": "Validate, format and compress JSON instantly. Runs fully in your browser.",
        "browserRequirements": "Requires JavaScript. Works in all modern browsers.",
        "softwareVersion": "1.0",
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        }
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <ValidatorClient />
        </>
    );
}
