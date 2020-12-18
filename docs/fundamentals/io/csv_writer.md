---
id: csv_writer
title: CsvWriter
---

**Prerequisites**:
-   bonsai IO Library

**Category**: Sink

**Brief**: Sinks individual elements of the input sequuence to a text file.

**Input** - Accepts several input types (single elements, tuples, arrays) as long as it comes from a single source node

**Properties**:
- `Append` (*bool*) - indicates whether data should be appended to the output file if it already exists
- `Delimiter` (*string*) - separator of columns in the output file; if not specified, comma is used
- `FileName` (*ListSeparator*) - name of the output file or full path to the output file if the desired path is different from the current working directory
- `IncludeHeader` (*bool*) - indicates whether to include a text header with column names
- `ListSeparator` (*string*) - separator of elements in variable length rows (optional)
- `Overwrite` (*bool*) - indicates whether the output file should be overwritten if it already exists
- `Selector` (*string*) - selects a subset of the input's inner properties that will be written to file
- `Suffix` (*Bonsai.IO.PathSuffix*) - optional suffix used to generate file names: `None`, `FileCount`, `Timestamp`; generates new files even if `Overwrite` is set to True

**Output** - same type as the input

---

**Common errors**:

`Runtime Error: A valid file path must be specified`
Occurs when the `FileName` property is left empty or not specified properly
