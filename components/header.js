import Container from '@/components/container'
import Link from 'next/link'
import { useState } from 'react'

export default function Header({ projects }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuToggle = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    } else {
      setMobileMenuOpen(true)
    }
  }

  const menuClose = () => {
    setMobileMenuOpen(false)
  }

  return (
    <header className="fixed top-0 left-0 right-0 w-full z-[50]">
      <Container>
        <div className="flex flex-wrap">
          <Link aria-label="Navigate to the home page" onClick={menuClose} href="/" className="w-[150px] lg:w-[180px] h-[35px] lg:h-[45px] bg-blue text-white flex items-center justify-center uppercase text-xl leading-none">
            <div className="bg-white w-[90%]">
              <svg className="w-full scale-[1.01]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 96.55"><path d="M62.14 47.93c-.05-5.14-2.09-9.31-6.15-12.51-4.33-3.37-8.98-3.63-14.23-3.59h-5.08v32.36h5.08c5.24-.06 9.89-.15 14.28-3.63 3.96-3.1 6.04-7.6 6.1-12.63m45.14-.06c0-9.15-7.86-16.47-16.9-16.47v-.06c-9.31.06-16.95 7.54-16.95 16.84s7.97 16.48 16.95 16.48 16.9-7.45 16.9-16.8m19.63-.22c4.5 0 9.58-1.8 9.58-7.81 0-5.57-5.07-7.71-9.02-7.71h-7.26v15.52h6.7Zm31.69 0c4.51 0 9.58-1.8 9.58-7.81 0-5.57-5.07-7.71-9.02-7.71h-7.26v15.52h6.7Zm169.92.22c0-9.15-7.86-16.47-16.9-16.47v-.06c-9.31.06-16.95 7.54-16.95 16.84s7.97 16.48 16.95 16.48 16.9-7.45 16.9-16.8m40.71 19.89h-3.96l-23.53-34.76v34.76h-3.96v-39.5h5.35l22.14 32.78V28.24h3.96v39.52Zm-36.75-19.89c0 11.5-9.46 20.59-20.91 20.59s-20.85-8.92-20.85-20.27 9.41-20.59 20.85-20.59 20.91 8.94 20.91 20.27M291.7 31.8h-8.98v35.94h-3.96V31.82h-9.09v-3.58h22.03v3.58Zm-24.08 6.96h-4.49c-2.78-4.65-8.51-7.38-14.01-7.38-4.23 0-8.5 1.43-11.77 4.44-3.26 2.99-5.46 7.53-5.46 12.03 0 9.63 7.98 16.8 17.39 16.8 7.06 0 15.99-4.95 15.99-14.94h-22.09v-3.58h26.85c0 14.99-10.27 22.3-20.91 22.3-11.4 0-21.19-9.09-21.19-20.64 0-5.23 2.41-10.54 6.1-14.17 4.12-4.06 9.42-6.04 15.09-6.04 4.12 0 8.18 1.13 11.6 3.37 2.57 1.71 5.88 4.76 6.9 7.81m-44.93 28.98h-3.96L195.2 32.98v34.76h-3.96v-39.5h5.35l22.14 32.78V28.24h3.96v39.52Zm-39.25 0h-3.96v-39.5h3.96v39.52Zm-20.88-16.76 12.09 16.69h-4.92l-11.75-16.22c-2.36 0-4.47 0-6.08-.01v16.23h-3.96v-39.5h.01v-.01h10.94c5.92 0 13.54 3.22 13.54 11.58 0 7.03-4.63 10.2-9.87 11.26m-31.69 0 12.09 16.69h-4.92l-11.75-16.22c-2.36 0-4.47 0-6.08-.01v16.23h-3.96V28.17h.01v-.01h10.94c5.93 0 13.54 3.22 13.54 11.58 0 7.03-4.63 10.2-9.87 11.26m-19.63-3.13c0 11.5-9.47 20.59-20.91 20.59s-20.86-8.92-20.86-20.27S78.88 27.6 90.33 27.6s20.91 8.94 20.91 20.27m-45.14.06c0 5.66-2.41 10.97-6.47 14.7-4.71 4.29-9.9 5.14-15.99 5.14H32.73V28.24h10.64c5.67.06 10.96.96 15.51 4.59 4.49 3.7 7.22 9.37 7.22 15.09M400 0H0v96.55h400V0Z" fill="#0c61ac"/></svg>
            </div>
          </Link>

          <div className="ml-auto">
            <button aria-label="Open Main Menu" className="bg-blue text-white w-[35px] lg:w-[45px] h-[35px] lg:h-[45px] flex items-center justify-center" onClick={menuToggle}>
              <svg className="w-[65%]" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="14.625" x2="30" y2="14.625" stroke="currentColor" strokeWidth="1"/>
                <line x1="15.375" y1="1.63918e-08" x2="15.375" y2="30" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </button>
          </div>
        </div>
      </Container>
      
      {/* {mobileMenuOpen && ( */}
        { mobileMenuOpen && (
          <button aria-label="Close Navigation" onClick={menuClose} className="h-screen fixed top-0 left-0  right-0 bottom-0 z-[50]"></button>
        )}

        <div className={`menu bg-blue w-full lg:w-[700px] h-screen fixed top-0 right-0 z-[51] flex flex-wrap px-[20px] lg:px-[30px] transition-transform ease-in-out duration-500 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-[700px]' }`}>
          <div className="absolute top-0 left-0 mx-[20px] lg:mx-[30px]">
            <Link href="/" className="w-[150px] lg:w-[180px] h-[35px] lg:h-[45px] bg-white text-white flex items-center justify-center uppercase text-xl leading-none lg:hidden" aria-label="Navigate to the home page">
              <div className="bg-blue w-[90%]">
                <svg className="w-full scale-[1.01]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 96.55"><path d="M62.14 47.93c-.05-5.14-2.09-9.31-6.15-12.51-4.33-3.37-8.98-3.63-14.23-3.59h-5.08v32.36h5.08c5.24-.06 9.89-.15 14.28-3.63 3.96-3.1 6.04-7.6 6.1-12.63m45.14-.06c0-9.15-7.86-16.47-16.9-16.47v-.06c-9.31.06-16.95 7.54-16.95 16.84s7.97 16.48 16.95 16.48 16.9-7.45 16.9-16.8m19.63-.22c4.5 0 9.58-1.8 9.58-7.81 0-5.57-5.07-7.71-9.02-7.71h-7.26v15.52h6.7Zm31.69 0c4.51 0 9.58-1.8 9.58-7.81 0-5.57-5.07-7.71-9.02-7.71h-7.26v15.52h6.7Zm169.92.22c0-9.15-7.86-16.47-16.9-16.47v-.06c-9.31.06-16.95 7.54-16.95 16.84s7.97 16.48 16.95 16.48 16.9-7.45 16.9-16.8m40.71 19.89h-3.96l-23.53-34.76v34.76h-3.96v-39.5h5.35l22.14 32.78V28.24h3.96v39.52Zm-36.75-19.89c0 11.5-9.46 20.59-20.91 20.59s-20.85-8.92-20.85-20.27 9.41-20.59 20.85-20.59 20.91 8.94 20.91 20.27M291.7 31.8h-8.98v35.94h-3.96V31.82h-9.09v-3.58h22.03v3.58Zm-24.08 6.96h-4.49c-2.78-4.65-8.51-7.38-14.01-7.38-4.23 0-8.5 1.43-11.77 4.44-3.26 2.99-5.46 7.53-5.46 12.03 0 9.63 7.98 16.8 17.39 16.8 7.06 0 15.99-4.95 15.99-14.94h-22.09v-3.58h26.85c0 14.99-10.27 22.3-20.91 22.3-11.4 0-21.19-9.09-21.19-20.64 0-5.23 2.41-10.54 6.1-14.17 4.12-4.06 9.42-6.04 15.09-6.04 4.12 0 8.18 1.13 11.6 3.37 2.57 1.71 5.88 4.76 6.9 7.81m-44.93 28.98h-3.96L195.2 32.98v34.76h-3.96v-39.5h5.35l22.14 32.78V28.24h3.96v39.52Zm-39.25 0h-3.96v-39.5h3.96v39.52Zm-20.88-16.76 12.09 16.69h-4.92l-11.75-16.22c-2.36 0-4.47 0-6.08-.01v16.23h-3.96v-39.5h.01v-.01h10.94c5.92 0 13.54 3.22 13.54 11.58 0 7.03-4.63 10.2-9.87 11.26m-31.69 0 12.09 16.69h-4.92l-11.75-16.22c-2.36 0-4.47 0-6.08-.01v16.23h-3.96V28.17h.01v-.01h10.94c5.93 0 13.54 3.22 13.54 11.58 0 7.03-4.63 10.2-9.87 11.26m-19.63-3.13c0 11.5-9.47 20.59-20.91 20.59s-20.86-8.92-20.86-20.27S78.88 27.6 90.33 27.6s20.91 8.94 20.91 20.27m-45.14.06c0 5.66-2.41 10.97-6.47 14.7-4.71 4.29-9.9 5.14-15.99 5.14H32.73V28.24h10.64c5.67.06 10.96.96 15.51 4.59 4.49 3.7 7.22 9.37 7.22 15.09M400 0H0v96.55h400V0Z" fill="#FFF"/></svg>
              </div>
            </Link>
          </div>

          <div className="absolute top-0 right-0 mx-[20px] lg:mx-[30px]">
            <button aria-label="Close Navigation" className="bg-white text-blue w-[35px] lg:w-[45px] h-[35px] lg:h-[45px] flex items-center justify-center" onClick={menuToggle}>
              <svg className="w-[65%] rotate-45" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line y1="14.625" x2="30" y2="14.625" stroke="currentColor" strokeWidth="1"/>
                <line x1="15.375" y1="1.63918e-08" x2="15.375" y2="30" stroke="currentColor" strokeWidth="1"/>
              </svg>
            </button>
          </div>
          
          <nav className="text-white w-full my-auto max-h-[65vh] overflow-y-scroll  remove-scroll text-2xl leading-none">
            <ul className="border-b border-white border-opacity-75">
              <li><Link onClick={menuClose} href="/about" className="block w-full border-t border-white border-opacity-75 py-3 lg:py-4">About</Link></li>
              <li>
                <Link onClick={menuClose} href="/projects" className="block w-full border-t border-white border-opacity-75 py-3 lg:py-4">Projects</Link>
                <ul className="font-serif text-sm leading-none">
                  {projects?.map((e, i) => {
                    return (
                      <li key={i}><Link onClick={menuClose} href={`/projects/${e.slug.current}`} className="block w-full border-t border-white border-opacity-75 py-3 lg:py-5 lg:pl-8">{e.title} <span className="italic opacity-60">Residential</span></Link></li>
                    )
                  })}
                </ul>
              </li>
              <li><Link onClick={menuClose} href="/people" className="block w-full border-t border-white border-opacity-75 py-3 lg:py-4">People</Link></li>
              <li><Link onClick={menuClose} href="/responsibility" className="block w-full border-t border-white border-opacity-75 py-3 lg:py-4">Responsibility</Link></li>
            </ul>
          </nav>

          <ul className="absolute bottom-0 left-0 w-full py-[15px] px-[20px] lg:py-[20px] lg:px-[30px] flex space-x-4 text-white">
            <li><Link onClick={menuClose} href="/contact" className="block">Contact</Link></li>
            <li><Link onClick={menuClose} href="/policies" className="block">Policies</Link></li>
          </ul>
        </div>
      {/* )} */}
    </header>
  )
}