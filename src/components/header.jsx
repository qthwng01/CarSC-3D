import { GrLanguage } from 'react-icons/gr'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { navItems } from '../constants'
import { useState } from 'react'

const Header = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div
      id="header"
      className="fixed z-50 top-0 right-0 left-0 bg-white px-4 py-6 2xl:px-14 border-b border-solid container w-full max-w-full mx-auto text-primary-color"
    >
      <div className="flex justify-between items-center flex-row">
        <div className="no_name">
          <span className="text-primary-color text-4xl font-bold mr-2">
            Car
          </span>
          <span className="text-third-color text-4xl font-bold mr-2">SC</span>
        </div>
        <nav className="hidden lg:block max-w-full mx-auto">
          {navItems.map((item) => (
            <a
              href={item.path}
              className="text-xl font-normal opacity-40 text-primary-color hover:opacity-100 lg:px-12 xl:px-20"
              key={item.id}
            >
              {item.name}
            </a>
          ))}
        </nav>
        <div className="hidden lg:flex">
          <span className="inline-flex items-center mr-10">
            <GrLanguage className="mr-2" /> EN
          </span>
          <a
            href="https://github.com/qthwng01"
            target="_blank"
            className="bg-primary-color text-white font-medium text-xl rounded-2xl px-7 py-2"
          >
            Hire me
          </a>
        </div>
        <span className="block lg:hidden" onClick={() => setToggle(!toggle)}>
          {!toggle ? (
            <AiOutlineMenu className="text-3xl cursor-auto" />
          ) : (
            <AiOutlineClose className="text-3xl cursor-auto" />
          )}
        </span>
      </div>
      <div
        className={`${
          toggle
            ? 'visible fixed top-0 right-0 left-0 bottom-0 bg-white z-10 w-full h-full transition-all duration-200 ease-linear translate-x-0 opacity-100'
            : 'invisible w-0 h-0 translate-x-[500px] opacity-0'
        }`}
      >
        <div className="h-full bg-[url(/bg-menu.jpg)] bg-no-repeat bg-cover">
          <div className="p-5 bg-gray-800 bg-opacity-70 w-full h-full">
            <span className="ml-5" onClick={() => setToggle(!toggle)}>
              <AiOutlineClose className="text-3xl cursor-auto text-white" />
            </span>
            <ul className="flex flex-col items-center justify-center flex-wrap pt-14">
              {navItems.map((item) => (
                <li className="py-4" key={item.id}>
                  <a
                    className="text-4xl font-semibold text-white"
                    href={item.path}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
