import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { AboutMe } from './components/AboutMe'
import './App.css'
import PhotoMock from '../src/assets/img/eu_ceop-removebg-preview.png'
import { AvatarAboutMe } from './components/AvatarAboutMe'
import { ImgAboutMe } from './components/ImgAboutMe'


function App() {

  return (
    <>
      <div className='min-h-screen bg-gradient-to-br from-blue-100 via-white to-emerald-100 pb-0'>
        <Header />
        <Hero />
      </div>
      <hr className=''/>
      <div className='flex flex justify-center-safe items-start mt-6 px-8 gap-16'>
        <AboutMe />
        <ImgAboutMe imgPath={PhotoMock} className='object-cover w-2/5 h-4/5'/>
      </div>
    </>
  )
}

export default App
