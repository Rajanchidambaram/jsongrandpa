"use client";
import { useState, useEffect } from "react";
import JsonEditor from "../../components/JsonEditor";

export default function FormatterClient() {
    const [text, setText] = useState('{\n  "name": "JSON Grandpa",\n  "status": "ready to format"\n}');
    const [status, setStatus] = useState({ type: 'idle', message: 'Ready to format' });

    function validate() {
        try {
            JSON.parse(text);
            setStatus({ type: 'success', message: 'Valid JSON ✔️' });
        } catch (err) {
            setStatus({ type: 'error', message: `Invalid JSON: ${err.message}` });
        }
    }

    function formatJSON() {
        try {
            const parsed = JSON.parse(text);
            setText(JSON.stringify(parsed, null, 2));
            setStatus({ type: 'success', message: 'Formatted successfully' });
        } catch (err) {
            setStatus({ type: 'error', message: 'Cannot format: Invalid JSON' });
        }
    }

    function compressJSON() {
        try {
            const parsed = JSON.parse(text);
            setText(JSON.stringify(parsed));
            setStatus({ type: 'success', message: 'Compressed successfully' });
        } catch (err) {
            setStatus({ type: 'error', message: 'Cannot compress: Invalid JSON' });
        }
    }

    function clearJSON() {
        setText('');
        setStatus({ type: 'idle', message: 'Cleared' });
    }

    useEffect(() => {
        const handleKeyDown = (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
                e.preventDefault();
                validate();
            }
            if ((e.ctrlKey || e.metaKey) && e.shiftKey && (e.key === 'f' || e.key === 'F')) {
                e.preventDefault();
                formatJSON();
            }
            if ((e.ctrlKey || e.metaKey) && (e.key === 'm' || e.key === 'M')) {
                e.preventDefault();
                compressJSON();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [text]);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
                <h1 className="text-3xl font-bold text-brand-charcoal">JSON Formatter</h1>
                <div className="flex flex-wrap gap-2">
                    <button onClick={formatJSON} className="bg-brand-orange text-white px-4 py-2 rounded font-medium hover:bg-orange-600 transition-colors shadow-sm" title="Ctrl/Cmd + Shift + F">
                        Format
                    </button>
                    <button onClick={compressJSON} className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded font-medium hover:bg-gray-50 transition-colors shadow-sm" title="Ctrl/Cmd + M">
                        Minify
                    </button>
                    <button onClick={validate} className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded font-medium hover:bg-gray-50 transition-colors shadow-sm" title="Ctrl/Cmd + Enter">
                        Validate
                    </button>
                    <button onClick={clearJSON} className="text-red-500 hover:text-red-700 px-4 py-2 font-medium transition-colors">
                        Clear
                    </button>
                </div>
            </div>

            <div className={`mb-4 p-3 rounded ${status.type === 'error' ? 'bg-red-100 text-red-800 border border-red-200' :
                    status.type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' :
                        'bg-gray-100 text-gray-600'
                }`}>
                {status.message}
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm bg-white">
                <JsonEditor value={text} setValue={setText} height="70vh" />
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-8">
                <div>
                    <h2 className="text-xl font-bold text-brand-charcoal mb-4">How to use</h2>
                    <ol className="list-decimal list-inside space-y-2 text-gray-600">
                        <li>Paste your JSON into the editor above.</li>
                        <li>Click <strong>Format</strong> to pretty-print your JSON.</li>
                        <li>Use <strong>Minify</strong> to compress it for production.</li>
                    </ol>
                </div>
                <div>
                    <h2 className="text-xl font-bold text-brand-charcoal mb-4">Keyboard Shortcuts</h2>
                    <ul className="space-y-2 text-gray-600">
                        <li><kbd className="bg-gray-100 px-2 py-1 rounded text-sm border border-gray-300">Ctrl/Cmd</kbd> + <kbd className="bg-gray-100 px-2 py-1 rounded text-sm border border-gray-300">Shift</kbd> + <kbd className="bg-gray-100 px-2 py-1 rounded text-sm border border-gray-300">F</kbd> : Format</li>
                        <li><kbd className="bg-gray-100 px-2 py-1 rounded text-sm border border-gray-300">Ctrl/Cmd</kbd> + <kbd className="bg-gray-100 px-2 py-1 rounded text-sm border border-gray-300">M</kbd> : Minify</li>
                        <li><kbd className="bg-gray-100 px-2 py-1 rounded text-sm border border-gray-300">Ctrl/Cmd</kbd> + <kbd className="bg-gray-100 px-2 py-1 rounded text-sm border border-gray-300">Enter</kbd> : Validate</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
