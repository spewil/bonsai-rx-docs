---
id: function_generator
title: FunctionGenerator
---

**Prerequisites**:
-   bonsai Dsp Library

**Category**: Source

**Brief**: Generates signal waveform following any of a set of common periodic functions.

**Input** - Accepts several input types (integer, string, tuple, array)

**Properties**:
- `Amplitude`(*double*) - the amplitude of the signal waveform in either direction from zero, e.g. a value of `1` produces a waveform in range `[-1,1]`
- `BufferLength` (*int*) - the number of samples in each output buffer
- `Depth` (*System.Nullable&lt;OpenCV.Net.Depth&gt;*) - target bit depth of individual buffer elements (optional, choose from `U8`, `S8`, `U16`, `S16`, `S32`, `F32`, `F64`)
- `Frequency` (*double*) - frequency of the signal waveform in Hz
- `Offset` (*double*) - DC offset of the signal waveform (optional)
- `Phase` (*double*) - phase offset of the signal waveform in radians (optional)
- `SampleRate` (*int*) - the number of samples generated in Hz
- `Waveform` (*Bonsai.Dsp.FunctionWaveform*) - the periodic waveform used to sample the signal, choose from `Sine`, `Square`, `Triangular`, `Sawtooth`

**Output** (*OpenCV.Net.Mat*) - a `1 x N` array where `N` is `BufferLength`

:::tip
To limit the waveform to positive values, use equal values for `Amplitude` and `Offset`
:::

:::tip
To produce a rectangular waveform with variable duty cycles, use `Sawtooth` waveform type, followed by a `Threshold` (Dsp) node
:::