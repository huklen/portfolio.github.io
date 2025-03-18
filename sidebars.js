// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  mySideBar: [
    {
      type: 'doc',
      id: 'index'
    },
    {
      type: 'category',
      label: 'Game Projects',
      items: ['striden', 'just-us', 'triggered', 'shattle'],
      collapsed: false,
    },
    {
      type: 'category',
      label: 'Unreal Plugins',
      items: ['plugins'],
      collapsed: false,
    },
    {
      type: 'html',
      value: '<hr />',
      defaultStyle: false,
    },
    {
      type: 'link',
      label: 'eeldev.com',
      href: 'http://eeldev.com/',
    },
  ],
};

module.exports = sidebars;
