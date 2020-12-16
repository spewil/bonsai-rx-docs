---
id: daqmx_integration
title: Interfacing with NI-DAQ Devices
---

Requires:
- bonsai DAQmx Library
- NI DAQmx driver from the [NI website](https://www.ni.com/en-gb/support/downloads/drivers/download.ni-daqmx.html#348669)

---

### **`AnalogInput`** \#source
generates a sequence of voltage measurements from one or more DAQmx analog input channels

**properties**:
- `ActiveEdge`(*NationalInstruments.DAQmx.SampleClockActiveEdge*) - the edges (`Rising` or `Falling`) of the NI-DAQmx device's sample clock signal used for sample acquisition
- `BufferSize` (*int*) - the number of samples acquired in a single hardware buffer; the upper limit of the buffer (FIFO - 'first-in, first-out') depends on the DAQ board; if set to `0`, acquisition is timed by the hardware without a buffer
- `Channels` (*System.Collections.ObjectModel.Collection<Bonsai.DAQmx.AnalogInputChannelConfiguration*) - all analog input channels to acquire voltage samples from, specified by adding channels in the `AnalogInputChannelConfiguration Collection Editor` and setting its parameters as appropriate:
    - `PhysicalChannel` - the physical analog input channel on the board, selected from the drop-down list once the device is connected
    - `ChannelName` - can be anything
    - `MaximumValue` - maximum voltage value expected in measurements, not to be confused with device range; limiting the input to as small a range as appropriate can improve measurement precision
    - `MinimumValue` - minimum voltage value expected in measurements, analogous to `MaximumValue`
    - `TerminalConfiguration` - input terminal configuration as [appropriate for the particular device](https://www.ni.com/documentation/en/ni-daqmx/20.1/devconsid/defaulttermconfig/); for more information about the options (`Differential`, `Pseudodifferential`, `Rse`, `Nrse`) see the [NI website](https://knowledge.ni.com/KnowledgeArticleDetails?id=kA00Z0000019QRZSA2&l=en-GB)
    - `VoltageUnits` - the units used to return voltage measurement from the channel; for more information about the options (`Volts`, `FromCustomScale`, `FromTeds`), see the [NI website](https://www.ni.com/documentation/en/ni-daqmx/latest/daqmx-prop-ref/task-ai-voltage-units-1094/)
- `SampleMode` (*NationalInstruments.DAQmx.SampleQuantityMode*) - specifies whether samples are acquired until the task is stopped (`SampleContinuous`) or a specific number of samples, set by `BufferSize`, is reached (`FiniteSamples`)
- `SampleRate` (*double*) - sampling rate in samples per second; the upper limit depends of the DAQ board
- `SamplesPerRead` (*int*) - the number of samples bonsai tries to read at any time; the default value of `-1` means that all available data, set by `BufferSize`, are acquired; positive values smaller than `BufferSize` means that data from the hardware buffer are read more often
- `SignalSource` (*string*) - source terminal of the clock; if not specified, the internal clock of the device will be used

**output** (*OpenCV.Net.Mat*): 
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

**tip**: To avoid missing data due to subscription delays, this node should be initialised before any nodes whose output `AnalogInput` is supposed to acquire. For example, if the output of `AnalogOutput` is fed back into `AnalogInput`, the latter should be placed higher in the workflow than the former.

**tip**: write data to file using `MatrixWriter`

---

### **`AnalogOutput`** \#sink
writes a sequence of sample buffer to one or more DAQmx analog output channels

**input** (*OpenCV.Net.Mat*) - `C x N` array where `C` is the number of connected analog output channels and `N` is the buffer size

**properties**: 
- `ActiveEdge`(*NationalInstruments.DAQmx.SampleClockActiveEdge*) - the edges (`Rising` or `Falling`) of the NI-DAQmx device's sample clock signal used for signal generation
- `BufferSize` (*int*) - the number of samples to generate for a single hardware buffer; it should be matched to the buffer size of the input nodes that define the analog output signal; the upper limit of the buffer (FIFO - 'first-in, first-out') depends on the DAQ board; it should be matched with
- `Channels` (*System.Collections.ObjectModel.Collection<Bonsai.DAQmx.AnalogOutputChannelConfiguration*) - all analog output channels that the voltage signal will be fed to, specified by adding channels in the `AnalogOutputChannelConfiguration Collection Editor` and setting its parameters as appropriate:
    - `PhysicalChannel` - the physical analog output channel on the board, selected from the drop-down list once the device is connected
    - `ChannelName` - can be anything
    - `MaximumValue` - maximum voltage value expected in the signal, not to be confused with device range
    - `MinimumValue` - minimum voltage value expected in the signal, analogous to `MaximumValue`
    - `VoltageUnits` - the units used to generate a voltage signal to the channel; for more information about the options (`Volts` or `FromCustomScale`), see the [NI website](https://zone.ni.com/reference/en-XX/help/370471AM-01/mxcprop/attr1184/)
- `SampleMode` (*NationalInstruments.DAQmx.SampleQuantityMode*) - specifies whether samples are generated until the task is stopped (`SampleContinuous`) or a specific number of samples, set by `BufferSize`, is reached (`FiniteSamples`)
- `SampleRate` (*double*) - the number of samples generated per second; the upper limit depends of the DAQ board
- `SignalSource` (*string*) - source terminal of the clock; if not specified, the internal clock of the device will be used

**output** (*OpenCV.Net.Mat*): 
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

**tip**: produce arbitrary input signals using `FunctionGenerator`

**tip**: independent signals of `OpenCV.Net.Mat` type (`1 x N` arrays) can be merged using `Zip` --> `Concat` (\#Dsp)

---

### **`DigitalOutput`** \#sink
writes a sequence of logical values to one or more DAQmx digital output channels

**input** (*bool*)

**properties**:
- `Channels` (*System.Collections.ObjectModel.Collection<Bonsai.DAQmx.DigitalOutputChannelConfiguration*) - all analog output channels that the voltage signal will be fed to, specified by adding channels in the `DigitalOutputChannelConfiguration Collection Editor` and setting its parameters as appropriate:
    - `ChannelName` - can be anything
    - `Grouping` - specifies how to group digital output lines into virtual channels; if one or more ports are specified with the `Lines` parameter, this must be `OneChannelForEachLine` (instead of `OneChannelForAllLines`)
    - `Lines` - the physical digital output line on the board, selected from the drop-down list once the device is connected

**output** (*bool*)

**tip**: To generate a square pulse of type `bool`, one can repeatedly toggle a boolean at specific time intervals. The workflow might be: `Boolean` --> `Take` (`Count`: 1) --> `Delay` (\#reactive `DueTime`: 00:00:00.5 for 500 ms) --> `BitwiseNot`. Then use `Merge` to combine `Take` and `BitwiseNot`. Follow that by `Delay` (\#reactive) and `Repeat`. Note that this boolean toggling will be subject to jitter of the operating system's clock, which may deem this approach inappropriate for applications requiring high temporal precision. In such cases, a combination of `FunctionGenerator` and `AnalogOutput` can  be used instead. 

---

### Common errors

`Runtime Error: Device cannot be accessed`
Most likely happens because the NI-DAQmx device is not connected/powered. Several other possible reasons and remedies are listed in the bonsai error message.

`Runtime Error: Requested value is not a supported valuue for this property. The property valuue may be invalid because it conflicts with another property.`
With some NI-DAQmx boards (e.g. USB-6341), this is caused by the workflow containing multiple `AnalogOutput` nodes. Having to use a single `AnalogOutput` node means that the channel non-specific parameters (e.g. `SampleMode`) will be the same for all channels. 
