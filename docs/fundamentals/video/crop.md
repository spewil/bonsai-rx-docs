---
id: crop
title: Crop
---

**Prerequisites**:
-   bonsai Vision Library

**Category**: Transform

**Brief**: Crops out a subregion of the input image

**Input** (*OpenCV.Net.IpIImage*) - 2D matrix of pixels, such as that produced by `FileCapture`, `CameraCapture`, or the `Image` output of other camera source nodes

**Properties**:
-   `RegionOfInterest` (*OpenCV.Net.Rect*) - region to be cropped out inside the input image
    -   `X` (*int*) - X coordinate of the upper left corner
    -   `Y` (*int*) - Y coordinate of the upper left corner
    - `Width` (*int*)
    - `Height` (*int*) 

**Output** (*OpenCV.Net.IpIImage*) - inherited from the input image
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


