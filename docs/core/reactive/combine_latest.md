---
id: combine_latest
title: "CombineLatest"
---

**Category**: Combinator 

**Brief**: Combines values from the source sequences whenever any of the sequences have produced an element.

**Input**: Accepts many input types (single elements, tuples, arrays) as long as at least two are supplied

**Output** (*System.Tuple<input1_type,input2_type,input3_type>*): A tuple of inputs

The `CombineLatest` operator allows you to combine the items emitted by two or more observable sequences. Items are paired whenever any of the sequences emits a new item, using the latest items emitted by each of the other observables.

![CombineLatest operator](images/combine_latest.svg)

The first pair is only emitted when all observables have emitted at least one item, so if an observable emits multiple items before the other observables have generated notifications, only the latest of those items will be included in the first pair.

The operator will terminate only when all observable sequences have terminated. If any of the observables terminates early, the last item emitted by that sequence will continue to be used to generate pairs whenever the remaining observables emit new items. This means the resulting sequence will be as long as the longest of the input sequences.

:::tip
`CombineLatest` followed by `Concat` can be used to synchronise multiple source nodes (e.g. `CameraCapture` at <30 Hz non-triggered frame rates) to the precision of operating system jitter (~10 ms).
:::

:::tip
`CombineLatest` can be the reason output files contain duplicate rows. `Zip` should be used instead. 
Note that, when applied to multiple video sources, the output frame rate will be the sume of input frame rate. This can be solved by specifying one of the sources as the master, e.g. adding `Sample` after `CombineLatest` with the master as secondary input, or using `WithLatestFrom` instead.
:::