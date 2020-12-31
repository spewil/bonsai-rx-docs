---
id: convert_scale
title: ConvertScale
---

**Prerequisites**:
-   bonsai Dsp Library

**Category**: Transform

**Brief**: Converts the input array into the specified bit depth with optional linear transformations.

**Input** (*OpenCV.Net.Mat*, *OpenCV.Net.IplImage*, ...) - an array

**Properties**:
- `Depth`(*System.Nullable&lt;OpenCV.Net.Depth&gt;*) - target bit depth of individual array elements (optional, can choose from `U8`, `S8`, `U16`, `S16`, `S32`, `F32`, `F64`); if left empty, leaves the input depth unchanged
- `Scale` (*double*) - scale factor applied to individual array elements (optional)
- `Shift` (*double*) - value to be added to individual array elements (optional)

**Output** (*OpenCV.Net.Mat*, *OpenCV.Net.IplImage*, ...) - an array of the same shape and type as the input array

---

**Tip**: `ConvertScale` with `Scale` = 0 can be used to stop input transmission, e.g. to drive pins/ports to LOW state at the end of a workflow 

**Tip**: Use `ConvertScale` to convert image data with depth greater than 8 bits to `U8`, which is accepted as input by `VideoWriter`. `Scale` and `Shift` arguments can be set accordingly (based on the expected pixel range) to maintain image appearance as much as possible.
