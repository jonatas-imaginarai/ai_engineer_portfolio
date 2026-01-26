import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { AboutMeSection } from './components/AboutMeSection'
import { StackSection } from './components/StackSection'
import { ProjectSection } from './components/ProjectSection'
import './App.css'


function App() {

  return (
    <>
      <div className='min-h-screen bg-gradient-to-br from-blue-100 via-white to-emerald-100 pb-0'>
        <Header />
        <Hero />
      </div>
      <hr className=''/>
      <div className='flex flex justify-center-safe items-start mt-6 px-8 gap-16'>
        <AboutMeSection />
      </div>
      <div className='bg-gradient-to-b from-sky-100 via-white to-cyan-50/40'>
        <hr className='mt-8' />
        <StackSection />
        <hr className='mt-8' />
      </div>
      <div>
        <ProjectSection />
      </div>
    </>
  )
}

export default App
