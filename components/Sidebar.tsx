
import React from 'react';
import { PaperData, Profile } from '../types';

interface SidebarProps {
  papers: PaperData[];
  selectedPaperIndex: number;
  onSelectPaper: (index: number) => void;
  profile?: Profile;
}

const Sidebar: React.FC<SidebarProps> = ({ papers, selectedPaperIndex, onSelectPaper, profile }) => {
  return (
    <div className="w-80 h-screen sticky top-0 bg-white border-r border-gray-100 flex flex-col overflow-hidden">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto p-6">
        <div className="mb-10">
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">Academic Showcase</h2>
          <div className="h-1 w-10 bg-blue-600 rounded-full"></div>
        </div>
        
        <div className="space-y-4">
          <h3 className="text-sm font-semibold text-gray-900 mb-4 px-2">Publications</h3>
          {papers.map((paper, idx) => (
            <button
              key={idx}
              onClick={() => onSelectPaper(idx)}
              className={`w-full text-left p-4 rounded-xl transition-all duration-200 group relative ${
                selectedPaperIndex === idx 
                  ? 'bg-blue-50 text-blue-700 shadow-sm ring-1 ring-blue-100' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              {selectedPaperIndex === idx && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-600 rounded-r-full"></div>
              )}
              
              {paper.venue && (
                <div className={`text-[10px] font-bold uppercase tracking-wider mb-1 ${
                  selectedPaperIndex === idx ? 'text-blue-500' : 'text-gray-400'
                }`}>
                  {paper.venue.name}
                </div>
              )}

              <div className="text-sm font-bold leading-snug line-clamp-2 serif-font">
                {paper.title}
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Profile Footer */}
      {profile && (
        <div className="p-6 border-t border-gray-100 bg-gray-50/50">
          <div className="flex items-center gap-3">
            <img 
              src={profile.avatarUrl} 
              alt={profile.name} 
              className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
            />
            <div className="flex flex-col">
              <span className="text-sm font-bold text-gray-900 serif-font line-clamp-1">{profile.name}</span>
              <a 
                href={profile.homeUrl} 
                className="text-[11px] font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
              >
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </a>
            </div>
          </div>
          <div className="mt-4 text-[10px] text-gray-400 font-medium">
            Last updated: Feb 2025
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
