import React, { useState } from 'react';
import { ContentType, SectionContent, MediaItem } from '../types';
import ComparisonSlider from './ComparisonSlider';
import Lightbox from './Lightbox';

interface SectionProps {
  title?: string;
  contents: SectionContent[];
}

interface MediaDisplayProps {
  item: MediaItem | string;
  className?: string;
  onImageClick?: (src: string, alt?: string) => void;
}

const MediaDisplay: React.FC<MediaDisplayProps> = ({ item, className, onImageClick }) => {
  const isString = typeof item === 'string';
  const type = isString ? 'IMAGE' : item.type;
  const src = isString ? item : item.src;

  const getEmbedUrl = (src: string): string | null => {
    // YouTube
    if (src.includes('youtube.com') || src.includes('youtu.be')) {
      const regExp = /^.*(?:youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
      const match = src.match(regExp);
      const id = match?.[1];
      return id && id.length === 11 ? `https://www.youtube.com/embed/${id}` : null;
    }

    // Bilibili
    if (src.includes('bilibili.com')) {
      const match = src.match(/\/video\/(BV\w+|av\d+)(?:\/?\??p=(\d+))?/i);
      if (match) {
        const id = match[1];
        const p = match[2] || '1';
        return `https://player.bilibili.com/player.html?bvid=${id}&p=${p}&autoplay=0`;
      }
      if (src.includes('player.bilibili.com')) return src;
    }

    return null;
  };

  if (type === 'VIDEO') {
    const embedUrl = getEmbedUrl(src);
    if (embedUrl) {
      return (
        <div className={`w-full ${className}`}>
          <iframe
            className="w-full aspect-video"
            src={embedUrl}
            title="Embedded video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      );
    }

    // Local video
    return (
      <video src={src} controls className={`w-full h-auto ${className}`} />
    );
  }

  // Image
  return (
    <img
      src={src}
      alt=""
      className={`w-full h-auto max-w-full ${className}`}
      onClick={() => onImageClick?.(src)}
    />
  );
};

interface CarouselProps {
  items: MediaItem[];
  onImageClick?: (src: string, alt?: string) => void;
}

const Carousel: React.FC<CarouselProps> = ({ items, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  return (
    <div className="relative group w-full rounded-2xl overflow-hidden shadow-2xl bg-gray-100 mb-10">
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {items.map((item, idx) => (
          <div key={idx} className="min-w-full h-full relative">
            <MediaDisplay
              item={item}
              onImageClick={(src) => onImageClick?.(src, item.caption)}
            />
            {item.caption && (
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                <p className="text-sm font-medium">{item.caption}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {items.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100 z-10"
          >
            ←
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100 z-10"
          >
            →
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentIndex === idx ? 'bg-white w-6' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const MediaWrapper: React.FC<{ width?: string; children: React.ReactNode }> = ({
  width,
  children,
}) => {
  const getWidthStyle = () => {
    if (!width) return 'w-full';
    switch (width) {
      case 'small':
        return 'w-1/2 mx-auto';
      case 'medium':
        return 'w-3/4 mx-auto';
      case 'large':
        return 'w-[90%] mx-auto';
      case 'full':
        return 'w-full';
      default:
        return `w-[${width}] mx-auto`;
    }
  };

  const customStyle = width && width.includes('%') ? { width } : {};
  const className = !width?.includes('%') ? getWidthStyle() : 'mx-auto';

  return (
    <div className={`mb-8 ${className}`} style={customStyle}>
      {children}
    </div>
  );
};

const Section: React.FC<SectionProps> = ({ title, contents }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState('');
  const [lightboxAlt, setLightboxAlt] = useState('');

  const openLightbox = (src: string, alt: string = '') => {
    setLightboxSrc(src);
    setLightboxAlt(alt);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const ContentRenderer: React.FC<{ content: SectionContent }> = ({ content }) => {
    switch (content.type) {
      case ContentType.TEXT:
        return (
          <p className="text-gray-700 leading-relaxed text-lg mb-6 whitespace-pre-line text-justify">
            {content.text}
          </p>
        );

      case ContentType.IMAGE:
        return (
          <MediaWrapper width={content.width}>
            <div className="group">
              <MediaDisplay
                item={content.src}
                onImageClick={(src) => openLightbox(src, content.title || '')}
              />
              {content.caption && (
                <p className="mt-4 text-center text-sm text-gray-500 font-medium italic">
                  {content.caption}
                </p>
              )}
            </div>
          </MediaWrapper>
        );

      case ContentType.VIDEO:
        return (
          <MediaWrapper width={content.width}>
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-xl bg-black">
              {content.src?.includes('youtube.com') || content.src?.includes('youtu.be') ? (
                <iframe
                  className="w-full h-full"
                  src={content.src.replace('watch?v=', 'embed/')}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video src={content.src} controls className="w-full h-full object-cover" />
              )}
            </div>
            {content.caption && (
              <p className="mt-4 text-center text-sm text-gray-500">{content.caption}</p>
            )}
          </MediaWrapper>
        );

      case ContentType.PDF:
        return (
          <MediaWrapper width={content.width}>
            <div className="h-[600px] w-full rounded-xl overflow-hidden border border-gray-200 shadow-md">
              <iframe src={content.src} className="w-full h-full" title="PDF Viewer" />
            </div>
          </MediaWrapper>
        );

      case ContentType.IMAGE_COMPARISON:
        return (
          <MediaWrapper width={content.width}>
            <ComparisonSlider before={content.src || ''} after={content.srcSecondary || ''} />
            {content.caption && (
              <p className="mt-4 text-center text-sm text-gray-500 italic">{content.caption}</p>
            )}
          </MediaWrapper>
        );

      case ContentType.IMAGE_GRID: {
        const rawItems = content.mediaItems
          ? content.mediaItems
          : content.items?.map((src) => {
              const isVideo =
                src.includes('youtube.com') ||
                src.includes('youtu.be') ||
                src.includes('vimeo.com') ||
                src.includes('bilibili.com') ||
                src.includes('.mp4') ||
                src.includes('.webm');

              return {
                type: isVideo ? 'VIDEO' : 'IMAGE',
                src,
              } as MediaItem;
            }) || [];

        const config = content.gridConfig || [3];
        const rows: { items: (MediaItem | string)[]; cols: number }[] = [];
        let itemIdx = 0;
        let configIdx = 0;

        while (itemIdx < rawItems.length) {
          const cols = config[configIdx] || config[config.length - 1] || 1;
          const itemsInRow = rawItems.slice(itemIdx, itemIdx + cols);
          rows.push({ items: itemsInRow, cols });
          itemIdx += cols;
          if (configIdx < config.length - 1) configIdx++;
        }

        return (
          <MediaWrapper width={content.width}>
            <div className="flex flex-col gap-6">
              {rows.map((row, rIdx) => (
                <div
                  key={rIdx}
                  className="md:grid gap-6 hidden"
                  style={{ gridTemplateColumns: `repeat(${row.cols}, minmax(0, 1fr))` }}
                >
                  {row.items.map((item, idx) => {
                    const hasCaption = typeof item !== 'string' && item.caption;
                    return (
                      <div
                        key={idx}
                        className={`group rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col ${
                          hasCaption ? 'bg-white' : ''
                        }`}
                      >
                        <div className="w-full">
                          <MediaDisplay
                            item={item}
                            onImageClick={(src) => {
                              const alt = typeof item === 'string' ? '' : item.caption || '';
                              openLightbox(src, alt);
                            }}
                          />
                        </div>
                        {hasCaption && (
                          <div className="p-3 bg-white border-t border-gray-50">
                            <p className="text-xs text-gray-500 text-center font-medium italic">
                              {(item as MediaItem).caption}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
              {/* Mobile View */}
              <div className="md:hidden flex flex-col gap-4">
                {rawItems.map((item, idx) => {
                  const hasCaption = typeof item !== 'string' && item.caption;
                  return (
                    <div
                      key={idx}
                      className={`group rounded-xl overflow-hidden shadow-md border border-gray-100 flex flex-col ${
                        hasCaption ? 'bg-white' : ''
                      }`}
                    >
                      <div className="w-full">
                        <MediaDisplay
                          item={item}
                          onImageClick={(src) => {
                            const alt = typeof item === 'string' ? '' : item.caption || '';
                            openLightbox(src, alt);
                          }}
                        />
                      </div>
                      {hasCaption && (
                        <div className="p-3 bg-white border-t border-gray-50">
                          <p className="text-xs text-gray-500 text-center font-medium italic">
                            {(item as MediaItem).caption}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
            {content.caption && (
              <p className="mt-6 text-center text-sm text-gray-500 italic">{content.caption}</p>
            )}
          </MediaWrapper>
        );
      }

      case ContentType.CAROUSEL:
        return (
          <MediaWrapper width={content.width}>
            <Carousel items={content.mediaItems!} onImageClick={openLightbox} />
          </MediaWrapper>
        );

      default:
        return null;
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-6 mb-16">
      {title && (
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-2 border-b-2 border-gray-100 serif-font">
          {title}
        </h2>
      )}
      <div className="flex flex-col">
        {contents.map((content, idx) => (
          <ContentRenderer key={idx} content={content} />
        ))}
      </div>
      <Lightbox
        isOpen={lightboxOpen}
        src={lightboxSrc}
        alt={lightboxAlt}
        onClose={closeLightbox}
      />
    </section>
  );
};

export default Section;