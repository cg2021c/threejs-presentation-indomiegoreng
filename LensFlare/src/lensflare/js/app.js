function init() {

  var stats = initStats();
  var renderer = initRenderer({
    alpha: true
  });

  var camera = initCamera();
  camera.position.x = -20;
  camera.position.y = 5;
  camera.position.z = 25;
  camera.lookAt(new THREE.Vector3(10, 0, 0));

  var trackballControls = initTrackballControls(camera, renderer);
  var clock = new THREE.Clock();

  // create a scene, that will hold all our elements such as objects, cameras and lights.
  var scene = new THREE.Scene();

  var planeGeometry = new THREE.PlaneGeometry(1000, 1000, 20, 20);
  var planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xAAAAAA
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
  var spotLight0 = new THREE.SpotLight(0xcccccc);
  spotLight0.position.set(-40, 60, -10);
  spotLight0.lookAt(plane);
  scene.add(spotLight0);

  var target = new THREE.Object3D();
  target.position = new THREE.Vector3(5, 0, 0);

  var pointColor = "#ffffff";
  var directionalLight = new THREE.DirectionalLight(pointColor);
  directionalLight.position.set(30, 10, -50);
  directionalLight.castShadow = true;
  directionalLight.shadowCameraNear = 0.1;
  directionalLight.shadowCameraFar = 100;
  directionalLight.shadowCameraFov = 50;
  directionalLight.target = plane;
  directionalLight.distance = 0;
  directionalLight.shadowCameraNear = 2;
  directionalLight.shadowCameraFar = 200;
  directionalLight.shadowCameraLeft = -100;
  directionalLight.shadowCameraRight = 100;
  directionalLight.shadowCameraTop = 100;
  directionalLight.shadowCameraBottom = -100;
  directionalLight.shadowMapWidth = 2048;
  directionalLight.shadowMapHeight = 2048;

  scene.add(directionalLight);

  var controls = new function () {
    this.rotationSpeed = 0.03;
    this.ambientColor = ambiColor;
    this.pointColor = pointColor;
    this.intensity = 0.1;
    this.distance = 0;
    this.exponent = 30;
    this.angle = 0.1;
    this.debug = false;
    this.castShadow = true;
    this.onlyShadow = false;
    this.target = "Plane";

  };

  var gui = new dat.GUI();
  gui.add(controls, 'rotationSpeed', 0, 0.05).onChange(function (e) {
    directionalLight.rotationSpeed = e;
  });
  gui.addColor(controls, 'ambientColor').onChange(function (e) {
    ambientLight.color = new THREE.Color(e);
  });
  gui.addColor(controls, 'pointColor').onChange(function (e) {
    directionalLight.color = new THREE.Color(e);
  });
  gui.add(controls, 'intensity', 0, 5).onChange(function (e) {
    directionalLight.intensity = e;
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