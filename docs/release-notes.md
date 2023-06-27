---
id: latest
title: Release Notes
sidebar_position: 2
---

## v1.2 (June 27, 2023)
Features:

* Integration with LTspice circuit simulator
* Added 6 new ferrite materials (FS1000, N95, N96, N97, 3F3, 3F36)

Improvements:

* Hysteresis loss calculation can now be enabled without full thermal analysis of the ferrite
* Improved convergence if voltage excitation is used

Bugfixes:

* Fixed a bug which blocked PDF report from being generated
* Mutual data in .csv file is no longer being duplicated
* Fixed a bug which crashed air domain generation if imported geometry contained smaller holes
* Fixed a bug where, if adaptive time step is used, steps in the middle were not saved
* Fixed an issue which caused unphysical ferrite heating in some cases



## v1.1 (March 17, 2023)

Features:

* Permanent magnets
* Phase shift for transmitter coils
* Added current, voltage and received power values in .csv file

Improvements:

* Improved loss calculation (separate Eddy, Hysteresis and Total losses)
* Improved automatic meshing algorithms


## v1.0 (February 9, 2023)

Features:

* Stranded coils
* Ferrite and electrically conductive object heating
* Geometry parameterization & parametric study
* Easy motion definition
* CENOS automatic & manual meshing
* Magnetic field distribution
* Loss calculation
* Temperature field distribution
* Q factor
* Coupling coefficient
* Mutual inductance
* Resistance
* Total losses
