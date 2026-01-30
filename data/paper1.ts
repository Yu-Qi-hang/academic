import { PaperData, ContentType } from '../types';

export const paper1: PaperData = {
  title: "GaussianTalker: Speaker-specific Talking Head Synthesis via 3D Gaussian Splatting",
  venue: {
    name: "ACM MM 2024",
    link: "https://www2026.thewebconf.org/"
  },
  authors: [
    { name: 'Hongyun Yu', link: "#", affiliationIndices: [1], isEqualContribution: true},
    { name: 'Zhan Qu', link: "#", affiliationIndices: [2], isEqualContribution: true},
    { name: 'Qihang Yu', link: "#", affiliationIndices: [2], isEqualContribution: true},
    { name: 'Jianchuan Chen', link: "#", affiliationIndices: [1]},
    { name: 'Zhonghua Jiang', link: "#", affiliationIndices: [2]},
    { name: 'Zhiwen Chen', link: "#", affiliationIndices: [1]},
    { name: 'Shengyu Zhang', link: "#", affiliationIndices: [2]},
    { name: 'Jimin Xu', link: "#", affiliationIndices: [2]},
    { name: 'Fei Wu', link: "#", affiliationIndices: [2]},
    { name: 'Chengfei Lv', link: "#", affiliationIndices: [1]},
    { name: 'Gang Yu', link: "#", affiliationIndices: [1]},
  ],
  affiliations: [
    { id: 1, name: 'Alibaba Group', icon: 'assets/icons/alibaba.ico' },
    { id: 2, name: 'Zhejiang University', icon: 'assets/icons/zju.ico' },
  ],
  abstract: 'Recent advances in large language models (LLMs) have enabled more semantic-aware recommendations through natural language generation. Existing LLM for recommendation (LLM4Rec) methods mostly operate in a System 1-like manner, relying on superficial features to match similar items based on click history, rather than reasoning through deeper behavioral logic. This often leads to superficial and erroneous recommendations. Inspired by this, we propose ThinkRec, a thinking-based framework that shifts LLM4Rec from an intuitive system to a rational system. First, ThinkRec introduces a thinking activation mechanism by injecting synthetic reasoning traces, making the recommendation process resemble the Chain of Thought (CoT) reasoning of LLMs. This mechanism analyzes interaction histories, identifies user preferences, and makes decisions based on target items. Furthermore, considering the highly diverse distribution of recommendation data, we propose an instance-wise expert fusion mechanism to reduce the reasoning difficulty. By dynamically assigning weights to expert models based on users\' latent features, ThinkRec adapts its reasoning path to individual users, thereby enhancing precision and personalization. Extensive experiments on various real-world web user behavior preference datasets demonstrate that ThinkRec significantly outperforms baselines in terms of recommendation accuracy and interpretability, providing superior recommendations based on a deeper understanding of user intent and a more rigorous reasoning process.',
  links: [
    { label: "Paper", url: 'https://dl.acm.org/doi/10.1145/3664647.3681675', icon: "Paper", color: "blue" },
    { label: "ArXiv", url: 'https://arxiv.org/abs/2404.14037', icon: "Arxiv", color: "red" },
    { label: "Video", url: 'https://youtu.be/TYS-WlAchvM', icon: "Video", color: "purple" }
  ],
  sections: [
    {
      id: "abs",
      title: "Abstract",
      contents: [
        {
          type: ContentType.TEXT,
          text: 'Recent work on audio-driven talking head synthesis using neural radiation fields (NeRF) has achieved impressive results. However, due to inadequate posture and expression control caused by NeRF implicit representation, these methods still have some limitations, such as unsynchronized or unnatural lip movements, and visual jitter and artifacts. In this paper, we propose GaussianTalker, a novel method for audio-driven talking head synthesis based on 3D Gaussian Splatting. With the explicit representation property of 3D Gaussians, intuitive control of the facial motion is achieved by binding Gaussians to 3D facial models. GaussianTalker consists of two modules, Speaker-specific Motion Translator and Dynamic Gaussian Renderer. The Speaker-specific Motion Translator achieves accurate lip movements specific to the target speaker through universalized audio feature extraction and customized lip motion generation. The Dynamic Gaussian Renderer introduces Learnable FLAME Embedding for optimizing facial parameters and employs Speaker-specific Blendshapes to enhance facial detail representation via a potential pose, addressing potential issues of visual jitter and artifacts. Extensive experimental results suggest that GaussianTalker outperforms existing state-of-the-art methods in talking head synthesis, delivering precise lip synchronization and exceptional visual quality. Our method achieves rendering speeds of 130 FPS on NVIDIA GPU, significantly exceeding the threshold for real-time rendering performance, and can potentially be deployed on other hardware platforms.'
        }
      ]
    },
    {
      id: "method",
      title: "Method",
      contents:[
        {
          type: ContentType.IMAGE,
          src: "https://yuhongyun777.github.io/GaussianTalker/images/gaussiantalk_framework.png",
        },
        {
          type: ContentType.TEXT,
          text: 'A novel framework for audio-driven talking head synthesis that utilizes 3D Gaussian Splatting bound to FLAME, which generates lifelike rendered videos by associating data from different modalities with specific speakers.'
        }
      ]
    },
    {
      id: "video",
      title: "Video",
      contents: [
        {
          type: ContentType.VIDEO,
          src: "https://www.youtube.com/watch?v=TYS-WlAchvM"
        }
      ]
    }
  ],
  bibtex: `@inproceedings{Yu2024GaussianTalker,
author = {Yu, Hongyun and Qu, Zhan and Yu, Qihang and Chen, Jianchuan and Jiang, Zhonghua and Chen, Zhiwen and Zhang, Shengyu and Xu, Jimin and Wu, Fei and Lv, Chengfei and Yu, Gang},
title = {GaussianTalker: Speaker-specific Talking Head Synthesis via 3D Gaussian Splatting},
year = {2024},
isbn = {9798400706868},
publisher = {Association for Computing Machinery},
address = {New York, NY, USA},
url = {https://doi.org/10.1145/3664647.3681675},
doi = {10.1145/3664647.3681675},
booktitle = {Proceedings of the 32nd ACM International Conference on Multimedia},
pages = {3548–3557},
numpages = {10},
location = {Melbourne VIC, Australia},
series = {MM '24}
}`
};