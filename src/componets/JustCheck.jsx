import React from 'react'
import { useGLTF, Stage, PresentationControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import model from '../assets/models/bmw_m4_competition_m_package.glb'
function Model(params) {
    const { scene }= useGLTF(model)
    return <primitive object={scene} />
}

function JustCheck() {
  return (
    <div>
    <Canvas dpr={[1,2]} shadows camera={{fov:45}} style={{marginTop:'10%'}} >
        <color attach={"background"} args={["#101010"]}/>
        <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI /4]}>
            <Stage environment={null}>
                <Model scale={0.01}/>
            </Stage>
        </PresentationControls>
    </Canvas>
    </div>
  )
}

export default JustCheck