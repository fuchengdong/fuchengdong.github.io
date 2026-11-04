const PROJECTS = {
  camera: {
    anchor: "camera-control",
    hue: "#0d9488",
    name: "Camera-Controlled Generation for Video World Models",
    year: "2025 – Present",
    abstract: "A camera-conditioned video world model that treats viewpoint as an explicit control signal. Conditioned on a camera trajectory, it maintains a persistent latent scene state and rolls out spatiotemporally consistent observations, preserving 3D geometry, object identity, and illumination under novel views."
  },
  action: {
    anchor: "world-action",
    hue: "#d97706",
    name: "World Action Model",
    year: "2025 – Present",
    abstract: "A world action model that generates video from actions. Conditioned on an action sequence, turning control into a persistent visual world rather than a clip played on a fixed path."
  },
  stream: {
    anchor: "physical-stream",
    hue: "#7c3aed",
    name: "Streaming Video Synthesis with Interactive Physical Conditioning",
    year: "2025 – Present",
    abstract: "A novel framework for enabling real-time streaming video generation conditioned on dynamic interactive inputs. The system ensures that motion continuity, temporal coherence, and visual fidelity remain consistent across continuously synthesized frames, from single-prompt initialization to multi-modal interactive control signals."
  },
  play: {
    anchor: "playable-worlds",
    hue: "#db2777",
    name: "Playable Game Worlds via Interactive Video Generation",
    year: "2025 – Present",
    abstract: "A playable world-generation system that turns continuous video synthesis into a third-person game experience. Character motion is driven by real-time WASD control while the surrounding environment is generated on the fly, preserving spatial layout, lighting, and temporal coherence—so walking and exploring feel like navigating a persistent world rather than watching a clip."
  },
  world: {
    anchor: "long-horizon",
    hue: "#2563eb",
    name: "A Long-Term Consistent Video World Generation",
    year: "2025 – Present",
    abstract: "A real-time world-model that generates continuous video streams while maintaining long-horizon coherence. Designed for interactive, low-latency use, supports real-time updates from user inputs or events while keeping the world consistent—so actions have lasting consequences and the scene remains logically aligned over time."
  }
};

const LEADS = {
  camera: "The rangefinder is the control: a viewpoint you can aim.",
  bellows: "An older camera for the same idea: choose where to look.",
  frame: "A frame holds one directed view.",
  photo: "A still taken from a moving world.",
  compass: "A heading you choose, and a world that follows it.",
  key: "A small action that changes what happens next.",
  bag: "What you carry in when the world is driven by action.",
  lantern: "A physical condition on the scene: light that the picture has to follow.",
  glass: "Close, physical attention, one moment at a time.",
  pipe: "A handheld prop the stream has to keep coherent while it moves.",
  globe: "A world you can turn, and then walk through.",
  celestial: "A model of a whole world, held together as you move.",
  chest: "A place inside the world that stays put while you explore.",
  map: "The long route, still the same place after you have traveled.",
  watch: "Time on the desk. The world stays logically aligned as it stretches.",
  scroll: "The route unrolled, consistent from one end to the other.",
  tube: "The rest of the journey, kept intact.",
  book: "A record that accumulates instead of resetting.",
  roll: "Rolled up and still there when you come back.",
  coin: "A small thing that stays where it was set down.",
  roman: "An artifact that outlasts the moment it was made.",
  card: "A note from farther along the same route."
};

const ITEMS = {
  camera: { label: "Rangefinder", project: "camera", lead: LEADS.camera },
  bellows: { label: "Bellows camera", project: "camera", lead: LEADS.bellows },
  frame: { label: "Picture frame", project: "camera", lead: LEADS.frame },
  "photo-a": { label: "Photograph", project: "camera", lead: LEADS.photo },
  "photo-b": { label: "Photograph", project: "camera", lead: LEADS.photo },
  "photo-c": { label: "Photograph", project: "camera", lead: LEADS.photo },
  "photo-d": { label: "Photograph", project: "camera", lead: LEADS.photo },
  compass: { label: "Compass", project: "action", lead: LEADS.compass },
  key: { label: "Key", project: "action", lead: LEADS.key },
  bag: { label: "Leather bag", project: "action", lead: LEADS.bag },
  lantern: { label: "Lantern", project: "stream", lead: LEADS.lantern },
  glass: { label: "Magnifying glass", project: "stream", lead: LEADS.glass },
  pipe: { label: "Pipe", project: "stream", lead: LEADS.pipe },
  globe: { label: "Globe", project: "play", lead: LEADS.globe },
  celestial: { label: "Celestial globe", project: "play", lead: LEADS.celestial },
  "chest-a": { label: "Wooden chest", project: "play", lead: LEADS.chest },
  "chest-b": { label: "Wooden chest", project: "play", lead: LEADS.chest },
  map: { label: "Worn map", project: "world", lead: LEADS.map },
  watch: { label: "Pocket watch", project: "world", lead: LEADS.watch },
  "scroll-a": { label: "Map scroll", project: "world", lead: LEADS.scroll },
  "scroll-b": { label: "Map scroll", project: "world", lead: LEADS.scroll },
  tube: { label: "Scroll tube", project: "world", lead: LEADS.tube },
  "book-a": { label: "Leather book", project: "world", lead: LEADS.book },
  "book-b": { label: "Leather book", project: "world", lead: LEADS.book },
  "book-c": { label: "Leather book", project: "world", lead: LEADS.book },
  "roll-a": { label: "Leather roll", project: "world", lead: LEADS.roll },
  "roll-b": { label: "Leather roll", project: "world", lead: LEADS.roll },
  "roll-c": { label: "Leather roll", project: "world", lead: LEADS.roll },
  "coin-a": { label: "Coin", project: "world", lead: LEADS.coin },
  "coin-b": { label: "Coin", project: "world", lead: LEADS.coin },
  "coin-roman": { label: "Roman coin", project: "world", lead: LEADS.roman }
};

for (let i = 1; i <= 20; i += 1) {
  const id = "card-" + String(i).padStart(2, "0");
  ITEMS[id] = { label: "Postcard", project: "world", lead: LEADS.card };
}

const LIGHT = {
  exposure: 0.86,
  env: 0.34,
  hemi: 0.1,
  key: 2.7,
  rim: 0.38,
  lantern: 4.5
};

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const DRACO_PATH = "https://unpkg.com/three@0.181.0/examples/jsm/libs/draco/";
const MODEL_URL = new URL("./models/explorer.glb", import.meta.url).href;

const loading = document.getElementById("loading");
const loadingLabel = document.getElementById("loading-label");
const barFill = document.getElementById("bar-fill");
const panel = document.getElementById("panel");
const chip = document.getElementById("chip");
const view = document.getElementById("view");

function showStill() {
  document.body.classList.add("fallback");
  loading.hidden = true;
  document.getElementById("still").hidden = false;
}

function propOf(object) {
  let node = object;
  while (node) {
    const extras = node.userData || {};
    if (typeof extras.prop === "string") return { root: node, id: extras.prop };
    const name = node.name || "";
    if (name.startsWith("prop:")) return { root: node, id: name.split(":")[1] };
    node = node.parent;
  }
  return null;
}

boot().catch((error) => {
  console.error(error);
  showStill();
});

async function boot() {
  let THREE;
  let OrbitControls;
  let GLTFLoader;
  let DRACOLoader;
  let RoomEnvironment;
  try {
    THREE = await import("three");
    ({ OrbitControls } = await import("three/addons/controls/OrbitControls.js"));
    ({ GLTFLoader } = await import("three/addons/loaders/GLTFLoader.js"));
    ({ DRACOLoader } = await import("three/addons/loaders/DRACOLoader.js"));
    ({ RoomEnvironment } = await import("three/addons/environments/RoomEnvironment.js"));
  } catch (error) {
    console.error(error);
    showStill();
    return;
  }
  start({ THREE, OrbitControls, GLTFLoader, DRACOLoader, RoomEnvironment });
}

function start(api) {
  const { THREE, OrbitControls, GLTFLoader, DRACOLoader, RoomEnvironment } = api;

  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({
      canvas: view,
      antialias: true,
      alpha: false,
      powerPreference: "high-performance"
    });
  } catch (error) {
    console.error(error);
    showStill();
    return;
  }

  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.75));
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = LIGHT.exposure;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.setClearColor(0x100e0c, 1);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(38, window.innerWidth / window.innerHeight, 0.02, 40);
  camera.position.set(0.7, 0.85, 0.85);

  const pmrem = new THREE.PMREMGenerator(renderer);
  const env = new RoomEnvironment();
  scene.environment = pmrem.fromScene(env, 0.04).texture;
  scene.environmentIntensity = LIGHT.env;
  pmrem.dispose();

  const hemi = new THREE.HemisphereLight(0xe7eef6, 0x3c2c22, LIGHT.hemi);
  scene.add(hemi);

  const key = new THREE.DirectionalLight(0xfff3e4, LIGHT.key);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  key.shadow.bias = -0.00012;
  key.shadow.normalBias = 0.004;
  scene.add(key);
  scene.add(key.target);

  const rim = new THREE.DirectionalLight(0xc9d7ea, LIGHT.rim);
  scene.add(rim);
  scene.add(rim.target);

  const lanternLight = new THREE.PointLight(0xff8c3a, LIGHT.lantern, 2.4, 2);
  lanternLight.castShadow = false;

  const controls = new OrbitControls(camera, view);
  controls.enableDamping = !reduceMotion;
  controls.dampingFactor = 0.08;
  controls.enablePan = false;
  controls.target.set(0, 0.05, 0);

  const raycaster = new THREE.Raycaster();
  const pointer = new THREE.Vector2();
  const forward = new THREE.Vector3();
  const worldUp = new THREE.Vector3(0, 1, 0);
  const tiltQ = new THREE.Quaternion();
  const yawQ = new THREE.Quaternion();

  let model = null;
  let hoverRoot = null;
  let active = null;
  let closing = null;
  let drag = null;
  let lastPointer = null;
  const clock = { t: performance.now() };

  const draco = new DRACOLoader();
  draco.setDecoderPath(DRACO_PATH);
  const loader = new GLTFLoader();
  loader.setDRACOLoader(draco);

  loader.load(MODEL_URL, (gltf) => {
    model = gltf.scene;
    scene.add(model);
    prepareModel(THREE, model);
    placeLanternLight(THREE, model, lanternLight);
    frameCamera(THREE, model, camera, controls);
    fitShadows(THREE, model, key, rim);
    loading.hidden = true;
    clock.t = performance.now();
    requestAnimationFrame(tick);
  }, (event) => {
    if (!event.total) return;
    const pct = Math.min(100, Math.round((event.loaded / event.total) * 100));
    barFill.style.width = pct + "%";
    loadingLabel.textContent = "Loading the desk… " + pct + "%";
  }, (error) => {
    console.error(error);
    showStill();
  });

  document.getElementById("put-back").addEventListener("click", release);
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") release();
  });
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  view.addEventListener("pointerdown", (event) => {
    drag = { x: event.clientX, y: event.clientY, moved: false };
  });
  view.addEventListener("pointermove", (event) => {
    lastPointer = { x: event.clientX, y: event.clientY };
    if (drag) {
      const dx = event.clientX - drag.x;
      const dy = event.clientY - drag.y;
      if (dx * dx + dy * dy > 16) drag.moved = true;
    }
    updateHover(event.clientX, event.clientY);
  });
  view.addEventListener("pointerleave", () => {
    lastPointer = null;
    clearHover();
    chip.hidden = true;
    view.style.cursor = "grab";
  });
  view.addEventListener("pointerup", (event) => {
    const moved = drag && drag.moved;
    drag = null;
    if (moved || !model) return;
    const found = objectAt(event.clientX, event.clientY);
    if (!found) {
      release();
      return;
    }
    if (active && active.root === found.root) {
      release();
      return;
    }
    hold(found.root, found.id);
  });

  function tick(now) {
    requestAnimationFrame(tick);
    const dt = Math.min(0.05, (now - clock.t) / 1000);
    clock.t = now;
    if (closing) {
      step(closing, dt);
      if (closing.want === 0 && closing.weight < 0.012) {
        restore(closing);
        closing = null;
      }
    }
    if (active) step(active, dt);
    controls.update();
    renderer.render(scene, camera);
  }

  function objectAt(clientX, clientY) {
    const rect = view.getBoundingClientRect();
    pointer.x = ((clientX - rect.left) / rect.width) * 2 - 1;
    pointer.y = -((clientY - rect.top) / rect.height) * 2 + 1;
    raycaster.setFromCamera(pointer, camera);
    const hits = raycaster.intersectObject(model, true);
    for (const hit of hits) {
      if (!hit.object.isMesh) continue;
      return propOf(hit.object);
    }
    return null;
  }

  function updateHover(clientX, clientY) {
    if (!model || (drag && drag.moved)) return;
    const found = objectAt(clientX, clientY);
    const next = found && (!active || found.root !== active.root) ? found.root : null;
    if (hoverRoot !== next) {
      if (hoverRoot) paint(hoverRoot, false);
      hoverRoot = next;
      if (hoverRoot) paint(hoverRoot, true);
    }
    if (!found || !ITEMS[found.id]) {
      chip.hidden = true;
      view.style.cursor = "grab";
      return;
    }
    chip.hidden = false;
    chip.textContent = ITEMS[found.id].label;
    chip.style.left = clientX + "px";
    chip.style.top = clientY + "px";
    view.style.cursor = "pointer";
  }

  function clearHover() {
    if (!hoverRoot) return;
    paint(hoverRoot, false);
    hoverRoot = null;
  }

  function paint(root, hot) {
    root.traverse((node) => {
      if (!node.isMesh) return;
      const mats = Array.isArray(node.material) ? node.material : [node.material];
      for (const material of mats) {
        if (!material || !material.emissive) continue;
        if (!material.userData.baseEmissive) {
          material.userData.baseEmissive = material.emissive.clone();
          material.userData.baseIntensity = material.emissiveIntensity;
        }
        const base = material.userData.baseEmissive;
        if (material.userData.baseIntensity > 0.35 || Math.max(base.r, base.g, base.b) > 0.2) continue;
        if (hot) {
          material.emissive.setRGB(0.42, 0.22, 0.08);
          material.emissiveIntensity = 0.48;
        } else {
          material.emissive.copy(base);
          material.emissiveIntensity = material.userData.baseIntensity;
        }
      }
    });
  }

  function hold(root, id) {
    if (!ITEMS[id]) return;
    clearHover();
    if (closing && closing.root === root) {
      restore(closing);
      closing = null;
    }
    if (closing) {
      restore(closing);
      closing = null;
    }
    if (active) {
      active.want = 0;
      closing = active;
    }
    active = makeSlot(root, id);
    showPanel(id);
    if (lastPointer) updateHover(lastPointer.x, lastPointer.y);
  }

  function release() {
    if (!active) return;
    clearHover();
    active.want = 0;
    if (closing) restore(closing);
    closing = active;
    active = null;
    hidePanel();
  }

  function makeSlot(root, id) {
    root.updateWorldMatrix(true, true);
    const box = new THREE.Box3().setFromObject(root);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z, 0.01);
    const savedPos = root.position.clone();
    const savedQuat = root.quaternion.clone();
    const savedScale = root.scale.clone();
    const originalParent = root.parent;
    const restQuat = root.getWorldQuaternion(new THREE.Quaternion());
    const restScale = root.getWorldScale(new THREE.Vector3());

    const holder = new THREE.Group();
    holder.name = "hold:" + id;
    holder.position.copy(center);
    holder.quaternion.copy(restQuat);
    holder.scale.copy(restScale);
    scene.add(holder);
    holder.attach(root);

    camera.getWorldDirection(forward);
    const tiltAxis = new THREE.Vector3().crossVectors(forward, camera.up);
    if (tiltAxis.lengthSq() < 1e-8) tiltAxis.set(1, 0, 0);
    tiltAxis.normalize();

    const mobile = window.innerWidth < 720;
    let scaleMul = maxDim < 0.14 ? Math.min(2.8, 0.17 / maxDim) : 1;
    if (mobile && maxDim > 0.28) scaleMul = 0.62;
    const shown = maxDim * scaleMul;
    const dist = mobile
      ? THREE.MathUtils.clamp(0.62 + shown * 0.4, 0.7, 1.2)
      : THREE.MathUtils.clamp(0.38 + shown * 0.95, 0.42, 0.98);
    const holdPos = camera.position.clone().addScaledVector(forward, dist);
    if (!mobile) holdPos.addScaledVector(tiltAxis, -dist * 0.2);
    holdPos.y = Math.max(holdPos.y, center.y + Math.max(0.06, shown * 0.22));
    if (mobile) holdPos.addScaledVector(camera.up, Math.max(0.08, shown * 0.28));

    return {
      id,
      root,
      holder,
      originalParent,
      savedPos,
      savedQuat,
      savedScale,
      restPos: center.clone(),
      restQuat: restQuat.clone(),
      restScale: restScale.clone(),
      holdPos,
      tiltAxis,
      maxDim,
      scaleMul,
      weight: reduceMotion ? 1 : 0,
      want: 1,
      spin: 0
    };
  }

  function step(slot, dt) {
    if (reduceMotion) {
      slot.weight = slot.want;
      slot.spin = 0;
    } else {
      slot.weight = THREE.MathUtils.damp(slot.weight, slot.want, 5.4, dt);
      if (slot.want > 0) slot.spin += dt * 0.35;
      else slot.spin = THREE.MathUtils.damp(slot.spin, 0, 5, dt);
    }
    const w = slot.weight;
    const shown = slot.maxDim * (1 + (slot.scaleMul - 1) * w);
    const pos = slot.restPos.clone().lerp(slot.holdPos, w);
    pos.y += Math.sin(Math.PI * w) * Math.min(0.07, shown * 0.35);
    if (!reduceMotion && slot.want > 0) {
      pos.y += Math.sin(performance.now() * 0.0016) * 0.008 * w;
    }
    slot.holder.position.copy(pos);
    tiltQ.setFromAxisAngle(slot.tiltAxis, 0.52 * w);
    yawQ.setFromAxisAngle(worldUp, slot.spin * w);
    slot.holder.quaternion.copy(yawQ).multiply(tiltQ).multiply(slot.restQuat);
    slot.holder.scale.copy(slot.restScale).multiplyScalar(1 + (slot.scaleMul - 1) * w);
  }

  function restore(slot) {
    if (!slot.root.parent) return;
    slot.originalParent.add(slot.root);
    slot.root.position.copy(slot.savedPos);
    slot.root.quaternion.copy(slot.savedQuat);
    slot.root.scale.copy(slot.savedScale);
    slot.holder.removeFromParent();
  }

  function showPanel(id) {
    const item = ITEMS[id];
    const project = PROJECTS[item.project];
    panel.hidden = false;
    panel.style.setProperty("--ac", project.hue);
    document.getElementById("obj-label").textContent = item.label;
    document.getElementById("proj-name").textContent = project.name;
    document.getElementById("proj-lead").textContent = item.lead;
    document.getElementById("proj-abs").textContent = project.abstract;
    document.getElementById("proj-year").textContent = project.year;
    const link = document.getElementById("proj-link");
    link.href = "index.html#" + project.anchor;
    document.body.dataset.held = id;
  }

  function hidePanel() {
    panel.hidden = true;
    delete document.body.dataset.held;
  }
}

function prepareModel(THREE, model) {
  model.traverse((node) => {
    if (!node.isMesh) return;
    node.castShadow = true;
    node.receiveShadow = true;
    if (Array.isArray(node.material)) node.material = node.material.map((material) => tuneMaterial(THREE, material.clone()));
    else if (node.material) node.material = tuneMaterial(THREE, node.material.clone());
  });
}

function tuneMaterial(THREE, source) {
  const material = source;
  const name = material.name || "";
  const realGlass = /glass|lens/i.test(name) && !/brass|handle/i.test(name);

  if ("sheen" in material) material.sheen = 0;

  if (material.transmission > 0 && !realGlass) material.transmission = 0;

  if (name === "Lantern_01_glass") {
    const glass = new THREE.MeshPhysicalMaterial({
      name: name,
      color: new THREE.Color(1, 0.72, 0.38),
      roughness: 0.12,
      metalness: 0,
      transmission: 0.86,
      thickness: 0.08,
      transparent: true,
      opacity: 1,
      emissive: new THREE.Color(1, 0.45, 0.12),
      emissiveIntensity: 1.4,
      side: THREE.DoubleSide
    });
    material.dispose?.();
    return glass;
  }

  if (name === "Globe-Rough-Gold") {
    material.color.set(0xb8894a);
    material.metalness = 1;
    material.roughness = 0.38;
  }

  if (realGlass) {
    material.transmission = Math.max(material.transmission || 0, 0.9);
    material.roughness = Math.min(material.roughness ?? 0.05, 0.08);
    material.metalness = 0;
    material.thickness = Math.max(material.thickness || 0, 0.12);
    material.transparent = true;
  }

  return material;
}

function placeLanternLight(THREE, model, light) {
  let lantern = null;
  model.traverse((node) => {
    if (!lantern && propOf(node) && propOf(node).id === "lantern") lantern = propOf(node).root;
  });
  if (!lantern) return;
  const box = new THREE.Box3().setFromObject(lantern);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  center.y += size.y * 0.18;
  lantern.worldToLocal(center);
  light.position.copy(center);
  lantern.add(light);
}

function frameCamera(THREE, model, camera, controls) {
  let source = null;
  model.traverse((node) => {
    if (node.isCamera) source = node;
  });
  if (source) {
    source.updateWorldMatrix(true, true);
    camera.position.setFromMatrixPosition(source.matrixWorld);
    camera.quaternion.setFromRotationMatrix(source.matrixWorld);
    camera.fov = source.fov;
    camera.near = 0.02;
    camera.far = 40;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  }

  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(new THREE.Vector2(0, 0), camera);
  const hits = raycaster.intersectObject(model, true);
  if (hits.length) controls.target.copy(hits[0].point);
  else {
    const dir = new THREE.Vector3();
    camera.getWorldDirection(dir);
    controls.target.copy(camera.position).addScaledVector(dir, 0.55);
  }

  const offset = camera.position.clone().sub(controls.target);
  const spherical = new THREE.Spherical().setFromVector3(offset);
  controls.minDistance = Math.max(0.22, spherical.radius * 0.45);
  controls.maxDistance = spherical.radius * 1.85;
  controls.minPolarAngle = Math.max(0.18, spherical.phi - 0.42);
  controls.maxPolarAngle = Math.min(Math.PI * 0.56, spherical.phi + 0.28);
  controls.update();
}

function fitShadows(THREE, model, key, rim) {
  const box = new THREE.Box3().setFromObject(model);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());
  key.position.set(center.x - size.x * 0.85, center.y + Math.max(size.y, 0.4) * 2.1, center.z + size.z * 0.35);
  key.target.position.copy(center);
  rim.position.set(center.x + size.x * 0.7, center.y + size.y * 1.1, center.z - size.z * 0.8);
  rim.target.position.copy(center);
  const radius = Math.max(size.x, size.z) * 0.62;
  const shadow = key.shadow.camera;
  shadow.left = -radius;
  shadow.right = radius;
  shadow.top = radius;
  shadow.bottom = -radius;
  shadow.near = 0.05;
  shadow.far = Math.max(size.y, 0.5) * 6;
  shadow.updateProjectionMatrix();
}
