module.exports = {
 docs: {
 	"Getting Started" : [
		 	"getting_started/getting_started",
		 	"getting_started/installation",
 						],
 	"Basic Concepts" : ["concepts/editor",
 						"concepts/gallery",
						"concepts/observables",
						"concepts/property_mapping",
						"concepts/higher_order",
						"concepts/operators",
						"concepts/packages",
						"concepts/subjects"],
 	"Bonsai Core" :
	[
		{
		"type": "category",
		"label": "Reactive",
		"items": ["core/reactive/amb",
			"core/reactive/combine_latest",
			"core/reactive/concat",
			"core/reactive/distinct_until_changed",
			"core/reactive/merge",
			"core/reactive/skip",
			"core/reactive/skip_until",
			"core/reactive/subscribe_when",
			"core/reactive/take",
			"core/reactive/take_until",
			"core/reactive/time_interval",
			"core/reactive/zip"]
		},
		{
		"type": "category",
		"label": "Expressions",
		"items": ["core/expressions/bitwise_not"]
		}
	],
	"Workflow Fundamentals" : 
	[
		{
		"type": "category",
		"label": "DAQmx",
		"items": ["fundamentals/daqmx/analog_input",
			"fundamentals/daqmx/analog_output",
			"fundamentals/daqmx/digital_output"]
		},
		{
		"type": "category",
		"label": "Dsp",
		"items": ["fundamentals/dsp/convert_scale",
			"fundamentals/dsp/function_generator",
			"fundamentals/dsp/matrix_writer"]
		},
		{
		"type": "category",
		"label": "IO",
		"items": ["fundamentals/io/csv_writer"]
		},
		{
		"type": "category",
		"label": "Pylon",
		"items": ["fundamentals/pylon/pylon_capture"]
		},
		{
		"type": "category",
		"label": "Spinnaker",
		"items": ["fundamentals/spinnaker/spinnaker_capture"]
		},
		{
		"type": "category",
		"label": "Video",
		"items": ["fundamentals/video/camera_capture",
			"fundamentals/video/crop",
			"fundamentals/video/file_capture",
			"fundamentals/video/video_writer"]
		},
		{
		"type": "category",
		"label": "WindowsInput",
		"items": ["fundamentals/windows_input/key_down"]
		}	
	],
	"Advanced Topics" : [],
	"How to Contribute" : ["meta/writing_docs",
						   "meta/creating_packages",
						   ],
  }
};

