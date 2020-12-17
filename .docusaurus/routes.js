
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','fd2'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','986'),
  exact: true,
},
{
  path: '/docs/concepts/editor',
  component: ComponentCreator('/docs/concepts/editor','f1e'),
  exact: true,
},
{
  path: '/docs/concepts/gallery',
  component: ComponentCreator('/docs/concepts/gallery','969'),
  exact: true,
},
{
  path: '/docs/core/zip',
  component: ComponentCreator('/docs/core/zip','fb9'),
  exact: true,
},
{
  path: '/docs/fundamentals/daqmx_integration',
  component: ComponentCreator('/docs/fundamentals/daqmx_integration','458'),
  exact: true,
},
{
  path: '/docs/fundamentals/data_writers',
  component: ComponentCreator('/docs/fundamentals/data_writers','2ee'),
  exact: true,
},
{
  path: '/docs/fundamentals/video_acquisition',
  component: ComponentCreator('/docs/fundamentals/video_acquisition','7ef'),
  exact: true,
},
{
  path: '/docs/getting_started/installation',
  component: ComponentCreator('/docs/getting_started/installation','4e3'),
  exact: true,
},
{
  path: '/docs/meta/style_guide',
  component: ComponentCreator('/docs/meta/style_guide','e3e'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
