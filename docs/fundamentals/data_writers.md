---
id: data_writers
title: Writing Data to Files
---

### **`VideoWriter`** \#sink
writes the input image sequence to a compressed `.avi` file

**input** (*OpenCV.Net.IpIImage*) - 2D matrix of pixels, such as that produced by `CameraCapture` or the `Image` output of other camera source nodes

**properties**:
-   `Buffered` (*bool*) - indicates whether writing should be buffered
-   `FileName` (*string*) - name of the output file or full path to the
    output file if the desired path is different from the current
    working directory
-   `FourCC` (*string*) - the four-character code of the codec used to
    compress video frames, e.g. `FMP4`
-   `FrameRate` (*double*) - playback frame rate of the image sequence
-   `FrameSize` (*OpenCV.Net.Size*) - frame size in the output file
    -   `Width` (*int*)
    -   `Height` (*int*)
-   `Overwrite` (*bool*) - indicates whether the output file should be
    overwritten if it already exists
-   `ResizeInterpolation` (*OpenCV.Net.SubPixelInterpolation*) -
    interpolation method used to resize video frames, e.g.
    `NearestNeighbor`
-   `Suffix` (*Bonsai.IO.PathSuffix*) - optional suffix used to generate
    file names: `None`, `FileCount`, `Timestamp`; generates new files
    even if `Overwrite` is set to True

**output** (*OpenCV.Net.IpIImage*):
-   `IsInvalid` (*bool*)
-   `ElementType` (*int*)
-   `Size` (*OpenCV.Net.Size*)
    -   `Width` (*int*)
    -   `Height` (*int*)
-   `Depth` (*OpenCV.Net*.*IpIDepth*)
-   `Channels` (*int*)
-   `Width` (*int*)
-   `Height` (*int*)
-   `WidthStep` (*int*)
-   `ImageData` (*System.IntPtr*)
-   `ChannelOfInterest` (*int*)
-   `RegionOfInterest` (*OpenCV.Net.Rect*)
    -   `X` (*int*)
    -   `Y` (*int*)
    -   `Width` (*int*)
    -   `Height` (*int*)
-   `IsClosed` (*bool*)

**tip**: How to get real-time playback rate?
Without a hardware trigger, the acquisition frame rate might be
unstable. If the playback seems vastly different from real-time, one can
place `TimeInterval` after `VideoWriter` to measure the real frame rate
and then specify the corresponding frequency in the `FrameRate` property
of `VideoWriter`.

With a hardware trigger, one can set the `FrameRate` property of
`VideoWriter` equal to the (known) trigger frequency.

---

### **`CsvWriter`** \#sink
writes elements of the input sequence to a `.csv` file

**input** - accepts several input types (single elements, tuples, arrays) as long as it comes from a single source node

**properties**:
- `Append` (*bool*) - indicates whether data should be appended to the output file if it already exists
- `Delimiter` (*string*) - separator of columns in the output file; if not specified, comma is used
- `FileName` (*ListSeparator*) - name of the output file or full path to the
    output file if the desired path is different from the current
    working directory
- `IncludeHeader` (*bool*) - indicates whether to include a text header with column names
- `ListSeparator` (*string*) - separator of elements in variable length rows (optional)
- `Overwrite` (*bool*) - indicates whether the output file should be
    overwritten if it already exists
- `Selector` (*string*) - selects a subset of the input's inner properties that will be written to file
- `Suffix` (*Bonsai.IO.PathSuffix*) - optional suffix used to generate
    file names: `None`, `FileCount`, `Timestamp`; generates new files
    even if `Overwrite` is set to True
    
**output** - same type as the input

---

### **`MatrixWriter`** \#sink
writes the input signal into a `.bin` file

**input** (*OpenCV.Net.Mat*) - an array

**properties**:
- `Layout`(*Bonsai.Dsp.MatrixLayout*) - controls how individual buffer matrices are linearised into disk; when input is a `C x N` array (where `C` is number of channels and `N` is number of samples in buffer), as is the case in almost all bonsai data sources, the appropriate layout is `ColumnMajor`
- `Path` (*string*) - name of the output file or full path to the
    output file if the desired path is different from the current
- `Suffix` (*Bonsai.IO.PathSuffix*) - optional suffix used to generate
    file names: `None`, `FileCount`, `Timestamp`; generates new files
    even if `Overwrite` is set to True 
- `Overwrite` (*bool*) - indicates whether the output file should be
    overwritten if it already exists

**output** (*OpenCV.Net.Mat*) - the same array

**tip**: to read a `.bin` file (written with `ColumnMajor` layout) in Python, one can use `numpy.fromfile(path, dtype).reshape(-1,C)` where `C` is the number of input channels.
`dtype` depends on the input signal `Depth`

| depth | dtype                       |
|-------|-----------------------------|
| U8    |         `np.uint8`          |
| S8    |         `np.int8`           |
| U16   |         `np.uint16`         |
| S16   |         `np.int16`          |
| S32   |         `np.int32`          |
| F32   | `np.single` or `np.float32` |
| F64   | `np.double` or `np.float64` |

---

### Common errors
`Runtime Error: Input array must have the same element type`
Element type may refer to the `Depth` parameter of input signals (e.g. in `FunctionGenerator`). It must be the same for all input signals fed into a given writer node.

`Runtime Error: Input array must have the same shape except in the dimension corresponding to axis`
Happens when input arrays have different shapes, possibly due to unequal `BufferSize`

`Runtime Error: A valid file path must be specified`
Occurs when the `FileName` or `Path` property of the writer node is left empty or not specified properly
