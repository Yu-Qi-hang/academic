import { PaperData, ContentType } from '../types';

export const paper2: PaperData = {
  title: "Neural Radiance Fields for Dynamic Scene Reconstruction",
  venue: {
    name: "ECCV 2024",
    link: "https://eccv2024.ecva.net/"
  },
  authors: [
    { name: "Sarah Connor", link: "#", affiliationIndices: [1] },
    { name: "Kyle Reese", link: "#", affiliationIndices: [1, 2] }
  ],
  affiliations: [
    { id: 1, name: "TechCom Research", icon: "assets/icons/techcom.png" },
    { id: 2, name: "Cyberdyne Systems", icon: "assets/icons/cyberdyne.png" }
  ],
  abstract: "This paper explores the extension of NeRF to dynamic environments, allowing for high-fidelity reconstruction of moving humans and objects from sparse camera views.",
  links: [
    { label: "Paper", url: "assets/papers/nerf_dynamic.pdf", icon: "Paper", color: "blue" },
    { label: "ArXiv", url: "#", icon: "Arxiv", color: "red" },
    { label: "Dataset", url: "#", icon: "Paper", color: "green" },
    { label: "Poster", url: "assets/posters/eccv24.pdf", icon: "Paper", color: "purple" }
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
      id: "small-video",
      title: "Focused Video Demo",
      contents: [
        {
          type: ContentType.VIDEO,
          width: 'small', 
          src: "assets/videos/highlight.mp4",
          caption: "A local MP4 video file."
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
  bibtex: `@article{connor2024nerf,
  title={Neural Radiance Fields for Dynamic Scene Reconstruction},
  author={Connor, Sarah and Reese, Kyle},
  year={2024}
}`
};