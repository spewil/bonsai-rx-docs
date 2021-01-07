module.exports = {
  title: 'Bonsai-rx Documentation',
  tagline: 'Community-driven documentation for the Bonsai programming language.',
  url: 'https://spewil.github.io',
  baseUrl: '/bonsai-rx-docs/',
  onBrokenLinks: 'error',
  onBrokenMarkdownLinks: 'error',
  favicon: 'img/favicon.ico',
  organizationName: 'spewil', // Usually your GitHub org/user name.
  projectName: 'bonsai-rx-docs', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'bonsai-rx docs',
      logo: {
        alt: 'bonsai-rx Logo',
        src: 'img/logo.svg', // Changing this affects the tiny logo at the top too
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/spewil/bonsai-rx-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    colorMode: {
      // "light" | "dark"
      defaultMode: 'dark',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: false,

      // Should we use the prefers-color-scheme media-query,
      // using user system preferences, instead of the hardcoded defaultMode
      respectPrefersColorScheme: true,

      // Dark/light switch icon options
      switchConfig: {
        // Icon for the switch while in dark mode
        darkIcon: '🌙',

        // CSS to apply to dark icon,
        // React inline style object
        // see https://reactjs.org/docs/dom-elements.html#style
        darkIconStyle: {
          marginLeft: '2px',
        },

        // Unicode icons such as '\u2600' will work
        // Unicode with 5 chars require brackets: '\u{1F602}'
        lightIcon: '☀️',

        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    footer: {
      //style: 'light',
      links: [
        {
          title: 'Home',
          items: [
            {
              label: 'Docs',
              to: 'docs/',
            },
            {
              label: 'Blog',
              to: 'blog',
            },
          ],
        },
        {
        title: 'Contribute',
        items: [
         {
            label: 'GitHub',
            href: 'https://github.com/spewil/bonsai-rx-docs',
          }
          ]
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.com/invite/Cp8ZfQ9ytp',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/bonsai_rx',
            },
            {
              label: 'Google Groups',
              href: 'https://groups.google.com/g/bonsai-users?pli=1',
            },
          ],
        },
       ],
      copyright: `Built with Docusaurus (${new Date().getFullYear()})`,
    },

  // algolia search
  algolia: {
    apiKey: '1d5169d357726e74810feff638fc4978',
    indexName: 'bonsai-rx',

    // // Optional: see doc section bellow
    // contextualSearch: true,

    // // Optional: Algolia search parameters
    // searchParameters: {},

    //... other Algolia params
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
	    'https://github.com/spewil/bonsai-rx-docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/spewil/bonsai-rx-docs/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
