---
id: pylon_capture
title: PylonCapture
---

**Prerequisites**:
-   bonsai Pylon Library
-   pylon Camera Software Suite 5.1.0 from the [basler
    website](https://www.baslerweb.com/en/sales-support/downloads/software-downloads/)

**Category**: Source

**Brief**: Acquires a sequence of images from a Basler camera using the pylon software

**Properties**:
-   `ParameterFile` - full path to an `.fps` file describing the desired camera features. The file can be created in pylonViewer `Camera -> Save features` once the features are set.
-   `SerialNumber` - serial number of the camera, identical to that displayed in pylonViewer. It should appear in the drop-down list once the camera is connected.

**Output** (*Bonsai.pylon.pylonDataFrame*):
-   `Image` (*OpenCV.Net.IpIImage*) - 2D matrix of pixels, accepted as
    input by `VideoWriter`
    -   `IsInvalid` (*bool*)
    -   `ElementType` (*int*)
    -   `Size` (*OpenCV.Net.Size*)
        -   `Width` (*int*)
        -   `Height` (*int*)
    -   `Depth` (*OpenCV.Net.IpIDepth*)
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
-   `GrabResult` (*Basler.Pylon.IGrabResult*)
    -   `Orientation` (*Basler.Pylon.ImageOrientation*)
    -   `PaddingX` (*int*)
    -   `Height` (*int*)
    -   `Width` (*int*)
    -   `PixelTypeValue` (*Basler.Pylon.PixelTypei)*
    -   `PixelData` (*object*)
    -   `IsValid` (*bool*)
    -   `SkippedImageCount` (*long*)
    -   `ImageNumber` (*long*)
    -   `ID` (*long*) - 1-based frame index
    -   `BufferUserData` (*object*)
    -   `StreamGrabberUserData` (*object*)
    -   `Timestamp` (*long*) - hardware timestamp
    -   `BlockID` (*long*)
    -   `PayloadSize` (*long*)
    -   `HasCRC` (*bool*)
    -   `ChunkData` (*Basler.Pylon.IParameterCollection*)
    -   `HasChunkData` (*bool*)
    -   `ErrorDescription` (*string*)
        -   `Length` (*int*)
    -   `ErrorCode` (*int*)
    -   `GrabSucceeded` (*bool*)
    -   `PaddingY` (*int*)
    -   `PayloadTypeValue` (*Basler.Pylon.PayloadType*)

:::tip
Write video to file using `VideoWriter`
:::

:::tip
To visualise the video during acquisition, install the bonsai Vision Design Library and open `Bonsai.Vision.Design.IpIImageVisualizer`from the `Image` output node of the respective image capture node
:::

:::caution
`Runtime error: Unable to acquire camera frame`

One possible reason is that the camera is currently open in pylonViewer.
:::
