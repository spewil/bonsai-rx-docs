module.exports = {
 docs: {
 	"Getting Started" : ["getting_started"],
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
	// "Advanced Topics" : ["advanced/doc2"],
	"How to Contribute" : ["meta/style_guide"],
  }
};

