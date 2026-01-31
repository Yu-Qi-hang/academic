import React, { useState, useEffect, lazy, Suspense } from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Section from './components/Section';
import Bibtex from './components/Bibtex';
import { paper0 } from './data/paper0';
import { paper1 } from './data/paper1';
import { example } from './data/example';
import { Profile } from './types';

// 👇 仅在开发环境导入生成器
const PaperGenerator = import.meta.env.DEV 
  ? React.lazy(() => import('./components/PaperGenerator'))
  : null;

const PAPERS = [paper0, paper1, example];
// App.tsx
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return isMobile;
};

const USER_PROFILE: Profile = {
  name: "Qihang Yu",
  avatarUrl: "assets/icons/avatar.png", 
  homeUrl: "https://github.com/Yu-Qi-hang"
};

const App: React.FC = () => {
  const [selectedPaperIndex, setSelectedPaperIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  const paper = PAPERS[selectedPaperIndex];
  // 👇 检查是否在生成器页面（通过 URL hash）
  const isGeneratorPage = window.location.hash === '#generator/' || window.location.hash === '#generator';
  if (import.meta.env.DEV && isGeneratorPage) {
    return (
      <React.Suspense fallback={<div className="p-10">Loading Generator...</div>}>
        <PaperGenerator />
        <div className="fixed bottom-4 right-4">
          <a 
            href="#/" 
            className="bg-blue-600 text-white px-4 py-2 rounded shadow hover:bg-blue-700"
          >
            ← Back to Showcase
          </a>
        </div>
      </React.Suspense>
    );
  }
  return (
    <div className="flex flex-col md:flex-row bg-[#fafafa] min-h-screen">
      {/* 桌面端侧边栏 - 仅在非移动端显示 */}
      {!isMobile && (
        <Sidebar 
          papers={PAPERS} 
          selectedPaperIndex={selectedPaperIndex} 
          onSelectPaper={setSelectedPaperIndex} 
          profile={USER_PROFILE}
        />
      )}

      {/* 主内容区 */}
      <main className="flex-1 min-w-0">
        {/* 移动端顶部下拉菜单 - 仅在移动端显示 */}
        {isMobile && (
          <div className="sticky top-0 z-50 bg-white border-b border-gray-200 px-4 py-3 shadow-sm">
            <div className="max-w-5xl mx-auto flex justify-between items-center">
              {/* 左侧：标题 + 返回主页按钮 */}
              <div className="flex items-center gap-4">
                {/* 添加返回主页按钮 */}
                <a 
                  href={USER_PROFILE.homeUrl}
                  className="text-[11px] font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1 transition-colors"
                >
                  <img 
                  src={USER_PROFILE.avatarUrl} 
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow-sm"
                />
                </a>
                <h1 className="text-lg font-bold text-gray-900 uppercase">Academic Showcase</h1>
                </div>
              
              {/* 右侧：菜单按钮 */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg hover:bg-gray-100"
                aria-label="Toggle menu"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                </svg>
              </button>
            </div>

            {/* 下拉菜单内容（保持不变） */}
            {mobileMenuOpen && (
              <div className="mt-2 max-w-5xl mx-auto bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
                {PAPERS.map((paper, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setSelectedPaperIndex(idx);
                      setMobileMenuOpen(false);
                    }}
                    className={`w-full text-left p-4 transition-colors ${
                      selectedPaperIndex === idx
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <div className="text-xs font-bold text-grey-500 uppercase tracking-wider mb-1">
                      {paper.venue?.name}{paper.star && <span> ⭐️</span>}
                    </div>
                    <div className="font-medium line-clamp-2">
                      {paper.title}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 论文内容 - 只渲染一次 */}
        <div className="max-w-5xl mx-auto">
          <article key={selectedPaperIndex} className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <Hero 
              title={paper.title} 
              venue={paper.venue}
              authors={paper.authors} 
              affiliations={paper.affiliations} 
              links={paper.links} 
            />

            <div className="pb-10">
              {paper.sections.map((section) => (
                <div key={section.id} id={section.id}>
                  <Section title={section.title} contents={section.contents} />
                </div>
              ))}
              <Bibtex bibtex={paper.bibtex} />
            </div>

            <footer className="border-t border-gray-100 py-12 px-6 text-center">
              <div className="max-w-4xl mx-auto text-gray-400 text-xs">
                <p>© 2026 Academic Showcase. This website is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">Creative Commons Attribution-ShareAlike 4.0 International License</a>.</p>
                <p>This means you are free to borrow the <a href="https://yu-qi-hang.github.io/academic/">source code of this website</a>, we just ask that you link back to this page in the footer.</p>
              </div>
            </footer>
          </article>
        </div>
      </main>
    </div>
  );
};

export default App;