---
title: "UBC Rapid Filament Shredder"
header:
    teaser: /portfolio_images/shredder_blade_sim.png
excerpt: "Design, calculations, and verification for shaft and blades for a PLA filament shredder"
date_text: "Dec 2024"
categories:
  - Design Team
  - Complete
tags:
  - MATLAB
  - SOLIDWORKS
  - Machine Design
---

### Goal 
Design the shaft, blades and bushings/bearings for a filament shredder. The following assumptions were made conservatively 

- Only PLA will be shredded
- The maximum thickness of PLA will be 5mm
- The shredded material will make full contact with the blade's shredding area

### Process
Used MATLAB to calculate shear force and bending diagrams on shaft, as well as find minimum shaft diameter. 

Modelled blades and shaft in SOLIDWORKS. Performed static simulations on blades. Sourced parts from metal supermarkets and waterjet cut blades. Sourced needle roller thrust bearings, radial bearings, and flexible shaft coupling. Used 4140 Alloy Steel 12in from metal supermarket. 
![Shredder Blade](/portfolio_images/shredder_bending_diagram.png)

### Results
Specs

### Retrospection
Should have analyzed for resonant frequency, as well as fatigue. Shaft should be filleted at changes in diameter to reduce stress concentrations. 