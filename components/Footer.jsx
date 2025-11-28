import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="border-t border-gray-200 bg-gray-50 mt-auto">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="text-center md:text-left">
                        <p className="font-medium text-brand-charcoal">JSON Grandpa</p>
                        <p className="text-sm text-gray-500 mt-1">Runs fully in your browser. Your JSON never leaves your machine.</p>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-gray-500">
                        <Link href="/privacy" className="hover:text-brand-orange transition-colors">Privacy</Link>
                        <Link href="/about" className="hover:text-brand-orange transition-colors">About</Link>
                        <a href="https://github.com/jsongrandpa" target="_blank" rel="noopener noreferrer" className="hover:text-brand-orange transition-colors">GitHub</a>
                    </div>
                </div>
                <div className="mt-8 text-center text-xs text-gray-400">
                    © {new Date().getFullYear()} JSON Grandpa. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
