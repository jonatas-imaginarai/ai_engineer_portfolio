import crewaiIcon from '../../assets/icons/crewai-color.webp'
import typescriptIcon from '../../assets/icons/TypeScript.webp'
import reactIcon from '../../assets/icons/React.webp'
import pythonIcon from '../../assets/icons/Python.webp'
import postgresIcon from '../../assets/icons/PostgresSQL.webp'
import nodeIcon from '../../assets/icons/Node.js.webp'
import tailwindIcon from '../../assets/icons/Tailwind CSS.webp'
import imgProjectCard from '../../assets/img/photomock.jpg'
import { StackAvatarProjectCard } from '../StackAvatarProjectCard'


type ProjectCardProps = {
    titleProjectCard: string,
    descriptionProjectCard: string,
}

const estiloProjectCard = 'flex flex-col border rounded-md shadow-md w-full h-full'
const estiloImgProjectCard = 'rounded-t-md h-64 w-full object-cover'
const estiloDescriptionSectionProjectCard = 'flex flex-col text-center flex-1'
const estiloTitleProjectCard = 'mt-4 font-bold text-slate-600'
const estiloDescriptionProjectCard = 'mt-2 px-6 flex-1'
const estiloButtonStacksProjectCard = 'mt-6 mb-4 flex flex-col justify-between px-6 items-center'
const estiloButtonProjectCard = 'w-4/5 border rounded-sm py-2 px-8 text-sm shadow-md bg-emerald-300 hover:bg-emerald-200 active:bg-emerald-100 duration-200 ease-in-out cursor-pointer text-center items-center'
const estiloStackSectionProjectCard = 'flex gap-12 items-center justify-between mb-8'


export function ProjectCardFlores ( {titleProjectCard, descriptionProjectCard}:ProjectCardProps ) {
    return (
        <div className={estiloProjectCard}>
            <img src={imgProjectCard} className={estiloImgProjectCard} alt="Imagen Projecto Card" />
            <hr />
            <div className={estiloDescriptionSectionProjectCard}>
                <h3 className={estiloTitleProjectCard}>{titleProjectCard}</h3>
                <p className={estiloDescriptionProjectCard}>{descriptionProjectCard}</p>
                <div className={estiloButtonStacksProjectCard}>
                    <div className={estiloStackSectionProjectCard}>
                        <StackAvatarProjectCard
                            imgPath={typescriptIcon}
                            stackName='TypeScript'
                        />
                        <StackAvatarProjectCard
                            imgPath={reactIcon}
                            stackName='ReactJS'
                        />
                        <StackAvatarProjectCard
                            imgPath={nodeIcon}
                            stackName='Node.JS'
                        />
                        <StackAvatarProjectCard
                            imgPath={postgresIcon}
                            stackName='Postgres'
                        />
                        <StackAvatarProjectCard
                            imgPath={pythonIcon}
                            stackName='Python'
                        />
                        <StackAvatarProjectCard
                            imgPath={crewaiIcon}
                            stackName='CrewAI'
                        />
                        <StackAvatarProjectCard
                            imgPath={tailwindIcon}
                            stackName='TailwindCSS'
                        />
                    </div>
                    <button className={estiloButtonProjectCard}>Live Link</button>
                </div>
            </div>
        </div>
    )
}