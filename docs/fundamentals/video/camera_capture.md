---
id: camera_capture
title: CameraCapture
---

**Prerequisites**:
-   bonsai Vision Library

**Category**: Source

**Brief**: Acquires a sequence of images from a DirectShow-compatible camera with the specified index. 

**Properties**:
-   `CaptureProperties` (*Bonsai.Vision.CapturePropertyCollection*) - OpenCV capture properties, which can be set by opening the *CapturePropertyAssignment Collection Editor* and adding a new member
	- `Property` - a drop-down list of OpenCV capture properties; whether a given property is configurable depends on the particular camera
	- `Value` - value of the selected property
-   `Index` (*int*) - index of the camera to acquire images from

**Output** (*OpenCV.Net.IpIImage*) - 2D matrix of pixels, accepted as input by `VideoWriter`
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

:::tip
Write video to file using `VideoWriter`
:::

:::tip
To visualise the video during acquisition, install the bonsai Vision Design Library and open `Bonsai.Vision.Design.IplImageVisualizer`from the `CameraCapture` node
:::

:::tip
If `CameraCapture` acquires frames at a high rate and is followed by a long processing pipeline, processing delays may result in dropped frames. This is because `CameraCapture` can only stream a new frame once the downstream processing of the previous frame has completed. Up to a limit, this issue can be solved by including buffers.  
:::

:::tip
For industrial cameras, use dedicated Bonsai libraries:

|    **Camera**   |       **Bonsai**       |
|:---------------:|:----------------------:|
|      `Basler`     |      `Pylon Library`     |
|       `FLIR`      |    `Spinnaker Library`   |
| `Intel RealSense` |    `RealSense Library`   |
|       `PCO`      |      `PCO Library*`     |
|   `PointGrey`    |    `PointGrey Library`   |
|      `PSEye`      | `CLEyeMulticam Library`  |
|       `uEye`      |      `uEye Library`      |

* PCO library is not distributed yet (as of Dec'20), but can be compiled from the [github repository](https://github.com/bonsai-rx/pco). 
:::

:::caution
`Runtime error: Unable to acquire camera frame`

One possible reason is that the camera is currently open in another software.
:::
