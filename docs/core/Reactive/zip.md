---
id: zip
title: "Zip"
---

**Category**: Combinator

**Brief**: Combines values from the source sequences whenever all of the sequences have produced an element.

**Input**: Accepts many input types (single elements, tuples, arrays) as long as multiple are supplied

**Output** (*System.Tuple<input1_type,input2_type,input3_type>*): A tuple of inputs

The `Zip` operator allows you to combine the items emitted by two or more observable sequences. Items are matched by the order in which they were emitted by each of the sequences, independently of time.

![Zip operator](images/zip.svg)

The first item emitted by observable #1 is matched to the first item emitted by observable #2; the second item emitted by observable #1 is matched to the second item emitted by observable #2; and so on.

The operator will terminate when all possible pairs have been formed. This means that the resulting sequence will only be as long as the shortest of the input sequences.