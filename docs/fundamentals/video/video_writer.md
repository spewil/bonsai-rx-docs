---
id: video_writer
title: VideoWriter
---

**Prerequisites**:
-   bonsai Vision Library

**Category**: Sink

**Brief**: Writes the input image sequence to a compressed `.avi` file

**Input** (*OpenCV.Net.IpIImage*) - 2D matrix of pixels, such as that produced by `CameraCapture` or the `Image` output of other camera source nodes

**Properties**:
-   `Buffered` (*bool*) - indicates whether writing should be buffered
-   `FileName` (*string*) - name of the output file or full path to the output file if the desired path is different from the current working directory
-   `FourCC` (*string*) - the four-character code of the codec used to compress video frames, e.g. `FMP4`
-   `FrameRate` (*double*) - playback frame rate of the image sequence
-   `FrameSize` (*OpenCV.Net.Size*) - frame size in the output file
    -   `Width` (*int*)
    -   `Height` (*int*)
-   `Overwrite` (*bool*) - indicates whether the output file should be overwritten if it already exists
-   `ResizeInterpolation` (*OpenCV.Net.SubPixelInterpolation*) - interpolation method used to resize video frames, e.g. `NearestNeighbor`
-   `Suffix` (*Bonsai.IO.PathSuffix*) - optional suffix used to generate file names: `None`, `FileCount`, `Timestamp`; generates new files even if `Overwrite` is set to True

**Output** (*OpenCV.Net.IpIImage*):
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

:::tip
How to get real-time playback rate? Without a hardware trigger, the acquisition frame rate might be unstable. If the playback seems vastly different from real-time, one can place `TimeInterval` after `VideoWriter` to measure the real frame rate and then specify the corresponding frequency in the `FrameRate` property of `VideoWriter`.

With a hardware trigger, one can set the `FrameRate` property of `VideoWriter` equal to the (known) trigger frequency.
:::

:::caution
`Runtime Error: A valid file path must be specified`

Occurs when the `FileName` property is left empty or not specified properly.
:::
