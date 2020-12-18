---
id: camera_capture
title: CameraCapture
---

**Prerequisites**:
-   bonsai Vision Library

**Category**: Source

**Brief**: Acquires a sequence of images from camera with the specified index

**Properties**:
-   `CaptureProperties` (*Bonsai.Vision.CapturePropertyCollection*)
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

---

**Tip**: Write video to file using `VideoWriter`

**Tip**: To visualise the video during acquisition, install the bonsai Vision Design Library and open `Bonsai.Vision.Design.IpIImageVisualizer`from the `Image` output node of the respective image capture node

---

**Common errors**:

`Runtime error: Unable to acquire camera frame`
One possible reason is that the camera is currently open in another software.
