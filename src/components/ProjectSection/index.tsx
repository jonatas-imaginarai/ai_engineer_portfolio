import { ProjectCardDM } from '../ProjectCardDM'
import { ProjectCardFlores } from '../ProjectCardFlores'
import { ProjectCardRudolf } from '../ProjectCardRudolf'
import { ProjectCardImaginar } from '../ProjectCardImaginar'


const estiloProjectSection = 'mt-8'
const titleProjectSection = 'ms-10 font-bold text-xl bg-orange-200 w-fit rounded-xs p-2'
const estiloProjectGridSection = 'grid grid-cols-2 mt-8 px-10 gap-4 justify-between items-center'

export function ProjectSection () {
    return (
        <div className={estiloProjectSection}>
            <h2 className={titleProjectSection}>Projects</h2>
            <div className={estiloProjectGridSection}>
                <ProjectCardDM
                    titleProjectCard='Dois Mundos'
                    descriptionProjectCard='Back Office Data Pipeline Automation. Document information extraction. OCR.'
                />
                <ProjectCardFlores
                    titleProjectCard='La Fiesta de las Flores'
                    descriptionProjectCard='FullStack App. Document information extraction. OCR.'
                />
                <ProjectCardRudolf
                    titleProjectCard='Rudolf Mercado Agroecológico'
                    descriptionProjectCard='FullStack App. Document information extraction. OCR.'
                />
                <ProjectCardImaginar
                    titleProjectCard='imaginar.ai'
                    descriptionProjectCard='Landing Page.'
                />
            </div>
        </div>
    )
}