import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Section from './components/Section';
import Bibtex from './components/Bibtex';
import { paper0 } from './data/paper0';
// import { paper1 } from './data/paper1';
import { example } from './data/example';
import { Profile } from './types';

const PAPERS = [paper0,example];

const USER_PROFILE: Profile = {
  name: "Yu Qihang",
  // Demonstrating a local asset path. 
  // You can put your images in an 'assets' folder in the root.
  avatarUrl: "assets/icons/avatar.png", 
  homeUrl: "https://github.com/Yu-Qi-hang"
};

const App: React.FC = () => {
  const [selectedPaperIndex, setSelectedPaperIndex] = useState(0);
  const paper = PAPERS[selectedPaperIndex];

  return (
    <div className="flex bg-[#fafafa]">
      {/* Sidebar - fixed width on desktop */}
      <Sidebar 
        papers={PAPERS} 
        selectedPaperIndex={selectedPaperIndex} 
        onSelectPaper={setSelectedPaperIndex} 
        profile={USER_PROFILE}
      />

      {/* Main Content Area */}
      <main className="flex-1 min-w-0">
        <div className="max-w-5xl mx-auto">
          {/* Paper Content */}
          <article key={selectedPaperIndex} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            {/* Hero Section */}
            <Hero 
              title={paper.title} 
              venue={paper.venue}
              authors={paper.authors} 
              affiliations={paper.affiliations} 
              links={paper.links} 
            />

            {/* Content Sections */}
            <div className="pb-10">
              {paper.sections.map((section) => (
                <div key={section.id} id={section.id}>
                  <Section title={section.title} contents={section.contents} />
                </div>
              ))}

              {/* BibTeX citation */}
              <Bibtex bibtex={paper.bibtex} />
            </div>

            {/* Paper Footer */}
            <footer className="border-t border-gray-100 py-12 px-6 text-center">
              <div className="max-w-4xl mx-auto text-gray-400 text-xs">
                <p>© 2026 Academic Showcase. This website is licensed under a <a rel="license"
                                                href="http://creativecommons.org/licenses/by-sa/4.0/" color="blue">Creative
            Commons Attribution-ShareAlike 4.0 International License</a>.</p>
<p>This means you are free to borrow the <a
              href="https://yu-qi-hang.github.io/academic/">source code of this website</a>, we just ask that you link back to this page in the footer.</p>
              </div>
            </footer>
          </article>
        </div>
      </main>
    </div>
  );
};

export default App;