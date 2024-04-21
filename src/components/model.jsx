import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'
import Mercedes from '../model/Mercedes'
import { performanceCar } from '../constants'
import prImage from '/pr-img3.jpg'
import { IoMdArrowUp } from 'react-icons/io'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
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
      x: -25,
      duration: 2,
      ease: 'power2.inOut',
    })
  }, [])

  return (
    <div id="model" className="lg:pt-[1.5rem] md:mt-[1.25rem]">
      <div className="container w-full h-auto mx-auto pt-5 pb-10">
        <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-semibold mb-4">
          Best Performance of Car
        </h2>
        <div className="flex flex-row items-center justify-center">
          <span className="hidden md:block border-2 border-slate-400 w-8 mr-2" />
          <p>We Provide You Best Info Performance of Car</p>
        </div>
        <div className="my-4">
          <img
            src={prImage}
            className="w-full h-auto rounded-2xl"
            alt="preview"
          />
        </div>
        <div className="w-full h-auto text-center bg-white dark:bg-white">
          <Drawer dismissible={false}>
            <DrawerTrigger asChild>
              <div className="text-center flex flex-row items-center justify-center mt-6">
                <p className="text-2xl font-medium mr-2 cursor-pointer">
                  Open 3D Model
                </p>
                <span className="border-4 border-third-color rounded-3xl px-2 py-4">
                  <IoMdArrowUp className="text-black font-bold text-xl animate-bounce" />
                </span>
              </div>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full">
                <DrawerHeader>
                  <DrawerTitle className="text-center">
                    3D Model Mercedes - Benz SL63 AMG
                  </DrawerTitle>
                  <DrawerDescription className="text-center">
                    Set color customs - Developing.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4 pb-0">
                  <div className="flex items-center justify-center space-x-2 w-full h-[400px] lg:h-[500px]">
                    <Canvas>
                      <Stage environment="city" intensity={0.3}>
                        <Suspense fallback="Loading...">
                          <Mercedes />
                        </Suspense>
                      </Stage>
                      <OrbitControls enableZoom={true} />
                    </Canvas>
                  </div>
                </div>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">Close</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
        <div className="mt-8 m_performance">
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#FAFAFA] py-8 rounded-xl">
            {performanceCar.map((item) => (
              <div className="px-5 item" key={item.id}>
                <h3 className="text-black font-semibold text-2xl md:text-3xl lg:text-4xl mb-2">
                  {item.desc}
                </h3>
                <p className="text-slate-600">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Model
