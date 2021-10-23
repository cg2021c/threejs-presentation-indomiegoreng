# Spot Light
This light gets emitted from a single point in one direction, along a cone that increases in size the further from the light it gets.

## SpotLight
### Constructor
```c
SpotLight(color : Integer, intensity : Float, distance : Float, angle : Radians, penumbra : Float, decay : Float)
```
color - (optional) hexadecimal color of the light. Default is 0xffffff (white).
intensity - (optional) numeric value of the light's strength/intensity. Default is 1.

distance - Maximum range of the light. Default is 0 (no limit).
angle - Maximum angle of light dispersion from its direction whose upper bound is Math.PI/2.
penumbra - Percent of the spotlight cone that is attenuated due to penumbra. Takes values between zero and 1. Default is zero.
decay - The amount the light dims along the distance of the light.

### Properties

#### .angle : Float
Maximum extent of the spotlight, in radians, from its direction. Should be no more than Math.PI/2. The default is Math.PI/3.

#### .castShadow : Boolean
If set to true light will cast dynamic shadows. Warning: This is expensive and requires tweaking to get shadows looking right. See the SpotLightShadow for details. The default is false.

#### .decay : Float
The amount the light dims along the distance of the light.
In physically correct mode, decay = 2 leads to physically realistic light falloff. The default is 1.

#### .distance : Float
Default mode — When distance is zero, light does not attenuate. When distance is non-zero, light will attenuate linearly from maximum intensity at the light's position down to zero at this distance from the light.

Physically correct mode — When distance is zero, light will attenuate according to inverse-square law to infinite distance. When distance is non-zero, light will attenuate according to inverse-square law until near the distance cutoff, where it will then attenuate quickly and smoothly to 0. Inherently, cutoffs are not physically correct.

Default is 0.0.

#### .intensity : Float

The light's intensity. Default is 1.
In physically correct mode, intensity is the luminous intensity of the light measured in candela (cd).

Changing the power will also change the light's intensity.

#### .penumbra : Float

Percent of the spotlight cone that is attenuated due to penumbra. Takes values between zero and 1. The default is 0.0.

#### .position : Vector3
This is set equal to Object3D.DefaultUp (0, 1, 0), so that the light shines from the top down.

#### .power : Float
The light's power.
In physically correct mode, power is the luminous power of the light measured in lumens (lm).

Changing this will also change the light's intensity.

#### .shadow : SpotLightShadow
A SpotLightShadow used to calculate shadows for this light.

#### .target : Object3D

The Spotlight points from its position to target.position. The default position of the target is (0, 0, 0).
Note: For the target's position to be changed to anything other than the default, it must be added to the scene using

```c
scene.add( light.target );
```

This is so that the target's matrixWorld gets automatically updated each frame.

It is also possible to set the target to be another object in the scene (anything with a position property), like so:

```c
const targetObject = new THREE.Object3D();
scene.add(targetObject);

light.target = targetObject;
```
The spotlight will now track the target object.

### Methods

#### .dispose () : undefined
Override of base class's dispose. Disposes of this light's shadow.

#### .copy ( source : SpotLight ) : SpotLight
Copies value of all the properties from the source to this SpotLight.

## References
1. <a href="https://threejs.org/docs/?q=spotlight#api/en/lights/SpotLight">The three.js SpotLight documentation</a>.
