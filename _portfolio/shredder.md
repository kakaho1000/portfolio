---
title: "UBC Rapid Filament Shredder"
header:
    teaser: /assets/images/shredder_assembly.png
excerpt: "Design, verification, and sourcing of parts for filament shredding system"
date_text: "Jan 2025"
date: 2025-01-31
categories:
  - Design Team
  - Complete
tags:
  - MATLAB
  - SOLIDWORKS
  - Machine Design
---

### Goal 
Design the shaft and blades for a filament shredder, sourcing other necessary parts like bearings or couplings. The following assumptions were made:

- Only PLA will be shredded
- The maximum thickness of PLA will be 5mm
- The shredded material will make full contact with the blade's shredding area

### Process
Research was done on typical filament shredders, including blade designs, number of blades, size, and typical issues. 
Used MATLAB to calculate shear force and bending diagrams on shaft, as well as find minimum shaft diameter. 

Modelled blades and shaft in SOLIDWORKS. Performed static simulations on blades. Sourced parts from metal supermarkets and waterjet cut blades.
<figure>
  <a href="/portfolio/assets/images/shredder_blade_sim.png" class="image-popup" title="Static Blade Simulation">
    <img src="/portfolio/assets/images/shredder_blade_sim.png">
  </a>
</figure>

### Results
The final design involved a hexagonal shaft with 15 dual-sided blades, mounted with needle roller thrust bearings and radial bearings. See updates on the project at https://ubc-rapid.com/#/filament_recycler 

### Retrospection
The system should have been analyzed to find its resonant frequencies, as well as fatigue. Fillets were also not included in the original design for the shaft which would have led to high stress concentrations at the changes in diameter.