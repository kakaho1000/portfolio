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
Design an optical distance sensor using op-amps, a photodiode and an LED. Build a C# program to acquire data and display data from the distance sensor.

### Process
The project involved creating amplifiers, high-pass filters, low-pass filters and rectifiers with specified cut-off frequencies and gains using op-amps, resistors and capacitors. The output voltage is sent to an MSP430 microcontroller, and a C# program reads the voltage and converts it to the distance the photodiode is from the LED. To find the relationship between the output voltage and the distance, points for the voltage and distance were plotted to find a relation. 

<figure>
  <a href="/portfolio/assets/images/mech368window.png" class="image-popup" title="C# Data Acquisition">
    <img src="/portfolio/assets/images/mech368window.png">
  </a>
  <figcaption>C# Data Acquisiion</figcaption>
</figure>

### Results

![Optical Sensor Breadboard](./assets/images/mech368image.jpg)

<figure>
  <a href="/portfolio/assets/images/mech368image.jpg" class="image-popup" title="Optical Distance Sensor Circuit">
    <img src="/portfolio/assets/images/mech368image.jpg">
  </a>
  <figcaption>Optical Distance Sensor Circuit</figcaption>
</figure>
