import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { AboutMe } from './components/AboutMe'
import './App.css'
import PhotoMock from '../src/assets/img/eu_ceop-removebg-preview.png'

function App() {

  return (
    <div className='min-h-screen bg-gradient-to-br from-blue-100 via-white to-emerald-100'>
      <Header />
      <div className='flex flex-1 min-h-screen items-start mt-8 items-center justify-start'>
        <Hero />
        <img src={PhotoMock} alt="PhotoMock" className='h-100 px-8'/>
      </div>
      <AboutMe />
    </div>
  )
}

export default App
