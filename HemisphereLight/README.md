# Hemisphere Light

## Definition

HemisphereLight is a light source positioned directly above the scene, with color fading from the sky color to the ground color. It simulates an area light that illuminates your scene from all directions.

![Hemisphere Light](./img/definition.gif)

This is useful for creating bounce light effects such as sky lights, or other secondary bounce light effects.

## Defining a Class

We could define a class by using this constructor.
```js
const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
```

This is what we need to explore more about HemisphereLight.
### Parameters

When using constructor, we could also add some preferences to base project.

|  Parameter  | Data Type | Optional |                           Description                          |
|:-----------:|:---------:|:--------:|:--------------------------------------------------------------:|
|   skyColor  |  Integer  |     ☑️    |       Hexadecimal color of the sky. Default is 0xffffff.       |
| groundColor |  Integer  |     ☑️    |      Hexadecimal color of the ground. Default is 0xffffff.     |
|  intensity  |   Float   |     ☑️    | Numeric value of the light's strength/intensity. Default is 1. |

### Properties

We could use the properties of base [Light](https://threejs.org/docs/#api/en/lights/Light) to set. But, there is also property from HemisphereLight.

| Property    | Data Type | Description                                                                                             |
|-------------|-----------|---------------------------------------------------------------------------------------------------------|
| color       | Float     | The light's sky color, as passed in the constructor. Default is a new Color set to white (0xffffff).    |
| groundColor | Float     | The light's ground color, as passed in the constructor. Default is a new Color set to white (0xffffff). |
| position    | Vector3   | This is set equal to Object3D.DefaultUp (0, 1, 0), so that the light shines from the top down.          |

### Methods

The same also happens for methods, you could also use base Light method. Of course, there is method owned by HemisphereLight.

| Methods                       | Return Type     | Description                                                                               |
|-------------------------------|-----------------|-------------------------------------------------------------------------------------------|
| copy(source: HemisphereLight) | HemisphereLight | Copies the value of color, intensity and groundColor from the source light into this one. |

### Result

This is what HemisphereLight look like.
![img](./img/intensity.gif)

### Source
- [HemisphereLight Documentation Three JS](https://threejs.org/docs/#api/en/lights/HemisphereLight)
- Three JS Essential Third Edition by Jos Dirksen
- [HemisphereLight Flamingo by Miranda](https://threejs.org/examples/?q=hemis#webgl_lights_hemisphere)