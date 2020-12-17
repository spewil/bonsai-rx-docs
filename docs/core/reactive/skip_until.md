---
id: skip_until
title: "SkipUntil"
---

**Category**: Combinator (filtering)

**Brief**: Returns elements from the first sequence only after the second sequence prodduces an element.

**Input**: Accepts many input types (single elements, tuples, arrays) as long as exactly two are supplied

**Output**: Same type as the first input

The SkipUntil operator allows you to discard notifications from the beginning of an observable sequence until a notification is emitted from a second observable. After the first notification is received from that second sequence, SkipUntil forwards all subsequent notifications from the first sequence.

![SkipUntil operator](images/skip_until.svg)
