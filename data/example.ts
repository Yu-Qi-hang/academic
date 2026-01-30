import { PaperData, ContentType } from '../types';

export const example: PaperData = {
  title: "Paper Title",
  venue: {
    name: "Conference 2025",
    link: "https://example.com/"
  },
  authors: [
    { name: "Alpha", link: "#", affiliationIndices: [1, 2], isEqualContribution: true },
    { name: "Beta", link: "#", affiliationIndices: [1], isEqualContribution: true },
    { name: "Gemma", link: "#", affiliationIndices: [2, 3] },
    { name: "Theta", link: "#", affiliationIndices: [1, 3] }
  ],
  affiliations: [
    // Local icons can be placed in assets/icons/
    { id: 1, name: "Stanford University", icon: 'https://www.stanford.edu/favicon.ico' },
    { id: 2, name: "Google", icon: "assets/icons/google.ico" },
    { id: 3, name: "MIT", icon: 'https://web.mit.edu/favicon.ico' }
  ],
  abstract: "We introduce a novel framework for robotic manipulation that leverages large-scale generative models to predict future world states and plan complex interaction sequences.",
  links: [
    { label: "Paper", url: "assets/paper.pdf", icon: "Paper", color: "blue" },
    { label: "ArXiv", url: "https://arxiv.org/abs/example", customIcon: "assets/icons/ArXiv.svg", icon: "Arxiv", color: "red" },
    { label: "Code", url: "https://github.com/example/repo", icon: "Code", color: "black" },
    { label: "Dataset", url: "#", icon: "Dataset", color: "green" },
    { label: "Video", url: "assets/demo_video.mp4", icon: "Video", color: "orange" },
    { label: "Poster", url: "assets/posters/eccv24.pdf", icon: "Poster", color: "purple" }
  ],
  sections: [
    {
      id: "comparison",
      title: "Dynamic vs Static (Local Comparison)",
      contents: [
        {
          type: ContentType.IMAGE_COMPARISON,
          width: '75%', 
          src: "assets/images/compare_before.jpg",
          srcSecondary: "assets/images/compare_after.jpg",
          caption: "Comparison using local image files."
        }
      ]
    },
    {
      id: "teaser",
      title: "Featured Demos",
      contents: [
        {
          type: ContentType.CAROUSEL,
          mediaItems: [
            // Example of using local video and image files
            { type: 'VIDEO', src: 'assets/videos/teaser_1.mp4', caption: 'Behavior 1: Reaching' },
            { type: 'IMAGE', src: 'assets/images/world_model.png', caption: 'Internal World Model State' },
            { type: 'VIDEO', src: 'assets/videos/teaser_2.mp4', caption: 'Behavior 2: Grasping' }
          ]
        }
      ]
    },
    {
      id: "no-title-section",
      contents: [
        {
          type: ContentType.IMAGE,
          src: "assets/images/architecture_wide.jpg",
          width: "full",
          caption: "System overview using a local high-resolution image."
        }
      ]
    },
    {
      id: "grid-demo",
      title: "Local Media Gallery",
      contents: [
        {
          type: ContentType.IMAGE_GRID,
          gridConfig: [2, 3], 
          mediaItems: [
            { type: 'IMAGE', src: 'assets/images/result_1.png'},
            { type: 'VIDEO', src: 'assets/videos/result_1.mp4' }, 
            { type: 'IMAGE', src: 'assets/images/result_2.png', caption: 'Step 2' },
            { type: 'VIDEO', src: 'assets/videos/result_2.mp4', caption: 'Step 3' },
            { type: 'IMAGE', src: 'assets/images/result_3.png' } 
          ],
          caption: "Gallery using local assets stored in the repository."
        }
      ]
    },
    {
      id: "method",
      title: "Methodology",
      contents: [
        {
          type: ContentType.IMAGE,
          src: "assets/images/method_diagram.svg",
          caption: "System Architecture (Local SVG)."
        },
        {
          type: ContentType.TEXT,
          text: "Our method uses action-conditional video prediction to hallucinate futures and optimize actions via MPC."
        }
      ]
    },
    {
      id: "paper-preview",
      title: "PDF Preview (Local)",
      contents: [
        {
          type: ContentType.PDF,
          width: 'full',
          src: "assets/papers/nerf_dynamic.pdf"
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