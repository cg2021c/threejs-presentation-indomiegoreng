# Point Light

A light that gets emitted from a single point in all directions.
A common use case for this is to replicate the light emitted from a bare lightbulb.

## PointLight

### Constructor
```c
PointLight(color : Integer, intensity : Float, distance : Number, decay : Float)
```
color - (optional) hexadecimal color of the light. Default is 0xffffff (white).
intensity - (optional) numeric value of the light's strength/intensity. Default is 1.

distance - Maximum range of the light. Default is 0 (no limit).
decay - The amount the light dims along the distance of the light. Default is 1. For physically correct lighting, set this to 2.

### Properties

#### .decay : Float
The amount the light dims along the distance of the light
In physically correct mode, decay = 2 leads to physically realistic light falloff.
Default is 1.

#### .distance : Float
Default mode — When distance is zero, light does not attenuate. When distance is non-zero, light will attenuate linearly from maximum intensity at the light's position down to zero at this distance from the light.

Physically correct mode — When distance is zero, light will attenuate according to inverse-square law to infinite distance. When distance is non-zero, light will attenuate according to inverse-square law until near the distance cutoff, where it will then attenuate quickly and smoothly to 0. Inherently, cutoffs are not physically correct.

Default is 0.0.

#### .intensity : Float
The light's intensity. Default is 1.
In physically correct mode, intensity is the luminous intensity of the light measured in candela (cd).

Changing the intensity will also change the light's power.

#### .power : Float
The light's power.
In physically correct mode, power is the luminous power of the light measured in lumens (lm).

Changing the power will also change the light's intensity.

#### .shadow : PointLightShadow
A PointLightShadow used to calculate shadows for this light.

The lightShadow's camera is set to a PerspectiveCamera with fov of 90, aspect of 1, near clipping plane at 0.5 and far clipping plane at 500.

### Methods

#### .dispose () : undefined
Override of base class's dispose. Disposes of this light's shadow.

#### .copy ( source : PointLight ) : PointLight
Copies value of all the properties from the source to this PointLight.

## PointLightHelper

This displays a helper object consisting of a spherical Mesh for visualizing a PointLight.

### Contructor
```c
PointLightHelper(light : PointLight, sphereSize : Float, color : Hex)
```
light -- The light to be visualized.
sphereSize -- (optional) The size of the sphere helper. Default is 1.

color -- (optional) if this is not the set the helper will take the color of the light.

### Properties

#### .light : PointLight
The PointLight that is being visualized.

#### .matrix : Object
Reference to the pointLight's matrixWorld.

#### .matrixAutoUpdate : Object
See Object3D.matrixAutoUpdate. Set to false here as the helper is using the pointLight's matrixWorld.

#### .color : hex
The color parameter passed in the constructor. Default is undefined. If this is changed, the helper's color will update the next time update is called.

### Methods
#### .dispose () : null
Dispose of the pointLightHelper.

#### .update () : null
Updates the helper to match the position of the .light.

## References
1. <a href="https://threejs.org/docs/index.html?q=point#api/en/lights/PointLight">The three.js PointLight documentation</a>.
2. <a href="https://threejs.org/docs/index.html?q=point#api/en/helpers/PointLightHelper">The three.js PointLightHelper documentation</a>.
