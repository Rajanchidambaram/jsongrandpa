import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="border-b border-gray-200 bg-white">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-3 font-bold text-xl text-brand-charcoal hover:text-brand-orange transition-colors">
                    <Image src="/logo.png" alt="JSON Grandpa Logo" width={40} height={40} className="object-contain" />
                    <span>JSON Grandpa</span>
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
                    <Link href="/json-validator" className="hover:text-brand-orange transition-colors">Validator</Link>
                    <Link href="/json-formatter" className="hover:text-brand-orange transition-colors">Formatter</Link>
                    <Link href="/about" className="hover:text-brand-orange transition-colors">About</Link>
                </nav>
            </div>
        </header>
    );
}
