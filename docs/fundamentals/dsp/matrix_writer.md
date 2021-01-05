---
id: matrix_writer
title: MatrixWriter
---

**Prerequisites**:
-   bonsai Dsp Library

**Category**: Sink

**Brief**: Writes the incoming signal into the specified raw binary output stream

**Input** (*OpenCV.Net.Mat*) - an array

**Properties**:
- `Layout`(*Bonsai.Dsp.MatrixLayout*) - controls how individual buffer matrices are linearised into disk; when input is a `C x N` array (where `C` is number of channels and `N` is number of samples in buffer), as is the case in almost all bonsai data sources, the appropriate layout is `ColumnMajor`
- `Path` (*string*) - name of the output file or full path to the output file if the desired path is different from the current
- `Suffix` (*Bonsai.IO.PathSuffix*) - optional suffix used to generate file names: `None`, `FileCount`, `Timestamp`; generates new files even if `Overwrite` is set to True 
- `Overwrite` (*bool*) - indicates whether the output file should be overwritten if it already exists

**Output** (*OpenCV.Net.Mat*) - the same array

:::tip
To read a `.bin` file (written with `ColumnMajor` layout) in Python, one can use `numpy.fromfile(path, dtype).reshape(-1,C)` where `C` is the number of input channels.
`dtype` depends on the input signal `Depth`

| depth | dtype                       |
|-------|-----------------------------|
| `U8`    |         `np.uint8`          |
| `S8`    |         `np.int8`           |
| `U16`   |         `np.uint16`         |
| `S16`   |         `np.int16`          |
| `S32`   |         `np.int32`          |
| `F32`   | `np.single` or `np.float32` |
| `F64`   | `np.double` or `np.float64` |
:::

:::caution
`Runtime Error: Input array must have the same element type`

Element type may refer to the `Depth` parameter of input signals (e.g. in `FunctionGenerator`). It must be the same for all input signals fed into a given writer node.
:::

:::caution
`Runtime Error: Input array must have the same shape except in the dimension corresponding to axis`

Happens when input arrays have different shapes, possibly due to unequal `BufferSize`
:::

:::caution
`Runtime Error: A valid file path must be specified`

Occurs when the `Path` property is left empty or not specified properly
:::