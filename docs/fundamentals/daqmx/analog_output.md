---
id: analog_output
title: AnalogOutput
---

**Prerequisites**:
- bonsai DAQmx Library
- NI DAQmx driver from the [NI website](https://www.ni.com/en-gb/support/downloads/drivers/download.ni-daqmx.html#348669)

**Category**: Sink

**Brief**: Writes a sequence of sample buffer to one or more DAQmx analog output channels

**Input** (*OpenCV.Net.Mat*) - `C x N` array where `C` is the number of connected analog output channels and `N` is the buffer size

**Properties**: 
- `ActiveEdge`(*NationalInstruments.DAQmx.SampleClockActiveEdge*) - the edges (`Rising` or `Falling`) of the NI-DAQmx device's sample clock signal used for signal generation
- `BufferSize` (*int*) - the number of samples to generate for a single hardware buffer; it should be matched to the buffer size of the input nodes that define the analog output signal; the upper limit of the buffer (FIFO - 'first-in, first-out') depends on the DAQ board; it should be matched with
- `Channels` (*System.Collections.ObjectModel.Collection&lt;Bonsai.DAQmx.AnalogOutputChannelConfiguration&gt;*) - all analog output channels that the voltage signal will be fed to, specified by adding channels in the `AnalogOutputChannelConfiguration Collection Editor` and setting its parameters as appropriate:
    - `PhysicalChannel` - the physical analog output channel on the board, selected from the drop-down list once the device is connected
    - `ChannelName` - can be anything
    - `MaximumValue` - maximum voltage value expected in the signal, not to be confused with device range
    - `MinimumValue` - minimum voltage value expected in the signal, analogous to `MaximumValue`
    - `VoltageUnits` - the units used to generate a voltage signal to the channel; for more information about the options (`Volts` or `FromCustomScale`), see the [NI website](https://zone.ni.com/reference/en-XX/help/370471AM-01/mxcprop/attr1184/)
- `SampleMode` (*NationalInstruments.DAQmx.SampleQuantityMode*) - specifies whether samples are generated until the task is stopped (`SampleContinuous`) or a specific number of samples, set by `BufferSize`, is reached (`FiniteSamples`)
- `SampleRate` (*double*) - the number of samples generated per second; the upper limit depends of the DAQ board
- `SignalSource` (*string*) - source terminal of the clock; if not specified, the internal clock of the device will be used

**Output** (*OpenCV.Net.Mat*): 
-   `IsInvalid` (*bool*)
-   `ElementType` (*int*)
-   `Size` (*OpenCV.Net.Size*)
    -   `Width` (*int*)
    -   `Height` (*int*)
- `Rows` (*int*)
- `Cols` (*int*)
- `Step` (*int*)
-   `Depth` (*OpenCV.Net.Depth*)
-   `Channels` (*int*)
-   `ElementSize` (*int*)
- `Data` (*System.IntPtr*)
-   `IsClosed` (*bool*)

---

**Tip**: produce arbitrary input signals using `FunctionGenerator`

**Tip**: independent signals of `OpenCV.Net.Mat` type (`1 x N` arrays) can be merged using `Zip` --> `Concat` (\#Dsp)

---

**Common errors**:

`Runtime Error: Device cannot be accessed`
Most likely happens because the NI-DAQmx device is not connected/powered. Several other possible reasons and remedies are listed in the bonsai error message.

`Runtime Error: Requested value is not a supported value for this property. The property value may be invalid because it conflicts with another property.`
With some NI-DAQmx boards (e.g. USB-6341), this is caused by the workflow containing multiple `AnalogOutput` nodes. Having to use a single `AnalogOutput` node means that the channel non-specific parameters (e.g. `SampleMode`) will be the same for all channels. 

