---
id: concat
title: "Concat"
---

**Category**: Combinator 

**Brief**: Concatenates any number of observable sequences as loong as the previous sequence terminated successfully.

**Input**: Accepts many input types (single elements, tuples, arrays) as long as more than one input is supplied and all are of the same type

**Output**: Same type as input, but shape adjusted accordingly (e.g. concatenated two `1 x N` arrays gives a `2 x N` array)

The `Concat` operator allows you to combine the output of multiple observables so that you can treat them as if they were the same observable. This is done by concatenating the notifications from the input observables sequentially, such that the next sequence starts only after the previous sequence has terminated, as described in the marble diagram below.

![Concat operator](images/concat.svg)

The resulting observable will terminate successfully when the last observable sequence has terminated successfully, or exceptionally as soon as any sequence raises an error.

:::caution
`Build Error: No method overload found for the given arguments.`

The supplied inputs might be of different types.
:::