---
id: take
title: "Take"
---

**Category**: Combinator (filtering)

**Brief**: Returns the specified number of contiguous elements from the start of the sequence.

**Input**: Accepts many input types (single elements, tuples, arrays) 

**Properties**:
`Count` (*int*) - the number of elements to take

**Output**: Same type as input

The `Take` operator allows you to truncate an observable sequence by specifying a maximum number of notifications that should be allowed as the output. As soon as the requested number of notifications is received, `Take` will terminate successfully.

![Take operator](images/take.svg)
