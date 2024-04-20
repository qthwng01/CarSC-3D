const Footer = () => {
  return (
    <div className="lg:pt-[1.5rem] md:mt-[1.25rem]">
      <div className="container w-full max-w-full h-auto mx-auto px-4 xl:px-14 lg:pb-10">
        <div className="bg-black text-white px-2 py-4 flex flex-col items-center lg:flex-row lg:justify-between">
          <h3>
            Designed and dev by <strong>qthwngg_.</strong>
          </h3>
          <h3 className="text-center">
            Built with <strong>Tailwind CSS, GSAP, ThreeJS</strong> and deloy on{' '}
            <strong>Vercel</strong>.
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Footer
