---
id: key_down
title: KeyDown
---

**Prerequisites**:
-   bonsai Windows Input Library

**Category**: Source

**Brief**: Produces a sequence of events whenever a keyboard key is pressed. 

**Properties**:
-   `Filter` (*System.Windows.Forms.Keys*) - the key to be observed; can be used in conjunction with modifiers `Ctrl`, `Shift`, `Alt`; if left empty, all pressed keys are detected 
-   `SuppressRepetitions` (*bool*) - indicates whether to ignore character repetitions when a key is held down

**Output** (*System.Windows.Forms.Keys*) - returns the pressed key if allowed by `Filter`


:::tip
In most circumstances, `KeyDown` from bonsai Shaders Library is preferable. 
:::

:::tip
Two `KeyDown` nodes with distinct `Filter` properties can be used to start and stop the output of another observable sequence, such as that produced by `FunctionGenerator` in the example below. `Int` nodes have `Value` parameters set to `1` and `0` to toggle the `Scale` property of `ConvertScale`. 
 
![Key press example](images/key_down_workflow_example.svg)
:::