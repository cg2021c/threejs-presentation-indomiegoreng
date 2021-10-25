# Point Light

A light that gets emitted from a single point in all directions.
A common use case for this is to replicate the light emitted from a bare lightbulb.

<p align="center">
<img src="https://user-images.githubusercontent.com/8071604/138560267-c8847e8e-f72f-4fb6-9c44-7850f9b97183.png">
  
Image Source: https://www.teahub.io/viewwp/ibTJxwi_light-bulb-swaying-against-wall-in-dark-room/
</p>

## PointLight

### Constructor
We can create PointLight instance by using this constructor.

```c
PointLight(color : Integer, intensity : Float, distance : Number, decay : Float)
```

The parameters are:
| Parameter | Is it optional? | Description |
| - | - | - |
| color | ✔️ | Hexadecimal color of the light. Default is 0xffffff (white). |
| intensity | ✔️ | Numeric value of the light's strength/intensity. Default is 1. |
| distance | ❎ | Maximum range of the light. Default is 0 (no limit). |
| decay | ❎ | The amount the light dims along the distance of the light. Default is 1. For physically correct lighting, set this to 2. |

### Properties

#### .decay : Float
The amount the light dims along the distance of the light
In physically correct mode, decay = 2 leads to physically realistic light falloff.
Default is 1.

| Decay | Image |
| - | - |
| 1 | ![image](https://user-images.githubusercontent.com/8071604/138554312-71e07060-4d97-4fff-9265-24055ed26c35.png) |
| 2 | ![image](https://user-images.githubusercontent.com/8071604/138554317-2f2dad3e-9953-44be-a021-4b2715fef16e.png) |
| 3 | ![image](https://user-images.githubusercontent.com/8071604/138554322-3f3058e8-5a39-44d1-aef1-ac81e68dbc70.png) |
| 6 | ![image](https://user-images.githubusercontent.com/8071604/138554329-8fcaae19-5da5-478d-83a8-4c2b15d3c1b9.png) |
| 20 | ![image](https://user-images.githubusercontent.com/8071604/138554337-b8a842f7-3e74-48e0-b057-c4b7939df725.png) |

#### .distance : Float
Default mode — When distance is zero, light does not attenuate. When distance is non-zero, light will attenuate linearly from maximum intensity at the light's position down to zero at this distance from the light.

Physically correct mode — When distance is zero, light will attenuate according to inverse-square law to infinite distance. When distance is non-zero, light will attenuate according to inverse-square law until near the distance cutoff, where it will then attenuate quickly and smoothly to 0. Inherently, cutoffs are not physically correct.

Default is 0.0.

| Distance | Image |
| - | - |
| 40 | ![image](https://user-images.githubusercontent.com/8071604/138554295-5e8958b6-68f4-446b-898b-acf6fb7cc166.png) |
| 100 | ![image](https://user-images.githubusercontent.com/8071604/138554135-ad4e60de-21f3-4588-ae97-8bbc91a72a71.png) |
| 200 | ![image](https://user-images.githubusercontent.com/8071604/138554271-dd2464d1-5b58-4ee2-a721-fcb0afbb9d52.png) |
| 300 | ![image](https://user-images.githubusercontent.com/8071604/138554276-f3e60279-4a3f-4208-b5f1-21a9e5ae2515.png) |

#### .intensity : Float
The light's intensity. Default is 1.
In physically correct mode, intensity is the luminous intensity of the light measured in candela (cd).

Changing the intensity will also change the light's power.

| Intensity | Image |
| - | - |
| 1 | ![image](https://user-images.githubusercontent.com/8071604/138554135-ad4e60de-21f3-4588-ae97-8bbc91a72a71.png) |
| 2 | ![image](https://user-images.githubusercontent.com/8071604/138554191-a7d8025a-2914-4436-b2a4-2aabc086280e.png) |
| 3 | ![image](https://user-images.githubusercontent.com/8071604/138554209-e0125e1a-6a2d-4cf0-bab0-d243117fa192.png) |
| 6 | ![image](https://user-images.githubusercontent.com/8071604/138554222-aedfddaa-c568-4462-a6b7-59bc5975fea2.png) |
| 100 | ![image](https://user-images.githubusercontent.com/8071604/138554235-176b442a-b130-490d-81ae-3cfc0d8574c5.png) |

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
