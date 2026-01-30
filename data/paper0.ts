import { PaperData, ContentType } from '../types';
// import intro from '../assets/paper0/intro.png'
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