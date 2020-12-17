---
id: distinct_until_changed
title: "DistinctUntilChanged"
---

**Category**: Combinator (filtering)

**Brief**: Ensures that only distiinct contiguous elements are propagated.

**Input**: Accepts many input types (single elements, tuples, arrays) as long as only one input is supplied

**Output**: Same as input

The `DistinctUntilChanged` operator allows you to filter consecutive duplicate items from an observable sequence. This means that the resulting sequence will only emit items when there are changes in the input. As long as the input sequence keeps repeating the same value, the result will be silent.

![DistinctUntilChanged operator](images/distinct_until_changed.svg)

This operator can be useful to turn a periodic, or continuous, sequence of data values into a discrete event stream, where a new event will be signalled only when there is a change in value.