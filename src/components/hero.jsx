import hero from '../assets/hero2.png'
import { MdArrowOutward } from 'react-icons/md'
import { IoMdArrowDroprightCircle } from 'react-icons/io'
import {
  FaRegDotCircle,
  FaArrowRight,
  FaCarAlt,
  FaTruck,
  FaTrain,
  FaMotorcycle,
} from 'react-icons/fa'
import { PiBicycleThin } from 'react-icons/pi'
import { TbEyePin } from 'react-icons/tb'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger)

const Hero = () => {
  useGSAP(() => {
    gsap.to('#h_text', {
      opacity: 1,
      y: -10,
      duration: 3,
      ease: 'power2.inOut',
    })

    gsap.to('#h_state', {
      opacity: 1,
      y: 0,
      duration: 3,
      ease: 'power2.inOut',
    })

    gsap.to('#hl_div', {
      opacity: 1,
      y: -10,
      duration: 3,
      ease: 'power2.inOut',
    })
  }, [])

  return (
    <div id="home" className="pt-[10rem] -mt-[3.25rem] md:-mt-[1.25rem]">
      <div className="container w-full max-w-full mx-auto px-4 xl:px-14 pb-10">
        <div className="flex flex-col flex-wrap lg:flex-row lg:flex-nowrap">
          {/* left */}
          <div id="hl_div" className="w-full 2xl:h-full 2xl:w-1/2 relative">
            <div className="flex items-center md:justify-center lg:justify-start mb-6 overflow-x-auto md:overscroll-none">
              <a className="p-4 mr-12 text-xl cursor-pointer transition-al h-[52px] border-b-4 active:border-b-4 border-black">
                <FaCarAlt />
              </a>
              <a className="p-4 mr-12 text-xl cursor-pointer transition-all h-[52px] hover:border-b-4 border-black">
                <FaTruck />
              </a>
              <a className="p-4 mr-12 text-xl cursor-pointer transition-all h-[52px] hover:border-b-4 border-black">
                <FaTrain />
              </a>
              <a className="p-4 mr-12 text-xl cursor-pointer transition-all h-[52px] hover:border-b-4 border-black">
                <FaMotorcycle />
              </a>
              <a className="p-4 mr-12 text-xl cursor-pointer transition-all h-[52px] hover:border-b-4 border-black">
                <PiBicycleThin />
              </a>
            </div>
            <h2 className="text-4xl md:text-center lg:text-start md:text-5xl font-bold text-primary-color mb-2">
              MERCEDES-BENZ
            </h2>
            <h2 className="text-4xl md:text-center lg:text-start md:text-5xl font-bold text-primary-color mb-2">
              SL63 AMG
            </h2>
            <div className="lg:absolute origin-center top-5% left-[-7%] translate-y-0 mb-6">
              <img src={hero} className="w-full h-auto" alt="hero" />
            </div>
            <div className="hidden z-10 xl:block xl:absolute top-[32%] right-[2%] md:top-[25%] lg:top-[20%] lg:right-[20%] lg:translate-x-[20%] lg:translate-y-[20%] 2xl:top-[45%] 2xl:right-[15%] border-2 rounded-2xl shadow-xl md:bg-white/30 bg-white">
              <div className="md:backdrop-blur-sm md:backdrop-contrast-125 md:backdrop-grayscale-0 md:backdrop-opacity-10 md:backdrop-saturate-50 w-full md:w-52 h-auto p-2">
                <div className="flex justify-end mb-4">
                  <FaRegDotCircle className="text-third-color text-2xl" />
                </div>
                <div className="mb-8">
                  <a className="border-2 border-black rounded-3xl px-8 py-1">
                    + BENZ
                  </a>
                </div>
                <span className="font-semibold text-md mb-4">Price 2024</span>
                <h3 className="font-semibold text-3xl mb-6">$8750.00</h3>
                <div className="flex justify-between">
                  <a className="text-black p-4 bg-white rounded-full">
                    <TbEyePin />
                  </a>
                  <a className="text-black p-4 bg-white rounded-full">
                    <FaArrowRight />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="w-full 2xl:w-1/2">
            <div
              id="h_state"
              className="flex items-center md:justify-end mb-6 lg:mb-6"
            >
              <span className="border-2 border-slate-400 w-8 mr-2"></span>
              <p className="text-xl font-medium ">
                Statement That Few Vehicles can Match!
              </p>
            </div>
            <div
              id="h_text"
              className="mb-6 relative w-full text-center md:text-end"
            >
              <h2 className="text-5xl md:text-7xl 2xl:text-8xl font-bold mb-6">
                Luxury Car In
              </h2>
              <h2 className="text-6xl md:text-8xl 2xl:text-9xl font-bold mb-6 lg:mb-6">
                Worldwide
              </h2>
              <div className="text-right lg:pr-6">
                <div className="flex items-center justify-end mb-6">
                  <span className="bg-gradient-to-b from-slate-400 to-third-color rounded-full w-6 h-6 mr-4"></span>
                  <p className="font-medium text-lg">
                    Just fast and sport style
                  </p>
                </div>
                <p className="font-semibold text-xl lg:text-2xl">
                  2023 for comprehensive cover-up 20% a year earlier
                </p>
                <p className="font-semibold text-xl lg:text-2xl">
                  9Q @ 2022 abd the highest since the abi started
                </p>
                <p className="font-semibold text-xl lg:text-2xl">
                  collecting this data (2024)
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <a className="inline-flex cursor-pointer items-center mx-2 lg:mx-4 bg-black text-white rounded-3xl p-4 md:p-5 lg:px-10 py-2">
                Explore Now <MdArrowOutward className="ml-2" />
              </a>
              <a className="inline-flex cursor-pointer items-center mx-2 lg:mx-4 border-black border-2 text-black rounded-3xl p-4 md:p-5 lg:px-10 py-2">
                Watch Video <IoMdArrowDroprightCircle className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
