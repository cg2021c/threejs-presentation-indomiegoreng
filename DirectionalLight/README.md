# Directional Light

This type of light can be considered as a light that is very far away. All the light rays it sends out are parallel to each other. Directional light is often used to represent the sun.

![directional_light1](https://user-images.githubusercontent.com/73324192/138784367-1b49c131-0f5c-49b9-b3f5-4ee6294be220.jpg)

## DirectionalLight

### Constructor

We can create DirectionalLight instance by using this constructor.

```js
DirectionalLight( color : Integer, intensity : Float )
```

The parameters are:
| Parameter | Description |
| - | - |
| color | [Optional] Hexadecimal color of the light. Default is 0xffffff (white). |
| intensity | [Optional] Numeric value of the light's strength/intensity. Default is 1. |

### Properties

| Properties | Description |
| - | - |
| .castShadow : Boolean | If set to true light will cast dynamic shadows. Warning: This is expensive and requires tweaking to get shadows looking right. The default is false. |
| .position : Vector3 | This is set equal to Object3D.DefaultUp (0, 1, 0), so that the light shines from the top down. |
| .shadow : DirectionalLightShadow | A DirectionalLightShadow used to calculate shadows for this light. |
| .target : Object3D | The DirectionalLight points from its position to target.position. The default position of the target is (0, 0, 0). |

Note: For the target's position to be changed to anything other than the default, it must be added to the scene using

```js
scene.add(light.target);
```

This is so that the target's matrixWorld gets automatically updated each frame.

It is also possible to set the target to be another object in the scene (anything with a position property), like so:

```js
const targetObject = new THREE.Object3D();
scene.add(targetObject);

light.target = targetObject;
```

The directionalLight will now track the target object.


### Methods

| Methods | Description |
| - | - |
| .dispose () : undefined | Override of base class's dispose. Disposes of this light's shadow. |
| .copy ( source : DirectionalLight ) : DirectionalLight | Copies value of all the properties from the source to this DirectionalLight. |

## DirectionalLightHelper

Helper object to assist with visualizing a DirectionalLight's effect on the scene. This consists of plane and a line representing the light's position and direction.

### Constructor

```js
DirectionalLightHelper( light : DirectionalLight, size : Number, color : Hex )
```

The parameters are:
| Parameter | Description |
| - | - |
| light | The light to be visualized. |
| size | [Optional] Dimensions of the plane. Default is 1. |
| color | [Optional] If this is not the set the helper will take the color of the light. |

### Properties

| Properties | Description |
| - | - |
| .lightPlane : Line | Contains the line mesh showing the location of the directional light. |
| .light : DirectionalLight | Reference to the directionalLight being visualized. |
| .matrix : Object | Reference to the light's matrixWorld. |
| .matrixAutoUpdate : Object | See Object3D.matrixAutoUpdate. Set to false here as the helper is using the light's matrixWorld. |
| .color : hex | The color parameter passed in the constructor. Default is undefined. If this is changed, the helper's color will update the next time update is called. |

### Methods

| Methods | Description |
| - | - |
| .dispose () : null | Dispose of the directionalLightHelper. |
| .update () : null | Updates the helper to match the position and direction of the directionalLight being visualized. |
