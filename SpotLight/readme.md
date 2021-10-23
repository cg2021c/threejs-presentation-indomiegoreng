# Spot Light
This light gets emitted from a single point in one direction, along a cone that increases in size the further from the light it gets.

<p align="center">
    <img src="https://user-images.githubusercontent.com/8071604/138557902-0a987575-b8eb-4689-8b49-666eb07b9434.jpg" alt="Spotlight">
  
    Image Source: https://id.pinterest.com/pin/570972059010532763/
</p>

## SpotLight
### Constructor
We can make SpotLight instance by using this constructor.

```c
SpotLight(color : Integer, intensity : Float, distance : Float, angle : Radians, penumbra : Float, decay : Float)
```

The parameters are:
| Parameter | Is it optional? | Description |
| - | - | - |
| color | ✔️ | Hexadecimal color of the light. Default is 0xffffff (white). |
| intensity | ✔️ | Numeric value of the light's strength/intensity. Default is 1. |
| distance | ❎ | crossMaximum range of the light. Default is 0 (no limit). |
| angle | ❎ | Maximum angle of light dispersion from its direction whose upper bound is Math.PI/2. |
| enumbra | ❎ | Percent of the spotlight cone that is attenuated due to penumbra. Takes values between zero and 1. Default is zero. |
| decay | ❎ | The amount the light dims along the distance of the light. |

### Properties

#### .angle : Float
Maximum extent of the spotlight, in radians, from its direction. Should be no more than Math.PI/2. The default is Math.PI/3.

| Angle | Image |
| - | - |
| Math.PI / 3 | ![image](https://user-images.githubusercontent.com/8071604/138558400-aa8f5f24-1960-465f-840e-ba8abe159065.png) |
| Math.PI / 4 | ![image](https://user-images.githubusercontent.com/8071604/138558435-b084371c-f32b-4cb1-9101-fea4497f3e3b.png) | 
| Math.PI / 5 | ![image](https://user-images.githubusercontent.com/8071604/138558472-922c4dbb-d955-4f1b-a06d-d4eedd2e8d31.png) |
| Math.PI / 10 | ![image](https://user-images.githubusercontent.com/8071604/138558454-8b5ca907-849f-424f-9ff8-647f3d5b397c.png) |

#### .castShadow : Boolean
If set to true light will cast dynamic shadows. Warning: This is expensive and requires tweaking to get shadows looking right. See the SpotLightShadow for details. The default is false.

| Cast Shadow | Image |
| - | - |
| True | ![image](https://user-images.githubusercontent.com/8071604/138559508-2d05ec9c-535f-4df1-9e33-17ec7da88afb.png) |
| False | ![image](https://user-images.githubusercontent.com/8071604/138559530-1be3c035-ee4f-41a0-a602-27f480437cd6.png) |

#### .decay : Float
The amount the light dims along the distance of the light.
In physically correct mode, decay = 2 leads to physically realistic light falloff. The default is 1.

| Decay | Image |
| - | - |
| 1 | ![image](https://user-images.githubusercontent.com/8071604/138559803-90c9d908-bed0-4f2c-847a-c15477c24e94.png) |
| 2 | ![image](https://user-images.githubusercontent.com/8071604/138559818-32358bcf-444e-4fba-a1ee-c0bda247f29d.png) |

#### .distance : Float
Default mode — When distance is zero, light does not attenuate. When distance is non-zero, light will attenuate linearly from maximum intensity at the light's position down to zero at this distance from the light.

Physically correct mode — When distance is zero, light will attenuate according to inverse-square law to infinite distance. When distance is non-zero, light will attenuate according to inverse-square law until near the distance cutoff, where it will then attenuate quickly and smoothly to 0. Inherently, cutoffs are not physically correct.

Default is 0.0.

| Distance | Image |
| - | - |
| 250 | ![image](https://user-images.githubusercontent.com/8071604/138559876-9ca67f10-9d3f-4dd7-a508-4d776a365357.png) |
| 500 | ![image](https://user-images.githubusercontent.com/8071604/138559865-2280820b-1ebb-46d5-b3be-9cce09c760e7.png) |
| 1000 | ![image](https://user-images.githubusercontent.com/8071604/138559848-f2428ca4-2bda-495e-9d81-62d6136d407d.png) |
| 2000 | ![image](https://user-images.githubusercontent.com/8071604/138559888-4bc95e4e-d17a-432e-b2e5-07b176e5d928.png) |


#### .intensity : Float

The light's intensity. Default is 1.
In physically correct mode, intensity is the luminous intensity of the light measured in candela (cd).

Changing the power will also change the light's intensity.

| Intensity | Image |
| - | - |
| 0.1 | ![image](https://user-images.githubusercontent.com/8071604/138559917-7696e3b1-db0b-4219-896e-2235227acc27.png) |
| 0.5 | ![image](https://user-images.githubusercontent.com/8071604/138559933-4d681032-e539-4890-85e7-6d21c1e855c8.png) |
| 0.9 | ![image](https://user-images.githubusercontent.com/8071604/138559947-e1d7c0cc-8517-43fb-918e-3c0bddaf0e42.png) |

#### .penumbra : Float

Percent of the spotlight cone that is attenuated due to penumbra. Takes values between zero and 1. The default is 0.0.

| Penumbra | Image |
| - | - |
| 0.2 | ![image](https://user-images.githubusercontent.com/8071604/138559970-632d7e0f-b2f5-4dfe-8d40-d7669fa77a83.png) |
| 0.5 | ![image](https://user-images.githubusercontent.com/8071604/138559979-5909d0ea-d9eb-407f-8f7c-f4e4e26b0797.png) |
| 1.0 | ![image](https://user-images.githubusercontent.com/8071604/138559987-5cfeec5d-86b6-4026-a5dc-6b5b833d40fa.png) |

#### .position : Vector3
This is set equal to Object3D.DefaultUp (0, 1, 0), so that the light shines from the top down.

#### .power : Float
The light's power.
In physically correct mode, power is the luminous power of the light measured in lumens (lm).

| Power | Image |
| - | - |
| 1 | ![image](https://user-images.githubusercontent.com/8071604/138560012-45fb6528-9c29-43b8-9381-765f493df28d.png) |
| 5 | ![image](https://user-images.githubusercontent.com/8071604/138560040-7b99e3fb-c6f0-4545-b4e2-95392c4453e6.png) |
| 10 | ![image](https://user-images.githubusercontent.com/8071604/138560023-da3a53f9-06ff-49e4-aa15-dd8acea3e480.png) |

Changing this will also change the light's intensity.

#### .shadow : SpotLightShadow
A SpotLightShadow used to calculate shadows for this light.

Example usage:

```c
spotLight.shadow.camera.fov = 30;
```

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

| With target? | Image |
| - | - |
| ✔️ | ![image](https://user-images.githubusercontent.com/8071604/138560163-4111603a-4ecd-435a-8ec2-f71504aa9f2a.png) |
| ❎ | ![image](https://user-images.githubusercontent.com/8071604/138560173-14397efb-cfdb-480c-b9be-094dba6af9f3.png) |

Example code:
```c
// create sphere
const sphereGeometry = new THREE.SphereGeometry(10, 10, 10);
const sphereMaterial = new THREE.MeshStandardMaterial({ color: 0x33ccff });
const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
sphere.position.set(0, 20, 0);
sphere.castShadow = true; //default is false
sphere.receiveShadow = false; //default
scene.add(sphere);

spotLight.target = sphere;
```

### Methods

#### .dispose () : undefined
Override of base class's dispose. Disposes of this light's shadow.

#### .copy ( source : SpotLight ) : SpotLight
Copies value of all the properties from the source to this SpotLight.

## References
1. <a href="https://threejs.org/docs/?q=spotlight#api/en/lights/SpotLight">The three.js SpotLight documentation</a>.
