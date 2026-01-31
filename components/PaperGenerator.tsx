// src/components/PaperGenerator.tsx
import React, { useState } from 'react';
import { PaperData, ContentType, MediaItem } from '../types';
import { Icons } from '../constants'; // <-- 添加这一行
const PaperGenerator: React.FC = () => {
  // ====== 基础信息 ======
// ====== 基础信息 ======
const [id, setId] = useState(''); // <-- 新增这一行
const [title, setTitle] = useState('');
// ... 其他状态
  const [abstract, setAbstract] = useState('');
  const [bibtex, setBibtex] = useState('@article{...}');
  const [venueName, setVenueName] = useState('');
  const [venueLink, setVenueLink] = useState('');
  const [star, setStar] = useState(false);

  // ====== 作者 & 机构 ======
  const [authors, setAuthors] = useState<{ name: string; link: string; affIds: number[]; isEqualContribution: boolean }[]>([
    { name: '', link: '#', affIds: [], isEqualContribution: false }
  ]);
  const [affiliations, setAffiliations] = useState<{ id: number; name: string; icon: string }[]>([
    { id: 1, name: '', icon: '' }
  ]);

  // ====== 外部链接 ======
  const [links, setLinks] = useState<{ label: string; url: string; icon: string; color: string }[]>([
    { label: 'Paper', url: '', icon: 'Paper', color: 'blue' }
  ]);

  // ====== 内容区块 ======
  const [sections, setSections] = useState<any[]>([
    {
      id: 'intro',
      title: '',
      contents: [{ type: ContentType.TEXT, text: '' }]
    }
  ]);

  // ====== 工具函数 ======
  const addAuthor = () => setAuthors([...authors, { name: '', link: '#', affIds: [], isEqualContribution: false }]);
  const removeAuthor = (index: number) => setAuthors(authors.filter((_, i) => i !== index));
  const updateAuthor = (index: number, field: string, value: any) => {
    const newAuthors = [...authors];
    if (field === 'affIds') {
      newAuthors[index].affIds = value.split(',').map((s: string) => parseInt(s.trim())).filter(Boolean);
    } else {
      (newAuthors[index] as any)[field] = value;
    }
    setAuthors(newAuthors);
  };

  const addAffiliation = () => {
    const nextId = Math.max(...affiliations.map(a => a.id), 0) + 1;
    setAffiliations([...affiliations, { id: nextId, name: '', icon: '' }]);
  };
  const removeAffiliation = (index: number) => setAffiliations(affiliations.filter((_, i) => i !== index));

  const addLink = () => setLinks([...links, { label: '', url: '', icon: '', color: 'blue' }]);
  const removeLink = (index: number) => setLinks(links.filter((_, i) => i !== index));

  const addSection = () => {
    setSections([...sections, { id: `section-${Date.now()}`, title: '', contents: [{ type: ContentType.TEXT, text: '' }] }]);
  };
  const removeSection = (index: number) => setSections(sections.filter((_, i) => i !== index));

  const addContentToSection = (sectionIndex: number) => {
    const newSections = [...sections];
    newSections[sectionIndex].contents.push({ type: ContentType.TEXT, text: '' });
    setSections(newSections);
  };

  const updateContent = (sectionIndex: number, contentIndex: number, field: string, value: any) => {
    const newSections = [...sections];
    if (field === 'mediaItems') {
      // Parse mediaItems from string like "IMAGE|url1,caption1;VIDEO|url2"
      const items: MediaItem[] = [];
      value.split(';').forEach((itemStr: string) => {
        const [type, rest] = itemStr.split('|');
        if (!type || !rest) return;
        const [src, caption = ''] = rest.split(',');
        if (type === 'IMAGE' || type === 'VIDEO') {
          items.push({ type, src, caption: caption || undefined });
        }
      });
      newSections[sectionIndex].contents[contentIndex].mediaItems = items;
    } else if (field === 'gridConfig') {
      newSections[sectionIndex].contents[contentIndex].gridConfig = value.split(',').map((n: string) => parseInt(n.trim())).filter(Boolean);
    } else {
      (newSections[sectionIndex].contents[contentIndex] as any)[field] = value;
    }
    setSections(newSections);
  };

  // ====== 生成 TS 字符串 ======
  const generateTS = (): string => {
    const paperData: PaperData = {
      title,
      abstract,
      bibtex,
      star,
      authors: authors.map(a => ({
        name: a.name,
        link: a.link || '#',
        affiliationIndices: a.affIds.length ? a.affIds : undefined,
        isEqualContribution: a.isEqualContribution || undefined
      })).filter(a => a.name),
      affiliations: affiliations.map(a => ({
        id: a.id,
        name: a.name,
        icon: a.icon || undefined
      })).filter(a => a.name),
      links: links.map(l => ({
        label: l.label,
        url: l.url,
        icon: l.icon,
        color: l.color as any
      })).filter(l => l.label && l.url),
      sections: sections.map(sec => ({
        id: sec.id,
        title: sec.title || undefined,
        contents: sec.contents.map((c: any) => {
          const base = {
            type: c.type,
            title: c.title || undefined,
            text: c.text || undefined,
            src: c.src || "#",
            srcSecondary: c.srcSecondary || "#",
            caption: c.caption || undefined,
            width: c.width || undefined,
            gridConfig: c.gridConfig || undefined,
            mediaItems: c.mediaItems || undefined
          };
          // 移除 undefined 字段
          Object.keys(base).forEach(key => (base as any)[key] === undefined && delete (base as any)[key]);
          return base;
        })
      })),
      venue: venueName ? { name: venueName, link: venueLink || undefined } : undefined
    };

    const safeId = id || title.replace(/\s+/g, '_').toLowerCase().replace(/[^a-z0-9_]/g, '');

    const tsString = JSON.stringify(paperData, null, 2)
      .replace(/"([^"]+)":/g, '$1:')
      .replace(/"true"/g, 'true')
      .replace(/"false"/g, 'false')
      .replace(/"ContentType\.([A-Z_]+)"/g, 'ContentType.$1')
      .replace(/"undefined"/g, 'undefined');
  
    return `import { PaperData, ContentType } from '../types';
  
  export const ${safeId}: PaperData = ${tsString};`;
  };

  const downloadTS = () => {
    const safeId = id || title.replace(/\s+/g, '_').toLowerCase().replace(/[^a-z0-9_]/g, '');
    const tsContent = generateTS();
    const blob = new Blob([tsContent], { type: 'text/typescript' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${safeId}.ts`; // <-- 使用 safeId
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };
  const safeId = id || title.replace(/\s+/g, '_').toLowerCase().replace(/[^a-z0-9_]/g, '');
  // ====== 渲染 ======
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow rounded">
      <h1 className="text-2xl font-bold mb-6">Paper Data Generator</h1>

      {/* 基础信息 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Basic Info</h2>
        <input className="border p-2 w-full mb-2" placeholder="ID (e.g., my_paper_2024)" value={id} onChange={e => setId(e.target.value)} />
        <input   className="border p-2 w-full mb-2"   placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        <textarea className="border p-2 w-full mb-2 h-24" placeholder="Abstract" value={abstract} onChange={e => setAbstract(e.target.value)} />
        <textarea className="border p-2 w-full mb-2 h-32 font-mono" placeholder="BibTeX" value={bibtex} onChange={e => setBibtex(e.target.value)} />
        <div className="flex gap-2 mb-2">
          <input className="border p-2 flex-1" placeholder="Venue Name" value={venueName} onChange={e => setVenueName(e.target.value)} />
          <input className="border p-2 flex-1" placeholder="Venue Link" value={venueLink} onChange={e => setVenueLink(e.target.value)} />
        </div>
        <label><input type="checkbox" checked={star} onChange={e => setStar(e.target.checked)} /> Star this paper</label>
      </div>

      {/* 作者 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Authors</h2>
        {authors.map((author, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <input className="border p-2 flex-1" placeholder="Name" value={author.name} onChange={e => updateAuthor(i, 'name', e.target.value)} />
            <input className="border p-2 w-32" placeholder="Link" value={author.link} onChange={e => updateAuthor(i, 'link', e.target.value)} />
            <input className="border p-2 w-24" placeholder="Aff IDs (1,2)" value={author.affIds.join(',')} onChange={e => updateAuthor(i, 'affIds', e.target.value)} />
            <label><input type="checkbox" checked={author.isEqualContribution} onChange={e => updateAuthor(i, 'isEqualContribution', e.target.checked)} /> Equal</label>
            <button type="button" onClick={() => removeAuthor(i)} className="text-red-500">Remove</button>
          </div>
        ))}
        <button type="button" onClick={addAuthor} className="bg-blue-500 text-white px-3 py-1 rounded">+ Add Author</button>
      </div>

      {/* 机构 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Affiliations</h2>
        {affiliations.map((aff, i) => (
          <div key={aff.id} className="flex gap-2 mb-2">
            <span className="w-8">{aff.id}</span>
            <input className="border p-2 flex-1" placeholder="Name" value={aff.name} onChange={e => {
              const newAffs = [...affiliations];
              newAffs[i].name = e.target.value;
              setAffiliations(newAffs);
            }} />
            <input className="border p-2 flex-1" placeholder="Icon URL" value={aff.icon} onChange={e => {
              const newAffs = [...affiliations];
              newAffs[i].icon = e.target.value;
              setAffiliations(newAffs);
            }} />
            <button type="button" onClick={() => removeAffiliation(i)} className="text-red-500">Remove</button>
          </div>
        ))}
        <button type="button" onClick={addAffiliation} className="bg-green-500 text-white px-3 py-1 rounded">+ Add Affiliation</button>
      </div>

      {/* 外部链接 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">External Links</h2>
        {links.map((link, i) => (
          <div key={i} className="flex gap-2 mb-2">
            <input className="border p-2 w-24" placeholder="Label" value={link.label} onChange={e => {
              const newLinks = [...links];
              newLinks[i].label = e.target.value;
              setLinks(newLinks);
            }} />
            <input className="border p-2 flex-1" placeholder="URL" value={link.url} onChange={e => {
              const newLinks = [...links];
              newLinks[i].url = e.target.value;
              setLinks(newLinks);
            }} />
            {/* Icon 下拉选择框 */}
            <select 
            className="border p-2 w-24" 
            value={link.icon} 
            onChange={e => {
                const newLinks = [...links];
                newLinks[i].icon = e.target.value;
                setLinks(newLinks);
            }}
            >
            <option value="">-- Select --</option>
            {Object.keys(Icons).map(iconName => (
                <option key={iconName} value={iconName}>{iconName}</option>
            ))}
            </select>
            <select className="border p-2 w-24" value={link.color} onChange={e => {
              const newLinks = [...links];
              newLinks[i].color = e.target.value;
              setLinks(newLinks);
            }}>
              {['blue','black','red','green','purple','orange'].map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <button type="button" onClick={() => removeLink(i)} className="text-red-500">Remove</button>
          </div>
        ))}
        <button type="button" onClick={addLink} className="bg-purple-500 text-white px-3 py-1 rounded">+ Add Link</button>
      </div>

      {/* 内容区块 */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Sections</h2>
        {sections.map((section, secIdx) => (
          <div key={secIdx} className="border p-4 mb-4">
            <div className="flex gap-2 mb-2">
              <input className="border p-2 w-32" placeholder="Section ID" value={section.id} onChange={e => {
                const newSecs = [...sections];
                newSecs[secIdx].id = e.target.value;
                setSections(newSecs);
              }} />
              <input className="border p-2 flex-1" placeholder="Section Title (optional)" value={section.title} onChange={e => {
                const newSecs = [...sections];
                newSecs[secIdx].title = e.target.value;
                setSections(newSecs);
              }} />
              <button type="button" onClick={() => removeSection(secIdx)} className="text-red-500">Remove Section</button>
            </div>
            {section.contents.map((content: any, contIdx: number) => (
              <div key={contIdx} className="border-l pl-4 mb-2">
                <select className="border p-2 mb-2" value={content.type} onChange={e => {
                  const newSecs = [...sections];
                  newSecs[secIdx].contents[contIdx].type = e.target.value;
                  setSections(newSecs);
                }}>
                  {Object.values(ContentType).map(t => <option key={t} value={t}>{t}</option>)}
                </select>
                {content.type === ContentType.TEXT && (
                  <textarea className="border p-2 w-full mb-2" placeholder="Text" value={content.text || ''} onChange={e => updateContent(secIdx, contIdx, 'text', e.target.value)} />
                )}
                {(content.type === ContentType.IMAGE || content.type === ContentType.PDF || content.type === ContentType.VIDEO || content.type === ContentType.IMAGE_COMPARISON) && (
                  <>
                    <input className="border p-2 w-full mb-2" placeholder="src" value={content.src || ''} onChange={e => updateContent(secIdx, contIdx, 'src', e.target.value)} />
                    {content.type === ContentType.IMAGE_COMPARISON && (
                      <input className="border p-2 w-full mb-2" placeholder="srcSecondary" value={content.srcSecondary || ''} onChange={e => updateContent(secIdx, contIdx, 'srcSecondary', e.target.value)} />
                    )}
                  </>
                )}
                {(content.type === ContentType.CAROUSEL || content.type === ContentType.IMAGE_GRID) && (
                  <textarea
                    className="border p-2 w-full mb-2 font-mono"
                    placeholder={`MediaItems (format: TYPE|url,caption; e.g.\nIMAGE|https://...,Fig1\nVIDEO|https://...,Demo` }
                    value={
                      (content.mediaItems || []).map((m: MediaItem) => `${m.type}|${m.src},${m.caption || ''}`).join(';')
                    }
                    onChange={e => updateContent(secIdx, contIdx, 'mediaItems', e.target.value)}
                  />
                )}
                {content.type === ContentType.IMAGE_GRID && (
                  <input
                    className="border p-2 w-full mb-2"
                    placeholder="gridConfig (e.g., 2,3)"
                    value={(content.gridConfig || []).join(',')}
                    onChange={e => updateContent(secIdx, contIdx, 'gridConfig', e.target.value)}
                  />
                )}
                <input className="border p-2 w-full mb-2" placeholder="Caption" value={content.caption || ''} onChange={e => updateContent(secIdx, contIdx, 'caption', e.target.value)} />
                <input className="border p-2 w-full mb-2" placeholder="Width (e.g., full, 75%)" value={content.width || ''} onChange={e => updateContent(secIdx, contIdx, 'width', e.target.value)} />
                <button type="button" onClick={() => {
                  const newSecs = [...sections];
                  newSecs[secIdx].contents.splice(contIdx, 1);
                  setSections(newSecs);
                }} className="text-red-500 text-sm">Remove Content</button>
              </div>
            ))}
            <button type="button" onClick={() => addContentToSection(secIdx)} className="bg-gray-300 px-2 py-1 rounded text-sm">+ Add Content Block</button>
          </div>
        ))}
        <button type="button" onClick={addSection} className="bg-indigo-500 text-white px-3 py-1 rounded">+ Add Section</button>
      </div>

      {/* 生成按钮 */}
      <button
        onClick={downloadTS}
        disabled={!title}
        className={`px-4 py-2 rounded ${title ? 'bg-green-600 text-white' : 'bg-gray-400 text-gray-200 cursor-not-allowed'}`}
      >
        Download {safeId ? safeId.replace(/\s+/g, '_').toLowerCase() : 'paper'}.ts
      </button>
    </div>
  );
};

export default PaperGenerator;