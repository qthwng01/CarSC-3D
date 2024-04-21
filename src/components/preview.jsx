import { useRef } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import videoSrc from '/0419.mp4'
import { ScrollTrigger } from 'gsap/all'
import { infoCar } from '../constants'
gsap.registerPlugin(ScrollTrigger)

const Preview = () => {
  const videoRef = useRef()

  useGSAP(() => {
    gsap.from('#previewText', {
      scrollTrigger: {
        trigger: '#previewText',
        start: '10% bottom',
      },
      opacity: 0,
      duration: 2,
      ease: 'power2.inOut',
    })

    gsap.to('.pr_info', {
      scrollTrigger: {
        trigger: '.pr_info',
        toggleActions: 'restart reverse restart reverse',
        start: '10% bottom',
      },
      opacity: 1,
      y: 10,
      duration: 1,
      ease: 'power2.inOut',
    })
  }, [])

  return (
    <div id="preview" className="bg-black lg:pt-[1.5rem] md:mt-[1.25rem]">
      <div className="container w-full max-w-full h-auto mx-auto px-4 xl:px-14 pb-14">
        <div className="xl:w-full pt-12">
          <h2
            id="previewText"
            className="text-white font-bold text-4xl md:text-5xl lg:text-6xl text-center mb-10"
          >
            Mercedes-AMG SL Roadster
          </h2>
          <video
            className="pointer-events-none rounded-xl"
            playsInline
            preload="none"
            muted
            autoPlay
            ref={videoRef}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
          <div className="mt-8 pr_info">
            <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {infoCar.map((item) => (
                <li className="w-full pt-4 lg:px-4" key={item.id}>
                  <h3 className="text-white font-semibold text-2xl md:text-4xl mb-4">
                    {item.heading}
                  </h3>
                  <p className="text-slate-300">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Preview
