import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
 const sidebars = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'introduction',
    },
    {
      type: 'doc',
      id: 'contexte',
      label:"Contexte",
    },
    {
      type: 'category',
      label: 'L\'analyse de sentiment',
      items: [
        'analyse_sentiment/index',
        'analyse_sentiment/page1',
        'analyse_sentiment/page2',
      ],
    },
    {
      type: 'category',
      label: 'Évolutions des Technologies',
      items: [
        'evolution_techno/index',
      ],
    },

  ],
};


export default sidebars;
