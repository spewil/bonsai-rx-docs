---
id: file_capture
title: FileCapture
---

**Prerequisites**:
-   bonsai Vision Library

**Category**: Source

**Brief**: Produces a sequence of images from the specified movie file. 

**Properties**:
-   `FileName` (*string*) - name of the video file or, if file directory is different from the working directory, full path to the video file
-   `Loop` (*bool*) - indicates whether the video sequence should loop after reaching the end of the file
-   `PlaybackRate`(*double*) - rate at which frames are read from the file; if `0`, frames are read at the native rate
-   `Playing` (*bool*) - playback can be paused and resumed by toggling this argument
-   `PositionUnits` (*Bonsai.Vision.CapturePosition*) - units of `StartPosition` (`Frames`, `Milliseconds`, `Aviratio`)
-   `StartPosition` (*double*) - position in file to start the playback from (units specified by `PositionUnits`)

**Output** (*OpenCV.Net.IplImage*) - 2D matrix of pixels
-   `IsInvalid` (*bool*)
-   `ElementType` (*int*)
-   `Size` (*OpenCV.Net.Size*)
    -   `Width` (*int*)
    -   `Height` (*int*)
-   `Depth` (*OpenCV.Net.IplDepth*)
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

