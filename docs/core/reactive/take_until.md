---
id: take_until
title: "TakeUntil"
---

**Category**: Combinator (filtering)

**Brief**: Returns elements from the first sequence only until the second sequence produces a value.

**Input**: Accepts many input types (single elements, tuples, arrays)

**Output**: Same type as the first input

The `TakeUntil` operator allows you to stop an observable sequence when a notification is emitted from a second observable. `TakeUntil` starts by forwarding all notifications from the first observable. As soon as a notification is received from the second observable, `TakeUntil` cancels the subscription to the first observable and terminates successfully.

![TakeUntil operator](images/take_until.svg)
