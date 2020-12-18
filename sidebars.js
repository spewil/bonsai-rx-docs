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
		"items": [
			"core/reactive/amb",
			"core/reactive/combine_latest",
			"core/reactive/concat",
			"core/reactive/distinct_until_changed",
			"core/reactive/merge",
			"core/reactive/skip",
			"core/reactive/skip_until",
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
	"Workflow Fundamentals" : ["fundamentals/video_acquisition"],
	"Advanced Topics" : [],
	"How to Contribute" : ["meta/writing_docs",
						   "meta/creating_packages",
						   ],
  }
};

