---
id: spinnaker_capture
title: SpinnakerCapture
---

**Prerequisites**:
-   bonsai Spinnaker Library
-   Spinnaker SDK 1.29.0.5 from the [FLIR website](https://meta.box.lenovo.com/v/link/view/a1995795ffba47dbbe45771477319cc3)

**Category**: Source

**Brief**: Acquires a sequence of images from a FLIR camera using the Spinnaker software

**Properties**:
-   `ColorProcessing` - methodDefault vs. NoColorProcessing
-   `Index` - index of the camera to acquire images from

**Output** (*Bonsai.Spinnaker.SpinnakerDataFrame*):
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
    -   `InferenceBoundingBoxResult`(*SpinnakerNET.ManagedInferenceBoundingBoxResult*)
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
    -   `LineStatusAll` (*long*) - state of GPIO pins
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

---

**Tip**: Write video to file using `VideoWriter`

**Tip**: To visualise the video during acquisition, install the bonsai Vision Design Library and open `Bonsai.Vision.Design.IpIImageVisualizer`from the `Image` output node of the respective image capture node

---

**Common errors**:

`Runtime error: Unable to acquire camera frame`
One possible reason is that the camera is currently open in SpinView.
