---
id: subscribe_when
title: "SubscribeWhen"
---

**Category**: Combinator (filtering)

**Brief**: Subscribes to the first observable sequence only after the second sequence produces an element.

**Input**: Accepts many input types (single elements, tuples, arrays) as long as exactly two inputs are supplied

**Output**: Same type as the first input sequence

:::tip
**Tip**: Use `SubscribeWhen` -> `Take` -> `Repeat` to subscribe to the first observable sequence and take the specified number of inputs multiple times.
:::