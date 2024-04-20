import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Mercedes from '../model/Mercedes'
import { performanceCar } from '../constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const Model = () => {
  useGSAP(() => {
    gsap.from('.item', {
      scrollTrigger: {
        trigger: '.item',
        toggleActions: 'restart reverse restart reverse',
        start: '10% bottom',
      },
      opacity: 1,
      x: -10,
      duration: 1,
      ease: 'power2.inOut',
    })
  }, [])

  return (
    <div id="model" className="lg:pt-[1.5rem] md:mt-[1.25rem]">
      <div className="container w-full max-w-full h-auto mx-auto pt-5 px-4 xl:px-14 pb-10">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
          Best Performance of Car
        </h2>
        <div className="flex flex-row items-center justify-center">
          <span className="border-2 border-slate-400 w-8 mr-2"></span>
          <p>We Provide You Best Info Performance of Car</p>
        </div>
        <div className="w-full h-[300px] lg:h-[500px]">
          <Canvas>
            <Stage environment="city" intensity={0.3}>
              <Mercedes />
            </Stage>
            <OrbitControls
              enableZoom={false}
              //   minZoom={2}
              //   maxZoom={10}
              //target={new THREE.Vector3(0, 0, 0)}
            />
          </Canvas>
        </div>
        <div className="mt-8 m_performance">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#FAFAFA] py-8 rounded-xl">
            {performanceCar.map((item) => (
              <div className="px-5 item" key={item.id}>
                <h3 className="text-black font-semibold text-2xl md:text-3xl lg:text-4xl mb-4">
                  {item.desc}
                </h3>
                <p className="text-black">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Model
