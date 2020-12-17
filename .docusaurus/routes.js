
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','d7d'),
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
  component: ComponentCreator('/__docusaurus/debug/content','d12'),
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
  component: ComponentCreator('/docs','0de'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','679'),
  exact: true,
},
{
  path: '/docs/core/expressions/bitwise_not',
  component: ComponentCreator('/docs/core/expressions/bitwise_not','daf'),
  exact: true,
},
{
  path: '/docs/core/reactive/amb',
  component: ComponentCreator('/docs/core/reactive/amb','80a'),
  exact: true,
},
{
  path: '/docs/core/reactive/combine_latest',
  component: ComponentCreator('/docs/core/reactive/combine_latest','882'),
  exact: true,
},
{
  path: '/docs/core/reactive/concat',
  component: ComponentCreator('/docs/core/reactive/concat','428'),
  exact: true,
},
{
  path: '/docs/core/reactive/distinct_until_changed',
  component: ComponentCreator('/docs/core/reactive/distinct_until_changed','450'),
  exact: true,
},
{
  path: '/docs/core/reactive/merge',
  component: ComponentCreator('/docs/core/reactive/merge','bb2'),
  exact: true,
},
{
  path: '/docs/core/reactive/skip',
  component: ComponentCreator('/docs/core/reactive/skip','307'),
  exact: true,
},
{
  path: '/docs/core/reactive/skip_until',
  component: ComponentCreator('/docs/core/reactive/skip_until','3ff'),
  exact: true,
},
{
  path: '/docs/core/reactive/take',
  component: ComponentCreator('/docs/core/reactive/take','c54'),
  exact: true,
},
{
  path: '/docs/core/reactive/take_until',
  component: ComponentCreator('/docs/core/reactive/take_until','244'),
  exact: true,
},
{
  path: '/docs/core/reactive/time_interval',
  component: ComponentCreator('/docs/core/reactive/time_interval','7b1'),
  exact: true,
},
{
  path: '/docs/core/reactive/zip',
  component: ComponentCreator('/docs/core/reactive/zip','0cf'),
  exact: true,
},
{
  path: '/docs/fundamentals/daqmx_integration',
  component: ComponentCreator('/docs/fundamentals/daqmx_integration','00b'),
  exact: true,
},
{
  path: '/docs/fundamentals/data_writers',
  component: ComponentCreator('/docs/fundamentals/data_writers','d49'),
  exact: true,
},
{
  path: '/docs/fundamentals/video_acquisition',
  component: ComponentCreator('/docs/fundamentals/video_acquisition','b93'),
  exact: true,
},
{
  path: '/docs/meta/style_guide',
  component: ComponentCreator('/docs/meta/style_guide','a4b'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
