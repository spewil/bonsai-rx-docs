
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
  path: '/blog',
  component: ComponentCreator('/blog','1b6'),
  exact: true,
},
{
  path: '/blog/first_post',
  component: ComponentCreator('/blog/first_post','28a'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','8c4'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','44f'),
  exact: true,
},
{
  path: '/docs/concepts/editor',
  component: ComponentCreator('/docs/concepts/editor','69d'),
  exact: true,
},
{
  path: '/docs/concepts/gallery',
  component: ComponentCreator('/docs/concepts/gallery','735'),
  exact: true,
},
{
  path: '/docs/concepts/higher_order',
  component: ComponentCreator('/docs/concepts/higher_order','cad'),
  exact: true,
},
{
  path: '/docs/concepts/observables',
  component: ComponentCreator('/docs/concepts/observables','e83'),
  exact: true,
},
{
  path: '/docs/concepts/operators',
  component: ComponentCreator('/docs/concepts/operators','959'),
  exact: true,
},
{
  path: '/docs/concepts/packages',
  component: ComponentCreator('/docs/concepts/packages','914'),
  exact: true,
},
{
  path: '/docs/concepts/property_mapping',
  component: ComponentCreator('/docs/concepts/property_mapping','ed0'),
  exact: true,
},
{
  path: '/docs/concepts/subjects',
  component: ComponentCreator('/docs/concepts/subjects','5ba'),
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
  path: '/docs/fundamentals/daqmx/analog_input',
  component: ComponentCreator('/docs/fundamentals/daqmx/analog_input','90b'),
  exact: true,
},
{
  path: '/docs/fundamentals/daqmx/analog_output',
  component: ComponentCreator('/docs/fundamentals/daqmx/analog_output','ece'),
  exact: true,
},
{
  path: '/docs/fundamentals/daqmx/digital_output',
  component: ComponentCreator('/docs/fundamentals/daqmx/digital_output','9e2'),
  exact: true,
},
{
  path: '/docs/fundamentals/dsp/function_generator',
  component: ComponentCreator('/docs/fundamentals/dsp/function_generator','b4a'),
  exact: true,
},
{
  path: '/docs/fundamentals/dsp/matrix_writer',
  component: ComponentCreator('/docs/fundamentals/dsp/matrix_writer','384'),
  exact: true,
},
{
  path: '/docs/fundamentals/io/csv_writer',
  component: ComponentCreator('/docs/fundamentals/io/csv_writer','038'),
  exact: true,
},
{
  path: '/docs/fundamentals/pylon/pylon_capture',
  component: ComponentCreator('/docs/fundamentals/pylon/pylon_capture','a42'),
  exact: true,
},
{
  path: '/docs/fundamentals/spinnaker/spinnaker_capture',
  component: ComponentCreator('/docs/fundamentals/spinnaker/spinnaker_capture','52d'),
  exact: true,
},
{
  path: '/docs/fundamentals/video/camera_capture',
  component: ComponentCreator('/docs/fundamentals/video/camera_capture','7d1'),
  exact: true,
},
{
  path: '/docs/fundamentals/video/video_writer',
  component: ComponentCreator('/docs/fundamentals/video/video_writer','44c'),
  exact: true,
},
{
  path: '/docs/getting_started/installation',
  component: ComponentCreator('/docs/getting_started/installation','106'),
  exact: true,
},
{
  path: '/docs/meta/creating_packages',
  component: ComponentCreator('/docs/meta/creating_packages','89c'),
  exact: true,
},
{
  path: '/docs/meta/writing_docs',
  component: ComponentCreator('/docs/meta/writing_docs','20c'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
