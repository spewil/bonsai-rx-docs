---
id: amb
title: "Amb"
---

**Category**: Combinator 

**Brief**: Propagates the observable sequence that reacts first.

**Input**: Accepts many input types (single elements, tuples, arrays) as long as all inputs are of the same type

**Output**: Same as input

The `Amb` operator allows you to setup a race condition between two or more observable sequences. This operator will emit all the items only from the first of the input sequences to produce a notification. You can think of it as a choice between all of the input sequences, where the decision criteria is speed of first response.

![Amb operator](images/amb.svg)

As soon as the first item or notification arrives from the winning sequence, all the subscriptions to the remaining sequences will be cancelled.