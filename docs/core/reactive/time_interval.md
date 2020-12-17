---
id: time_interval
title: "TimeInterval"
---

**Category**: Combinator

**Brief**: Records the time interval between consecutive elements produced by the sequence.

**Input**: Accepts many input types (integers, strings, tuples, arrays) 

**Output** (*System.Reactive.TimeInterval<input_type>*):
- `Interval` (*System.TimeSpan*)
    - `Ticks` (*long*)
    - `Days` (*int*)
    - `Hours` (*int*)
    - `Milliseconds` (*int*)
    - `Minutes` (*int*)
    - `Seconds` (*int*)
    - `TotalDays` (*double*)
    - `TotalHours` (*double*)
    - `TotalMilliseconds` (*double*)
    - `TotalMinutes` (*double*)
    - `TotalSeconds` (*double*)