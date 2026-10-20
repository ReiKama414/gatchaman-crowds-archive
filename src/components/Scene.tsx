import { Component, Suspense, useEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { useTexture } from '@react-three/drei'
import * as THREE from 'three'
import { useArchive } from '../store'

const particleVertex = `
  attribute vec3 aTarget;
  uniform float uTime; uniform float uMorph; uniform vec2 uPointer;
  varying float vAlpha;
  void main(){
    vec3 p = mix(position, aTarget, uMorph);
    p.x += sin(p.y * 2. + uTime * .18) * .15;
    p.z += cos(p.x * 1.7 + uTime * .22) * .2;
    p.xy += uPointer * .16;
    vec4 mv = modelViewMatrix * vec4(p,1.);
    gl_Position = projectionMatrix * mv;
    gl_PointSize = min(7., 9. / -mv.z);
    vAlpha = .35 + .4 * sin(position.y * 12. + uTime * .25);
  }
`
function useSceneVisibility() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { rootMargin: '200px' })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])
  return { ref, visible }
}
const particleFragment = `
  uniform vec3 uColor; varying float vAlpha;
  void main(){float d = length(gl_PointCoord-.5); if(d>.5)discard; gl_FragColor=vec4(uColor,(1.-d*2.)*vAlpha);}
`

function Particles() {
  const mat = useRef<THREE.ShaderMaterial>(null)
  const mesh = useRef<THREE.Points>(null)
  const reduced = useArchive((s) => s.reducedMotion)
  const [positions, targets] = useMemo(() => {
    const a = new Float32Array(1100 * 3), b = new Float32Array(1100 * 3)
    for (let i = 0; i < 1100; i++) {
      const y = 1 - (i / 1099) * 2, r = Math.sqrt(1 - y * y), angle = i * 2.399963229728653
      a.set([Math.cos(angle) * r * 3.8, y * 3.8, Math.sin(angle) * r * 3.8], i * 3)
      b.set([Math.cos(i * .045) * (1 + i / 1300), (i / 1100 - .5) * 9, Math.sin(i * .045) * 2.5], i * 3)
    }
    return [a, b]
  }, [])
  const uniforms = useMemo(() => ({ uTime: { value: 0 }, uMorph: { value: 0 }, uPointer: { value: new THREE.Vector2() }, uColor: { value: new THREE.Color('#cfff58') } }), [])
  useFrame(({ clock, pointer }) => {
    if (!mat.current || !mesh.current) return
    const p = window.scrollY / Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
    mat.current.uniforms.uTime.value = reduced ? 0 : clock.elapsedTime
    mat.current.uniforms.uMorph.value = reduced ? .3 : Math.sin(p * Math.PI * 2) * .5 + .5
    mat.current.uniforms.uPointer.value.copy(pointer)
    mesh.current.rotation.y = reduced ? .3 : clock.elapsedTime * .018 + p * 2
  })
  return <points ref={mesh}>
    <bufferGeometry><bufferAttribute attach="attributes-position" args={[positions, 3]} /><bufferAttribute attach="attributes-aTarget" args={[targets, 3]} /></bufferGeometry>
    <shaderMaterial ref={mat} vertexShader={particleVertex} fragmentShader={particleFragment} uniforms={uniforms} transparent depthWrite={false} blending={THREE.AdditiveBlending} />
  </points>
}

const imageVertex = `varying vec2 vUv; uniform float uTime; void main(){vUv=uv;vec3 p=position;p.z+=sin(p.x*3.+uTime)*.025;gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.);}`
const imageFragment = `varying vec2 vUv; uniform sampler2D uImage; uniform float uTime; uniform float uIntensity; void main(){vec2 uv=vUv;uv.x+=sin(uv.y*18.+uTime*.5)*uIntensity;vec4 c=texture2D(uImage,clamp(uv,0.,1.));gl_FragColor=vec4(c.rgb,c.a*.75);}`
function DistortedImage({ src }: { src: string }) {
  const tex = useTexture(src)
  const ref = useRef<THREE.ShaderMaterial>(null)
  const reduced = useArchive((s) => s.reducedMotion)
  const uniforms = useMemo(() => ({ uImage: { value: tex }, uTime: { value: 0 }, uIntensity: { value: .004 } }), [tex])
  useFrame(({ clock, pointer }) => {
    if (ref.current) {
      ref.current.uniforms.uTime.value = reduced ? 0 : clock.elapsedTime
      ref.current.uniforms.uIntensity.value = reduced ? 0 : .002 + Math.abs(pointer.x) * .012
    }
  })
  const textureImage = tex.image as { width: number; height: number }
  const aspect = textureImage.width / textureImage.height
  return <mesh position={[0, 0, 0]}><planeGeometry args={[5 * aspect, 5, 32, 32]} /><shaderMaterial ref={ref} uniforms={uniforms} vertexShader={imageVertex} fragmentShader={imageFragment} transparent /></mesh>
}

class GraphicsBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  render() { return this.state.failed ? <div className="graphics-fallback" aria-label="靜態幾何背景" /> : this.props.children }
}

export function WorldScene() {
  const reduced = useArchive((s) => s.reducedMotion)
  return <div className="world-canvas" aria-hidden="true"><GraphicsBoundary><Canvas frameloop={reduced ? 'demand' : 'always'} camera={{ position: [0, 0, 10], fov: 48 }} dpr={[1, 1.5]} gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}><Particles /></Canvas></GraphicsBoundary></div>
}

export function ImageScene({ src }: { src: string }) {
  const { ref, visible } = useSceneVisibility()
  const reduced = useArchive((s) => s.reducedMotion)
  return <div ref={ref} className="scene-viewport"><GraphicsBoundary><Canvas frameloop={visible && !reduced ? 'always' : 'demand'} camera={{ position: [0, 0, 6], fov: 48 }} dpr={[1, 1.5]} gl={{ alpha: true, antialias: false }}><Suspense fallback={null}><DistortedImage src={src} /></Suspense></Canvas></GraphicsBoundary></div>
}
