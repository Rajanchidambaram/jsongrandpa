import FormatterClient from "./FormatterClient";

export const metadata = {
    title: "JSON Formatter — Pretty Print & Minify JSON Online",
    description: "Free online JSON Formatter. Pretty print, minify, and validate JSON instantly in your browser. Private and secure.",
    alternates: {
        canonical: "https://jsongrandpa.vercel.app/json-formatter",
    },
    openGraph: {
        title: "JSON Formatter — JSON Grandpa",
        description: "Format and minify JSON instantly. Runs fully in your browser — no uploads.",
        images: ["https://jsongrandpa.vercel.app/assets/json-validator-og.png"],
    },
};

export default function FormatterPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "JSON Formatter",
        "url": "https://jsongrandpa.vercel.app/json-formatter",
        "applicationCategory": "DeveloperApplication",
        "operatingSystem": "All",
        "description": "Format and minify JSON instantly. Runs fully in your browser.",
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
            <FormatterClient />
        </>
    );
}
