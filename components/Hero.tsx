import React from 'react';
import { Author, Affiliation, ExternalLink, Venue } from '../types';
import { Icons } from '../constants';

interface HeroProps {
  title: string;
  venue?: Venue;
  authors: Author[];
  affiliations: Affiliation[];
  links: ExternalLink[];
}

const Hero: React.FC<HeroProps> = ({ title, venue, authors, affiliations, links }) => {
  const getHoverStyles = (link: ExternalLink) => {
    const label = link.label.toLowerCase();
    const icon = link.icon.toLowerCase();
    const color = link.color;

    const baseHover = 'hover:-translate-y-1 ';

    if (color === 'blue' || label.includes('paper')) {
      return baseHover + 'hover:shadow-[0_10px_20px_-5px_rgba(59,130,246,0.3)] hover:border-blue-500 border-blue-100 text-blue-700';
    }
    if (color === 'red' || icon.includes('arxiv')) {
      return baseHover + 'hover:shadow-[0_10px_20px_-5px_rgba(239,68,68,0.3)] hover:border-red-500 border-red-100 text-red-700';
    }
    if (color === 'black' || icon.includes('code') || icon.includes('github')) {
      return baseHover + 'hover:shadow-[0_10px_20px_-5px_rgba(0,0,0,0.2)] hover:border-gray-900 border-gray-200 text-gray-900';
    }
    if (color === 'green') {
      return baseHover + 'hover:shadow-[0_10px_20px_-5px_rgba(34,197,94,0.3)] hover:border-green-500 border-green-100 text-green-700';
    }
    if (color === 'purple') {
      return baseHover + 'hover:shadow-[0_10px_20px_-5px_rgba(168,85,247,0.3)] hover:border-purple-500 border-purple-100 text-purple-700';
    }
    if (color === 'orange') {
      return baseHover + 'hover:shadow-[0_10px_20px_-5px_rgba(249,115,22,0.3)] hover:border-orange-500 border-orange-100 text-orange-700';
    }
    
    return baseHover + 'hover:shadow-lg hover:border-gray-400 border-gray-100 text-gray-700';
  };

  return (
    <section className="pt-20 pb-12 px-4 max-w-5xl mx-auto text-center">
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 serif-font leading-tight">
        {title}
      </h1>

      {venue && (
        <div className="mb-8">
          {venue.link ? (
            <a 
              href={venue.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 text-lg md:text-xl font-bold border border-blue-100 hover:bg-blue-100 transition-colors"
            >
              {venue.name}
            </a>
          ) : (
            <span className="inline-block px-4 py-1.5 rounded-full bg-gray-100 text-gray-700 text-lg md:text-xl font-bold border border-gray-200">
              {venue.name}
            </span>
          )}
        </div>
      )}
      
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 mb-8">
        {authors.map((author, idx) => (
          <div key={idx} className="flex items-center text-xl md:text-2xl text-blue-600 hover:text-blue-800 transition-colors font-medium">
            {author.link ? (
              <a href={author.link} target="_blank" rel="noopener noreferrer">
                {author.name}
              </a>
            ) : (
              <span>{author.name}</span>
            )}
            {author.affiliationIndices && author.affiliationIndices.length > 0 && (
              <sup className="text-sm font-bold ml-0.5 text-gray-500 tracking-tighter">
                {author.affiliationIndices.join(',')}
              </sup>
            )}
            {author.isEqualContribution && <span className="text-gray-400 ml-1 font-normal">*</span>}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 mb-12 text-gray-700">
        {affiliations.map((aff, idx) => (
          <div key={idx} className="text-lg md:text-xl flex items-center gap-2 font-medium">
            <sup className="text-sm font-bold text-gray-400">{aff.id}</sup>
            {aff.icon && (
              <img src={aff.icon} alt="" className="w-6 h-6 object-contain" onError={(e) => (e.currentTarget.style.display = 'none')} />
            )}
            {aff.name}
          </div>
        ))}
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {links.map((link, idx) => {
          const Icon = (Icons as any)[link.icon] || Icons.Paper;
          const hoverClass = getHoverStyles(link);
          
          return (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center px-6 py-3 rounded-full bg-white border transition-all duration-300 gap-2 text-sm md:text-base font-semibold shadow-sm ${hoverClass}`}
            >
              {link.customIcon ? (
                <img src={link.customIcon} alt="" className="w-5 h-5 object-contain" />
              ) : (
                <Icon className="w-5 h-5" />
              )}
              {link.label}
            </a>
          );
        })}
      </div>
    </section>
  );
};

export default Hero;