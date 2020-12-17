---
id: skip
title: "Skip"
---

**Category**: Combinator (filtering)

**Brief**: Bypasses the specified number of contiguous elements at the start of the sequence.

**Input**: Accepts many input types (single elements, tuples, arrays)

**Output**: Same type as input

**Properties**:
`Count` (*int*) - the number of elements to skip

The `Skip` operator allows you to discard a specified number of notifications from the beginning of an observable sequence. After the specified number of notifications is received, `Skip` will forward all remaining notifications.

![Skip operator](images/skip.svg)
