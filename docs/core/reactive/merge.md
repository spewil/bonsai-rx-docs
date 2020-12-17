---
id: merge
title: "Merge"
---

**Category**: Combinator

**Brief**: Merges any number of observable sequences iinto a single observable sequence.

**Input**: Accepts many input types (single elements, tuples, arrays) as long as more than one input is supplied and all are of the same type

**Output**: Same type as input, keeping the same shape (e.g. two `1 x N` arrays gives a `1 x N` array that alternates between the two inputs)

The `Merge` operator allows you to combine the output of multiple observables so that you can treat them as if they were the same observable. This is done by merging all the notifications from all the input sequences into a single sequence, as described in the marble diagram below.

![Merge operator](images/merge.svg)

The merged observable will terminate successfully when all the input sequences have terminated successfully, or exceptionally as soon as any sequence raises an error.

**Common errors**: `Build Error: No method overload found for the given arguments.`
The supplied inputs might be of different types.