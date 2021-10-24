# AreaLight
With AreaLight, we can define a rectangular area that emits light. RectAreaLight emits light uniformly across the face a rectangular plane. This light type can be used to simulate light sources such as bright windows or strip lighting.

Important Notes:

<!-- There is no shadow support.
Only MeshStandardMaterial and MeshPhysicalMaterial are supported.
You have to include RectAreaLightUniformsLib into your scene and call init().
Code Example
const width = 10;
const height = 10;
const intensity = 1;
const rectLight = new THREE.RectAreaLight( 0xffffff, intensity, width, height );
rectLight.position.set( 5, 5, 0 );
rectLight.lookAt( 0, 0, 0 );
scene.add( rectLight ) -->

<!-- const rectLightHelper = new THREE.RectAreaLightHelper( rectLight );
rectLight.add( rectLightHelper );
Examples
WebGL / rectarealight -->

#### Constructor
We can create PointLight instance by using this constructor.
```js
RectAreaLight( color : Integer, intensity : Float, width : Float, height : Float )
```

The parameters are:
| Parameter | Is it optional? | Description |
| - | - | - |
| color | ✔️ | Hexadecimal color of the light. Default is 0xffffff (white). |
| intensity | ✔️ | the light's intensity, or brightness. Default is 1. |
| width | ✔️ | width of the light. Default is 10. |
| height | ✔️ | height of the light. Default is 10. |


#### Properties
See the base Light class for common properties.

**.intensity : Float**
The light's intensity. Default is 1.
In physically correct mode, intensity is the luminance (brightness) of the light measured in nits (cd/m^2).

Changing the intensity will also change the light's power.

**.power : Float**
The light's power.
In physically correct mode, power is the luminous power of the light measured in lumens (lm).

Changing the power will also change the light's intensity.

#### Methods
See the base Light class for common methods.

**.copy ( source : RectAreaLight ) : RectAreaLight**
Copies value of all the properties from the source to this RectAreaLight.


## RectAreaLightHelper
Creates a visual aid for a RectAreaLight.

Code Example
```js
const light = new THREE.RectAreaLight( 0xffffbb, 1.0, 5, 5 );
const helper = new RectAreaLightHelper( light );
light.add( helper ); // helper must be added as a child of the light
```

#### Constructor
```js
RectAreaLightHelper( light : RectAreaLight, color : Hex )
```

**light** -- The light being visualized.

**color** -- (optional) if this is not the set the helper will take the color of the light.

#### Properties

**.light : RectAreaLight**
Reference to the RectAreaLight being visualized.

**.color : hex**
The color parameter passed in the constructor. Default is undefined. If this is changed, the helper's color will update the next time update is called.

#### Methods
See the base Object3D class for common methods.

**.dispose () : null**
Dispose of the rectAreaLightHelper.
