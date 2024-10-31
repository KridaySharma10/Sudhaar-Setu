'use client'

import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const impactLocations = [
  { lat: 28.6139, lng: 77.2090, name: 'Delhi, India' },
  { lat: 40.7128, lng: -74.0060, name: 'New York, USA' },
  { lat: 51.5074, lng: -0.1278, name: 'London, UK' },
  { lat: -33.8688, lng: 151.2093, name: 'Sydney, Australia' },
  { lat: -1.2921, lng: 36.8219, name: 'Nairobi, Kenya' },
  { lat: -34.6037, lng: -58.3816, name: 'Buenos Aires, Argentina' },
]

export default function ImpactGlobe() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, mountRef.current.clientWidth / mountRef.current.clientHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    mountRef.current.appendChild(renderer.domElement)

    // Create a sphere for the Earth
    const earthGeometry = new THREE.SphereGeometry(5, 64, 64)
    const earthMaterial = new THREE.MeshPhongMaterial({ color: 0x228B22 })
    const earthSphere = new THREE.Mesh(earthGeometry, earthMaterial)
    scene.add(earthSphere)

    // Load Earth texture for land masses
    const textureLoader = new THREE.TextureLoader()
    textureLoader.load('/images/earth-texture.jpg', (texture) => {
      earthMaterial.map = texture
      earthMaterial.needsUpdate = true
    })

    // Create ocean sphere with transparency
    const oceanMaterial = new THREE.MeshPhongMaterial({
      color: 0x0077be,
      transparent: true,
      opacity: 0.7,
    })
    const oceanSphere = new THREE.Mesh(earthGeometry, oceanMaterial)
    scene.add(oceanSphere)

    // Add a subtle atmosphere glow
    const atmosphereGeometry = new THREE.SphereGeometry(5.1, 64, 64)
    const atmosphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x3a8eeb,
      transparent: true,
      opacity: 0.5,
      side: THREE.BackSide
    })
    const atmosphere = new THREE.Mesh(atmosphereGeometry, atmosphereMaterial)
    scene.add(atmosphere)

    // Add pins for impact locations
    const pinGeometry = new THREE.ConeGeometry(0.1, 0.5, 8)
    const pinMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 })

    impactLocations.forEach(location => {
      const pin = new THREE.Mesh(pinGeometry, pinMaterial)
      const phi = (90 - location.lat) * (Math.PI / 180)
      const theta = (location.lng + 180) * (Math.PI / 180)
      pin.position.x = -(5.1 * Math.sin(phi) * Math.cos(theta))
      pin.position.z = (5.1 * Math.sin(phi) * Math.sin(theta))
      pin.position.y = (5.1 * Math.cos(phi))
      pin.lookAt(0, 0, 0)

      // Optionally add text labels to the pins
      const sprite = createLabel(location.name);
      pin.add(sprite);

      scene.add(pin)
    })

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5)
    scene.add(ambientLight)

    const pointLight = new THREE.PointLight(0xffffff, 1)
    pointLight.position.set(10, 10, 10)
    scene.add(pointLight)

    camera.position.z = 15

    // Add OrbitControls
    const controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.05
    controls.rotateSpeed = 0.1 // Adjusting speed for smoother rotation
    controls.enableZoom = false

    // Animation
    function animate() {
      requestAnimationFrame(animate)
      earthSphere.rotation.y += 0.005; // Increased rotation speed
      oceanSphere.rotation.y += 0.005; // Increased rotation speed
      controls.update()
      renderer.render(scene, camera)
    }
    animate()

    // Handle window resize
    function onWindowResize() {
      if (!mountRef.current) return
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight)
    }
    window.addEventListener('resize', onWindowResize)

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement)
      }
      window.removeEventListener('resize', onWindowResize)
    }
  }, [])

  // Function to create a sprite for the label
  function createLabel(text) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = 'bold 16px Arial';
    const textWidth = context.measureText(text).width;
    canvas.width = textWidth + 10; // Add some padding
    canvas.height = 30;

    context.fillStyle = 'white'; // Background color
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'black'; // Text color
    context.fillText(text, 5, 20); // Adjusted position

    const texture = new THREE.Texture(canvas);
    texture.needsUpdate = true;

    const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
    const sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(1.5, 0.5, 1); // Scale the sprite

    return sprite;
  }

  return <div ref={mountRef} style={{ width: '100%', height: '600px' }} />
}
a{/* Achievements Section */}
<section className="py-20 bg-gradient-to-b from-background to-background-light">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 gradient-text">
      Our Achievements
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="p-6 bg-white rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-semibold mb-4">500+ Projects Completed</h3>
        <p className="text-gray-700">
          We have successfully completed over 500 projects across various sectors.
        </p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-semibold mb-4">10M+ Lives Impacted</h3>
        <p className="text-gray-700">
          Our initiatives have positively impacted the lives of more than 10 million people.
        </p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-lg text-center">
        <h3 className="text-xl font-semibold mb-4">1M+ Volunteers Engaged</h3>
        <p className="text-gray-700">
          Over 1 million volunteers have joined us in our mission to create change.
        </p>
      </div>
    </div>
  </div>
</section>
