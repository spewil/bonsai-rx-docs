---
id: analog_input
title: AnalogInput
---

**Prerequisites**:
- bonsai DAQmx Library
- NI DAQmx driver from the [NI website](https://www.ni.com/en-gb/support/downloads/drivers/download.ni-daqmx.html#348669)

**Category**: Source

**Brief**: Generates a sequence of voltage measurements from one or more DAQmx analog input channels

**Properties**:
- `ActiveEdge`(*NationalInstruments.DAQmx.SampleClockActiveEdge*) - the edges (`Rising` or `Falling`) of the NI-DAQmx device's sample clock signal used for sample acquisition
- `BufferSize` (*int*) - the number of samples acquired in a single hardware buffer; the upper limit of the buffer (FIFO - 'first-in, first-out') depends on the DAQ board; if set to `0`, acquisition is timed by the hardware without a buffer
- `Channels` (*System.Collections.ObjectModel.Collection&lt;Bonsai.DAQmx.AnalogInputChannelConfiguration&gt;*) - all analog input channels to acquire voltage samples from, specified by adding channels in the `AnalogInputChannelConfiguration Collection Editor` and setting its parameters as appropriate:
    - `PhysicalChannel` - the physical analog input channel on the board, selected from the drop-down list once the device is connected
    - `ChannelName` - can be anything
    - `MaximumValue` - maximum voltage value expected in measurements, not to be confused with device range; limiting the input to as small a range as appropriate can improve measurement precision
    - `MinimumValue` - minimum voltage value expected in measurements, analogous to `MaximumValue`
    - `TerminalConfiguration` - input terminal configuration as [appropriate for the particular device](https://www.ni.com/documentation/en/ni-daqmx/20.1/devconsid/defaulttermconfig/); for more information about the options (`Differential`, `Pseudodifferential`, `Rse`, `Nrse`) see the [NI website](https://knowledge.ni.com/KnowledgeArticleDetails?id=kA00Z0000019QRZSA2&l=en-GB)
    - `VoltageUnits` - the units used to return voltage measurement from the channel; for more information about the options (`Volts`, `FromCustomScale`, `FromTeds`), see the [NI website](https://www.ni.com/documentation/en/ni-daqmx/latest/daqmx-prop-ref/task-ai-voltage-units-1094/)
- `SampleMode` (*NationalInstruments.DAQmx.SampleQuantityMode*) - specifies whether samples are acquired until the task is stopped (`SampleContinuous`) or a specific number of samples, set by `BufferSize`, is reached (`FiniteSamples`)
- `SampleRate` (*double*) - sampling rate in samples per second. It should be greater than twice the highest frequency component expected in the measured signal, respecting the Nyquist Sampling Theorem. The upper limit depends of the DAQ board.
- `SamplesPerRead` (*int*) - the number of samples bonsai tries to read at any time; the default value of `-1` means that all available data, set by `BufferSize`, are acquired; positive values smaller than `BufferSize` means that data from the hardware buffer are read more often
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

:::tip
To avoid missing data due to subscription delays, this node should be initialised before any nodes whose output `AnalogInput` is supposed to acquire. For example, if the output of `AnalogOutput` is fed back into `AnalogInput`, the latter should be placed higher in the workflow than the former.
:::

:::tip
Write data to file using `MatrixWriter`
:::

:::caution
`Runtime Error: Device cannot be accessed`

Most likely happens because the NI-DAQmx device is not connected/powered. Several other possible reasons and remedies are listed in the bonsai error message.
:::
