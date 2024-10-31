import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

const WadelmasiruObj = () => {
  const [error, setError] = useState(false); // Track if there's an error
  const color = "#000000";
  const emissive = "#fe0050";
  const sphereRadius = 2;
  const noiseIntensity = 0.21;
  const cameraDistance = 4.6;
  const swapTime = 3.68;
  const wireframe = true;
  const sphereRef = useRef(null);
  const uniformsRef = useRef(null);
  const mountRef = useRef(null);
  const scrollRef = useRef(0);
  const lightRef = useRef(null);
  const satelliteRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);

  const orbitRadius = sphereRadius * 1.1;
  const orbitSpeed = 0.00777;
  const satelliteOrbitRadius = sphereRadius * 0.6;

  useEffect(() => {
    try {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
      cameraRef.current = camera;
      const renderer = new THREE.WebGLRenderer({ antialias: false });
      renderer.setClearColor(0x000000, 1.0);
      renderer.setSize(window.innerWidth, window.innerHeight);
      rendererRef.current = renderer;
      mountRef.current.appendChild(renderer.domElement);

      const geometry = new THREE.SphereGeometry(sphereRadius, 64, 64);
      const uniforms = {
        color: { value: new THREE.Color(color) },
        emissive: { value: new THREE.Color(emissive) },
        time: { value: 1.5 },
        noiseIntensity: { value: noiseIntensity },
        swapTime: { value: swapTime },
      };

      uniformsRef.current = uniforms;

      const vertexShader = `
        varying vec2 vUv;
        varying vec3 vNormal;
        uniform float time;
        uniform float noiseIntensity;
        void main() {
          vec3 newPosition = position 
            + normal * noiseIntensity * sin(time + position.y * 2.0)
            + normal * noiseIntensity * sin(time + position.x * 3.0);
          vUv = uv;
          vNormal = normal;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(newPosition, 1.0);
        }
      `;

      const fragmentShader = `
        varying vec2 vUv;
        uniform vec3 color;
        uniform vec3 emissive;
        uniform float swapTime;
        void main() {
          float gradient = vUv.y;
          vec3 baseColor = mix(color, emissive, gradient + sin(swapTime) * 0.5);
          gl_FragColor = vec4(baseColor, 1.0);
        }
      `;

      const material = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        wireframe: wireframe,
      });

      const sphere = new THREE.Mesh(geometry, material);
      scene.add(sphere);
      sphereRef.current = sphere;

      const satelliteGeometry = new THREE.SphereGeometry(sphereRadius / 4, 32, 32);
      const satelliteMaterial = new THREE.ShaderMaterial({
        uniforms: uniforms,
        vertexShader: vertexShader,
        fragmentShader: fragmentShader,
        wireframe: wireframe,
        transparent: true,
      });

      const satellite = new THREE.Mesh(satelliteGeometry, satelliteMaterial);
      scene.add(satellite);
      satelliteRef.current = satellite;

      const hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff);
      scene.add(hemiLight);
      lightRef.current = hemiLight;

      camera.position.z = cameraDistance;
      camera.position.x = cameraDistance * -0.35;
      camera.position.y = cameraDistance * 0.2;

      let orbitAngle = 10.03;

      const animate = () => {
        requestAnimationFrame(animate);
        sphere.rotation.y = (0.121 * scrollRef.current) / 125;
        uniforms.time.value += 0.01;
        uniforms.swapTime.value = swapTime;

        if (satelliteRef.current) {
          orbitAngle += orbitSpeed;
          satelliteRef.current.position.x = (satelliteOrbitRadius + scrollRef.current * 0.01) * Math.cos(orbitAngle);
          satelliteRef.current.position.z = (satelliteOrbitRadius + scrollRef.current * 0.01) * Math.sin(orbitAngle);
          satelliteRef.current.position.y = 0;
          satelliteRef.current.lookAt(sphere.position);
        }

        renderer.render(scene, camera);
      };

      animate();

      const handleScroll = () => {
        scrollRef.current = window.scrollY;
      };

      const handleResize = () => {
        if (rendererRef.current && cameraRef.current) {
          const width = window.innerWidth;
          const height = window.innerHeight;
          rendererRef.current.setSize(width, height);
          cameraRef.current.aspect = width / height;
          cameraRef.current.updateProjectionMatrix();
        }
      };

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);
      handleResize();

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
        rendererRef.current.dispose();
        if (mountRef.current) {
          mountRef.current.removeChild(rendererRef.current.domElement);
        }
      };
    } catch (e) {
      console.error("WebGL context creation failed", e);
      setError(true); // Set error state to true if there's an error
    }
  }, [cameraDistance, swapTime, orbitRadius, orbitSpeed]);

  useEffect(() => {
    if (uniformsRef.current) {
      uniformsRef.current.color.value.set(color);
      uniformsRef.current.emissive.value.set(emissive);
      uniformsRef.current.noiseIntensity.value = noiseIntensity;
    }
    if (sphereRef.current) {
      const newGeometry = new THREE.SphereGeometry(sphereRadius, 64, 64);
      sphereRef.current.geometry.dispose();
      sphereRef.current.geometry = newGeometry;
      sphereRef.current.material.wireframe = wireframe;
    }
  }, [color, emissive, sphereRadius, noiseIntensity, wireframe]);

  // Render an empty div if there's an error
  if (error) {
    return <div />;
  }

  return (
    <div
      ref={mountRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
};

export default WadelmasiruObj;
