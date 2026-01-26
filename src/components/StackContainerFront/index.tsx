import { StackCard } from '../StackCard'
import htmlIcon from '../../assets/icons/icons8-html5-48.webp'
import cssIcon from '../../assets/icons/icons8-css3-100.webp'
import javascriptIcon from '../../assets/icons/icons8-javascript-100.webp'
import reactIcon from '../../assets/icons/icons8-react-80.webp'
import tailwindcssIcon from '../../assets/icons/icons8-tailwind-css-100.webp'
import typescriptIcon from '../../assets/icons/icons8-typescript-100.webp'

const estiloStackContainerFront = 'border border-slate-300 shadow-md flex gap-6 w-fit px-8 py-4 rounded-sm relative justify-center items-center'

export function StackContainerFront () {
    return (
        <div className={estiloStackContainerFront}>
            <span className= 'absolute -top-3 left-4 font-bold z-10 px-2 text-sm text-slate-600 bg-sky-50 border border-slate-300 rounded-md'>Front-End</span>
            <StackCard
                imgStackCard={htmlIcon}
                stackName='HTML'
            />
            <StackCard
                imgStackCard={cssIcon}
                stackName='CSS'
            />
            <StackCard
                imgStackCard={javascriptIcon}
                stackName='JavaScript'
            />
            <StackCard
                imgStackCard={typescriptIcon}
                stackName='TypeScript'
            />
            <StackCard
                imgStackCard={reactIcon}
                stackName='ReactJS'
            />
            <StackCard
                imgStackCard={tailwindcssIcon}
                stackName='TailwindCSS'
            />
            

        </div>
    )
}