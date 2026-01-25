import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { AboutMe } from './components/AboutMe'
import { AboutMeSection } from './components/AboutMeSection'
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
    </>
  )
}

export default App
