---
title: "Optical Distance Sensor"
header:
    teaser: /assets/images/mech368teaser.jpg
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
- Design an optical distance sensor using op-amps, a photodiode and an LED
- Build an interactive C# program to acquire and display data from the distance sensor

### Process
- Calculated resistor and capacitor values to create amplifiers, filers and rectifiers with op-amps
- Output voltage from circuit to MSP430 microcontroller
- Measured output voltage as a function of distance for 25 points to determine relationship
- Created C# program that reads voltage from microcontroller and converts it to distance 

### Results

<figure class="half">
    <a href="/portfolio/assets/images/mech368window.png" title="C# Data Acquisition Window"><img src="/portfolio/assets/images/mech368window.png"></a>
    <a href="/portfolio/assets/images/mech368image.jpg" title="Optical Distance Sensor Circuit"><img src="/portfolio/assets/images/mech368image.jpg"></a>
    <figcaption>C# Data Acquisition Window & Circuit</figcaption>
</figure>
