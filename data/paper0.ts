import { PaperData, ContentType } from '../types';

export const paper0: PaperData = {
  title: "ThinkRec: Thinking-based recommendation via LLM",
  venue: {
    name: "WWW 2026",
    link: "https://www2026.thewebconf.org/"
  },
  authors: [
    { name: 'Qihang Yu', link: "#", affiliationIndices: [1], isEqualContribution: true},
    { name: 'Kairui Fu', link: "#", affiliationIndices: [1], isEqualContribution: true},
    { name: 'Zheqi Lv', link: "#", affiliationIndices: [1]},
    { name: 'Shengyu Zhang', link: "#", affiliationIndices: [1]},
    { name: 'Xinhui Wu', link: "#", affiliationIndices: [2]},
    { name: 'Chen Lin', link: "#", affiliationIndices: [2]},
    { name: 'Feng Wei', link: "#", affiliationIndices: [2]},
    { name: 'Bo Zheng', link: "#", affiliationIndices: [2]},
    { name: 'Fei Wu', link: "#", affiliationIndices: [1,3]}
  ],
  affiliations: [
    { id: 1, name: 'Zhejiang University', icon: 'assets/icons/zju.ico' },
    { id: 2, name: 'Ant Group', icon: 'assets/icons/ant.png' },
    { id: 3, name: 'Shanghai AI Laboratory', icon: 'assets/icons/AILab.ico' }
  ],
  abstract: 'Recent advances in large language models (LLMs) have enabled more semantic-aware recommendations through natural language generation. Existing LLM for recommendation (LLM4Rec) methods mostly operate in a System 1-like manner, relying on superficial features to match similar items based on click history, rather than reasoning through deeper behavioral logic. This often leads to superficial and erroneous recommendations. Inspired by this, we propose ThinkRec, a thinking-based framework that shifts LLM4Rec from an intuitive system to a rational system. First, ThinkRec introduces a thinking activation mechanism by injecting synthetic reasoning traces, making the recommendation process resemble the Chain of Thought (CoT) reasoning of LLMs. This mechanism analyzes interaction histories, identifies user preferences, and makes decisions based on target items. Furthermore, considering the highly diverse distribution of recommendation data, we propose an instance-wise expert fusion mechanism to reduce the reasoning difficulty. By dynamically assigning weights to expert models based on users\' latent features, ThinkRec adapts its reasoning path to individual users, thereby enhancing precision and personalization. Extensive experiments on various real-world web user behavior preference datasets demonstrate that ThinkRec significantly outperforms baselines in terms of recommendation accuracy and interpretability, providing superior recommendations based on a deeper understanding of user intent and a more rigorous reasoning process.',
  links: [
    { label: "Paper", url: 'https://doi.org/10.1145/3774904.3792070', icon: "Paper", color: "blue" },
    { label: "ArXiv", url: 'https://arxiv.org/abs/2505.15091', icon: "Arxiv", color: "red" },
    { label: "Code", url: 'https://github.com/Yu-Qi-hang/ThinkRec', icon: "Github", color: "black" }
  ],
  sections: [
    {
      id: "abs",
      title: "Abstract",
      contents: [
        {
          type: ContentType.TEXT,
          text: 'Recent advances in large language models (LLMs) have enabled more semantic-aware recommendations through natural language generation. Existing LLM for recommendation (LLM4Rec) methods mostly operate in a System 1-like manner, relying on superficial features to match similar items based on click history, rather than reasoning through deeper behavioral logic. This often leads to superficial and erroneous recommendations. Inspired by this, we propose ThinkRec, a thinking-based framework that shifts LLM4Rec from an intuitive system to a rational system. First, ThinkRec introduces a thinking activation mechanism by injecting synthetic reasoning traces, making the recommendation process resemble the Chain of Thought (CoT) reasoning of LLMs. This mechanism analyzes interaction histories, identifies user preferences, and makes decisions based on target items. Furthermore, considering the highly diverse distribution of recommendation data, we propose an instance-wise expert fusion mechanism to reduce the reasoning difficulty. By dynamically assigning weights to expert models based on users\' latent features, ThinkRec adapts its reasoning path to individual users, thereby enhancing precision and personalization. Extensive experiments on various real-world web user behavior preference datasets demonstrate that ThinkRec significantly outperforms baselines in terms of recommendation accuracy and interpretability, providing superior recommendations based on a deeper understanding of user intent and a more rigorous reasoning process.'
        }
      ]
    },
    {
      id: "intro",
      title: "Introduction",
      contents:[
        {
          type: ContentType.IMAGE,
          src: "assets/paper0/intro.png",
        },
        {
          type: ContentType.TEXT,
          text: '(a) shows the composition of user interaction data. (b) and (c) illustrate previous LLM-based recommendations and our ThinkRec, respectively. (d) compares ThinkRec with baselines in three real-world datasets.'
        }
      ]
    }
    // {
    //   id: "teaser",
    //   title: "Featured Demos",
    //   contents: [
    //     {
    //       type: ContentType.CAROUSEL,
    //       mediaItems: [
    //         // Example of using local video and image files
    //         { type: 'VIDEO', src: 'assets/videos/teaser_1.mp4', caption: 'Behavior 1: Reaching' },
    //         { type: 'IMAGE', src: 'assets/images/world_model.png', caption: 'Internal World Model State' },
    //         { type: 'VIDEO', src: 'assets/videos/teaser_2.mp4', caption: 'Behavior 2: Grasping' }
    //       ]
    //     }
    //   ]
    // },
    // {
    //   id: "no-title-section",
    //   contents: [
    //     {
    //       type: ContentType.IMAGE,
    //       src: "assets/images/architecture_wide.jpg",
    //       width: "full",
    //       caption: "System overview using a local high-resolution image."
    //     }
    //   ]
    // },
    // {
    //   id: "grid-demo",
    //   title: "Local Media Gallery",
    //   contents: [
    //     {
    //       type: ContentType.IMAGE_GRID,
    //       gridConfig: [2, 3], 
    //       mediaItems: [
    //         { type: 'IMAGE', src: 'assets/images/result_1.png', caption: 'Step 1' },
    //         { type: 'VIDEO', src: 'assets/videos/result_1.mp4' }, 
    //         { type: 'IMAGE', src: 'assets/images/result_2.png', caption: 'Step 2' },
    //         { type: 'VIDEO', src: 'assets/videos/result_2.mp4', caption: 'Step 3' },
    //         { type: 'IMAGE', src: 'assets/images/result_3.png' } 
    //       ],
    //       caption: "Gallery using local assets stored in the repository."
    //     }
    //   ]
    // },
    // {
    //   id: "method",
    //   title: "Methodology",
    //   contents: [
    //     {
    //       type: ContentType.IMAGE,
    //       src: "assets/images/method_diagram.svg",
    //       caption: "System Architecture (Local SVG)."
    //     },
    //     {
    //       type: ContentType.TEXT,
    //       text: "Our method uses action-conditional video prediction to hallucinate futures and optimize actions via MPC."
    //     }
    //   ]
    // }
  ],
  bibtex: `@misc{yu2026thinkrecthinkingbasedrecommendationllm,
  title={ThinkRec: Thinking-based recommendation via LLM}, 
  author={Qihang Yu and Kairui Fu and Zheqi Lv and Shengyu Zhang and Xinhui Wu and Chen Lin and Feng Wei and Bo Zheng and Fei Wu},
  year={2026},
  eprint={2505.15091},
  archivePrefix={arXiv},
  primaryClass={cs.IR},
  doi={https://doi.org/10.1145/3774904.3792070},
  url={https://arxiv.org/abs/2505.15091}, 
}`
};