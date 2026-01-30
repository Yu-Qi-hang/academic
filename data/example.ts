import { PaperData, ContentType } from '../types';

export const example: PaperData = {
  title: "Paper Title",
  venue: {
    name: "Conference 2025",
    link: "https://example.com/"
  },
  star: false,
  authors: [
    { name: "Alpha", link: "#", affiliationIndices: [1, 2], isEqualContribution: true },
    { name: "Beta", link: "#", affiliationIndices: [1], isEqualContribution: true },
    { name: "Gemma", link: "#", affiliationIndices: [2, 3] },
    { name: "Theta", link: "#", affiliationIndices: [1, 3] }
  ],
  affiliations: [
    // Local icons can be placed in assets/icons/
    { id: 1, name: "Stanford University", icon: 'https://www.stanford.edu/favicon.ico' },
    { id: 2, name: "Zhejiang University", icon: "assets/icons/zju.ico" },
    { id: 3, name: "MIT", icon: 'https://web.mit.edu/favicon.ico' }
  ],
  abstract: "We introduce a novel framework for robotic manipulation that leverages large-scale generative models to predict future world states and plan complex interaction sequences.",
  links: [
    { label: "Paper", url: "assets/paper.pdf", icon: "Paper", color: "blue" },
    { label: "ArXiv", url: "https://arxiv.org/abs/example", customIcon: "assets/icons/ArXiv.svg", icon: "Arxiv", color: "red" },
    { label: "Code", url: "https://github.com/Yu-Qi-hang/academic", icon: "Code", color: "black" },
    { label: "Dataset", url: "#", icon: "Dataset", color: "green" },
    { label: "Video", url: "assets/demo_video.mp4", icon: "Video", color: "orange" },
    { label: "Poster", url: "assets/posters/eccv24.pdf", icon: "Poster", color: "purple" }
  ],
  sections: [
    {
      id: "comparison",
      title: "IMAGE_COMPARISON",
      contents: [
        {
          type: ContentType.IMAGE_COMPARISON,
          width: '75%', 
          src: "https://picsum.photos/seed/p1-1/600/400",
          srcSecondary: "https://picsum.photos/seed/p1-2/600/400",
          caption: "Comparison using local image files."
        }
      ]
    },
    {
      id: "teaser",
      title: "CAROUSEL",
      contents: [
        {
          type: ContentType.CAROUSEL,
          mediaItems: [
            // Example of using local video and image files
            { type: 'VIDEO', src: 'https://www.bilibili.com/video/BV1VqzZBDE5X/?spm_id_from=333.1007.top_right_bar_window_dynamic.content.click&vd_source=bab75b3ccf1b5ff4356ab5c39c33eca7' },
            { type: 'IMAGE', src: 'https://picsum.photos/seed/p2-1/1200/600'},
            { type: 'IMAGE', src: 'https://picsum.photos/seed/p2-2/1200/600'}
          ]
        }
      ]
    },
    {
      id: "no-title-section",
      contents: [
        {
          type: ContentType.IMAGE,
          src: 'https://picsum.photos/seed/p3-1/1200/600',
          width: "full",
          caption: "Image without section title."
        }
      ]
    },
    {
      id: "grid-demo",
      title: "IMAGE_GRID",
      contents: [
        {
          type: ContentType.IMAGE_GRID,
          gridConfig: [2, 3], 
          mediaItems: [
            { type: 'IMAGE', src: 'https://picsum.photos/seed/p4-1/600/400'},
            { type: 'VIDEO', src: 'https://youtu.be/s3wNuru4U0I?si=uDzwWeCV7TZ8Mysl'}, 
            { type: 'IMAGE', src: 'https://picsum.photos/seed/p4-2/300/200', caption: 'Step 1' },
            { type: 'VIDEO', src: 'https://www.bilibili.com/video/BV1V44y1K7ss/?spm_id_from=333.337.search-card.all.click', caption: 'Step 2' },
            { type: 'IMAGE', src: 'https://picsum.photos/seed/p4-3/300/200', caption: 'Step 3' } 
          ],
          caption: "Gallery with different number of media."
        }
      ]
    },
    {
      id: "paper-preview",
      title: "PDF Preview",
      contents: [
        {
          type: ContentType.PDF,
          width: 'full',
          src: "https://arxiv.org/pdf/2505.15091"
        }
      ]
    }
  ],
  bibtex: `@article{example2025,
  title={Paper Title},
  author={Alpha, Beta, Gemma, and Theta},
  year={2025}
}`
};