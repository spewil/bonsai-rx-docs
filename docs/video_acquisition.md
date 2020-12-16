---
id: video_acquisition
title: Acquiring Video
---

**Basler cameras**

Requires:

-   bonsai Pylon Library
-   pylon Camera Software Suite 5.1.0 from the [basler
    website](https://www.baslerweb.com/en/sales-support/downloads/software-downloads/)

\
**`PylonCapture`** \#source\
acquires a sequence of images from a basler camera using the pylon
software\
\
**properties**:

-   `ParameterFile` - full path to an `.fps` file describing the desired
    camera features. The file can be created in pylonViewer
    `Camera -> Save features` once the features are set.
-   `SerialNumber` - serial number of the camera, identical to that
    displayed in pylonViewer. It should appear in the drop-down list
    once the camera is connected.

\
**output** (*Bonsai.pylon.pylonDataFrame*):

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

\

**FLIR Spinnaker cameras**
--------------------------

Requires:

-   bonsai Spinnaker Library
-   Spinnaker SDK 1.29.0.5 from the [FLIR
    website](https://meta.box.lenovo.com/v/link/view/a1995795ffba47dbbe45771477319cc3)

\
**`SpinnakerCapture`** \#source\
acquires a sequence of images from a FLIR camera using the Spinnaker
software\
\
Camera parameters have to be set in SpinView every time a camera is
connected.\
\
**properties**:

-   `ColorProcessing` - the methodDefault vs. NoColorProcessing
-   `Index` - index of the camera to acquire images from

\
**output** (*Bonsai.Spinnaker.SpinnakerDataFrame*):

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
-   `ChunkData` (*SpinnakerNET.ManagedChunkData*)
    -   `InferenceBoundingBoxResult`
        (*SpinnakerNET.ManagedInferenceBoundingBoxResult*)
    -   `InferenceConfidence` (*double*)
    -   `InferenceResult` (*long*)
    -   `Scan3dCoordinateReferenceValue` (*double*)
    -   `Scan3dTransformValue` (*double*)
    -   `Scan3dAxisMax` (*double*)
    -   `Scan3dAxisMin` (*double*)
    -   `Scan3dInvalidDataValue` (*double*)
    -   `Scan3dCoordinateOffset` (*double*)
    -   `Scan3dCoordinateScale` (*double*)
    -   `StreamChannelID` (*long*)
    -   `TransferQueueCurrentBlockCount` (*long*)
    -   `TransferBlockID` (*long*)
    -   `LinePitch` (*long*)
    -   `EncoderValue` (*long*)
    -   `ScanLineSelector` (*long*)
    -   `TimerValue` (*double*)
    -   `CounterValue` (*double*)
    -   `LineStatusAll` (*long*)
    -   `TimestampLatchValue` (*long*)
    -   `PixelDynamicRangeMax` (*long*)
    -   `PixelDynamicRangeMin` (*long*)
    -   `PartSelector` (*long*)
    -   `SerialDataLength` (*long*)
    -   `OffsetY` (*long*)
    -   `OffsetX` (*long*)
    -   `CRC` (*long*)
    -   `SequencerSetActive` (*long*)
    -   `Gain` (*double*)
    -   `Height` (*long*)
    -   `Image` (*long*)
    -   `Width` (*long*)
    -   `ExposureEndLineStatusAll` (*long*)
    -   `Timestamp` (*long*) - hardware timestamp
    -   `ExposureTime` (*double*)
    -   `FrameID` (*long*) - 1-based frame index
    -   `BlackLevel` (*double*)

\

Webcam
------

Requires:

-   bonsai Vision Library

\
**`CameraCapture`** \#source\
**properties**:

-   `CaptureProperties` (*Bonsai.Vision.CapturePropertyCollection*)
-   `Index` (*int*) - index of the camera to acquire images from

\
**output** (*OpenCV.Net.IpIImage*) - 2D matrix of pixels, accepted as
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

\

All video sources
-----------------

**`VideoWriter`** \#sink\
**input** (*OpenCV.Net.IpIImage*) *-* 2D matrix of pixels\
\
**properties**:

-   `Buffered` (*bool*) - indicates whether writing should be buffered
-   `FileName` (*string*) - name of the output file or full path to the
    output file if the desired path is different from the current
    working directory. The specified file extension determines output
    format, e.g. `.avi` or `.mp4`
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

\
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

\

Tip: real-time playback rate
----------------------------

Without a hardware trigger, the acquisition frame rate might be
unstable. If the playback seems vastly different from real-time, one can
place `TimeInterval` after `VideoWriter` to measure the real frame rate
and then specify the corresponding frequency in the `FrameRate` property
of `VideoWriter`.\
\
With a hardware trigger, one can set the `FrameRate` property of
`VideoWriter` equal to the (known) trigger frequency.\

Common errors
-------------

`Runtime error: Unable to acquire camera frame`\
One possible reason is that the camera is currently open in another
software, e.g. pylonViewer or SpinView.
