---
title: "Optical Distance Sensor"
header:
    teaser: /assets/images/mech368image.jpg
excerpt: "C# program and electrical circuit that calculates how far an LED is from a photodiode"
date_text: "Nov 2023"
date: 2023-11-30
categories:
  - Class Project
  - Complete
tags:
  - Microcontrollers
  - C#
  - Electrical Prototyping
---

### Goal 
Design an optical distance sensor using op-amps, a photodiode and an LED. Build a C# program to acquire and display data from the distance sensor.

### Process
The project involved creating amplifiers, high-pass filters, low-pass filters and rectifiers with specified cut-off frequencies and gains using op-amps, resistors and capacitors. The output voltage is sent to an MSP430 microcontroller, and a C# program reads the voltage and converts it to the distance the photodiode is from the LED. 

### Results

<figure class="half">
    <a href="/portfolio/assets/images/mech368window.png" title="C# Data Acquisition Window"><img src="/portfolio/assets/images/mech368window.png"></a>
    <a href="/portfolio/assets/images/mech368image.jpg" title="Optical Distance Sensor Circuit"><img src="/portfolio/assets/images/mech368image.jpg"></a>
    <figcaption>C# Data Acquisition Window & Circuit</figcaption>
</figure>


