function init() {

  var stats = initStats();
  var renderer = initRenderer({
    alpha: true
  });

  var camera = initCamera();
  camera.position.x = -20;
  camera.position.y = 5;
  camera.position.z = 25;
  camera.lookAt(new THREE.Vector3(5, 0, 0));

  var trackballControls = initTrackballControls(camera, renderer);
  var clock = new THREE.Clock();

  // create a scene, that will hold all our elements such as objects, cameras and lights.
  var scene = new THREE.Scene();

  var planeGeometry = new THREE.PlaneGeometry(1000, 1000, 20, 20);
  var planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xffffff
  });
  var plane = new THREE.Mesh(planeGeometry, planeMaterial);
  plane.receiveShadow = true;

  // rotate and position the plane
  plane.rotation.x = -0.5 * Math.PI;
  plane.position.x = 0;
  plane.position.y = 0;
  plane.position.z = 0;
  
  // add the plane to the scene
  scene.add(plane);

  // create a cube
  var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
  var cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0x3333ff
  });
  var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
  cube.castShadow = true;

  // position the cube
  cube.position.x = 0;
  cube.position.y = 5;
  cube.position.z = 0;

  // add the cube to the scene
  scene.add(cube);

  // add subtle ambient lighting
  var ambiColor = "#1c1c1c";
  var ambientLight = new THREE.AmbientLight(ambiColor);
  scene.add(ambientLight);

  // add spotlight for a bit of light
  var spotLight = new THREE.SpotLight(0xcccccc);
  spotLight.position.set(-40, 60, -10);
  spotLight.lookAt(plane);
  scene.add(spotLight);

  // spot light camera helper for debugging
  var spotLightCameraHelper = new THREE.CameraHelper(spotLight.shadow.camera);

  var pointColor = "#ffffff";
  var directionalLight = new THREE.DirectionalLight(pointColor);
  directionalLight.position.set(30, 10, -50);
  directionalLight.castShadow = true;
  directionalLight.shadow.camera.fov = 50;
  directionalLight.target = plane;
  directionalLight.distance = 0;
  directionalLight.shadow.camera.near = 2;
  directionalLight.shadow.camera.far = 200;
  directionalLight.shadow.camera.left = -100;
  directionalLight.shadow.camera.right = 100;
  directionalLight.shadow.camera.top = 100;
  directionalLight.shadow.camera.bottom = -100;
  directionalLight.shadow.mapSize.width = 2048;
  directionalLight.shadow.mapSize.height = 2048;

  scene.add(directionalLight);

  // directional light camera helper for debugging
  var directionalLightCameraHelper = new THREE.CameraHelper(directionalLight.shadow.camera)

  var controls = new function () {
    this.rotationSpeed = 0.03;
    this.ambientColor = ambiColor;
    this.pointColor = pointColor;
    this.intensity = 0.1;
    this.distance = 0;
    this.exponent = 30;
    this.angle = 0.1;
    this.castShadow = true;
    this.onlyShadow = false;
    this.target = "Plane";
    this.debugDirectionalLight = false;
    this.debugSpotLight = false;
    this.disableDirectionalLight = false;
    this.disableSpotlight = false;
  };

  var gui = new dat.GUI();
  gui.addColor(controls, 'ambientColor').onChange(function (e) {
    ambientLight.color = new THREE.Color(e);
  });
  gui.addColor(controls, 'pointColor').onChange(function (e) {
    directionalLight.color = new THREE.Color(e);
  });
  gui.add(controls, 'intensity', 0, 5).onChange(function (e) {
    directionalLight.intensity = e;
  });
  gui.add(controls, 'debugDirectionalLight').onChange(function (e) {
    if(e) {
      scene.add(directionalLightCameraHelper);
    } else {
      scene.remove(directionalLightCameraHelper);
    }
  });
  gui.add(controls, 'debugSpotLight').onChange(function (e) {
    if(e) {
      scene.add(spotLightCameraHelper);
    } else {
      scene.remove(spotLightCameraHelper);
    }
  });
  gui.add(controls, 'disableDirectionalLight').onChange(function (e) {
    directionalLight.visible = !e;
  });
  gui.add(controls, 'disableSpotlight').onChange(function (e) {
    spotLight.visible = !e;
  });

  var textureFlare0 = THREE.ImageUtils.loadTexture("../../assets/textures/flares/lensflare0.png");
  var textureFlare3 = THREE.ImageUtils.loadTexture("../../assets/textures/flares/lensflare3.png");

  var flareColor = new THREE.Color(0xffaacc);

  var lensFlare = new THREE.Lensflare();

  lensFlare.addElement(new THREE.LensflareElement(textureFlare0, 350, 0.0, flareColor));
  lensFlare.addElement(new THREE.LensflareElement(textureFlare3, 60, 0.6, flareColor));
  lensFlare.addElement(new THREE.LensflareElement(textureFlare3, 70, 0.7, flareColor));
  lensFlare.addElement(new THREE.LensflareElement(textureFlare3, 120, 0.9, flareColor));
  lensFlare.addElement(new THREE.LensflareElement(textureFlare3, 70, 1.0, flareColor));

  // group lens flare with directional light
  directionalLight.add(lensFlare);

  render();

  function render() {
    stats.update();
    trackballControls.update(clock.getDelta());
    // rotate the cube around its axes
    cube.rotation.x += controls.rotationSpeed;
    cube.rotation.y += controls.rotationSpeed;
    cube.rotation.z += controls.rotationSpeed;

    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }
};