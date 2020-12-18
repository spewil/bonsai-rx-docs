---
id: digital_output
title: DigitalOutput
---

**Prerequisites**:
- bonsai DAQmx Library
- NI DAQmx driver from the [NI website](https://www.ni.com/en-gb/support/downloads/drivers/download.ni-daqmx.html#348669)

**Category**: Sink

**Brief**: Writes a sequence of logical values to one or more DAQmx digital output channels

**Input** (*bool*)

**Properties**:
- `Channels` (*System.Collections.ObjectModel.Collection&lt;Bonsai.DAQmx.DigitalOutputChannelConfiguration&gt;*) - all analog output channels that the voltage signal will be fed to, specified by adding channels in the `DigitalOutputChannelConfiguration Collection Editor` and setting its parameters as appropriate:
    - `ChannelName` - can be anything
    - `Grouping` - specifies how to group digital output lines into virtual channels; if one or more ports are specified with the `Lines` parameter, this must be `OneChannelForEachLine` (instead of `OneChannelForAllLines`)
    - `Lines` - the physical digital output line on the board, selected from the drop-down list once the device is connected

**Output** (*bool*)

---

**Tip**: To generate a square pulse of type `bool`, one can repeatedly toggle a boolean at specific time intervals. The workflow might be: `Boolean` --> `Take` (`Count`: 1) --> `Delay` (\#reactive `DueTime`: 00:00:00.5 for 500 ms) --> `BitwiseNot`. Then use `Merge` to combine `Take` and `BitwiseNot`. Follow that by `Delay` (Reactive) and `Repeat`. Note that this boolean toggling will be subject to jitter of the operating system's clock, which may deem this approach inappropriate for applications requiring high temporal precision. In such cases, a combination of `FunctionGenerator` and `AnalogOutput` can  be used instead. 

---

**Common errors**:

`Runtime Error: Device cannot be accessed`
Most likely happens because the NI-DAQmx device is not connected/powered. Several other possible reasons and remedies are listed in the bonsai error message.
