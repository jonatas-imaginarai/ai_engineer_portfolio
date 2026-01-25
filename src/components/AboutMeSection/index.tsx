import { AboutMe } from '../AboutMe'
import { CardsServices } from '../CardsServices'
import imgIconFront from '../../assets/icons/icons8-interface-100.webp'
import imgIconBack from '../../assets/icons/icons8-backend-100.webp'
import imgIconAutomation from '../../assets/icons/icons8-automation-50.webp'
import imgIconCV from '../../assets/icons/icons8-vision-100.webp'



const estiloAboutMeSection = 'w-full px-2 mt-4 flex gap-8'

export function AboutMeSection () {
    return (
        <div className={estiloAboutMeSection}>
            <AboutMe />
            <div className='flex flex-col gap-6 w-1/2'>
                <CardsServices
                    titleCardService = 'Front-End'
                    textoCardService = 'I build interfaces using frameworks, vibe-coding, or a combination of both'
                    imgIconCardService = {imgIconFront}
                />
                <CardsServices
                    titleCardService = 'Back-End'
                    textoCardService = 'I build back-end systems using reliable architectures, modern frameworks, and automation.'
                    imgIconCardService = {imgIconBack}
                />
                <CardsServices
                    titleCardService = 'AI Automation'
                    textoCardService = 'I build AI-driven automations to streamline workflows and reduce manual work'
                    imgIconCardService = {imgIconAutomation}
                />
                <CardsServices
                    titleCardService = 'Computer Vision'
                    textoCardService = 'I build Computer Vision systems that enable applications to see and understand images and video.'
                    imgIconCardService = {imgIconCV}
                />
            </div>

        </div>
    )
}