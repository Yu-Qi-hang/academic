
import React, { useState } from 'react';

interface BibtexProps {
  bibtex: string;
}

const Bibtex: React.FC<BibtexProps> = ({ bibtex }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(bibtex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="max-w-4xl mx-auto px-6 mb-20">
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 serif-font text-center">BibTeX</h2>
      <div className="relative group">
        <pre className="bg-gray-50 p-6 rounded-xl overflow-x-auto text-sm md:text-base text-gray-700 font-mono border border-gray-200">
          {bibtex}
        </pre>
        <button
          onClick={handleCopy}
          className="absolute top-4 right-4 px-3 py-1.5 bg-white border border-gray-300 rounded-lg text-xs font-medium text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all opacity-0 group-hover:opacity-100 shadow-sm"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </section>
  );
};

export default Bibtex;
