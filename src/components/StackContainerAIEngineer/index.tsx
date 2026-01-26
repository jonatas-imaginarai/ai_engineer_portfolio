import { StackCard } from '../StackCard'
import pythonIcon from '../../assets/icons/Python.webp'
import crewaiIcon from '../../assets/icons/crewai-color.webp'
import huggingfaceIcon from '../../assets/icons/huggingface-color.webp'
import pytorchIcon from '../../assets/icons//PyTorch.webp'
import n8nIcon from '../../assets/icons/n8n-color.webp'
import airflowIcon from '../../assets/icons/ApacheAirflow.webp'
import opencvIcon from '../../assets/icons/OpenCV.webp'

const estiloStackContainerAIEngineer = 'col-span-2 border border-slate-300 shadow-md flex gap-6 px-8 py-4 rounded-sm relative justify-self-center w-full max-w-3xl'

export function StackContainerAIEngineer () {
    return (
        <div className={estiloStackContainerAIEngineer}>
            <span className= 'absolute -top-3 left-4 font-bold z-10 px-2 text-sm text-slate-600 border border-slate-300 rounded-md bg-gradient-to-b from-white via-white to-sky-50'>AI Engineering</span>
            <StackCard
                imgStackCard={pythonIcon}
                stackName='Python'
            />
            <StackCard
                imgStackCard={crewaiIcon}
                stackName='Crew AI'
            />
            <StackCard
                imgStackCard={huggingfaceIcon}
                stackName='Hugging Face'
            />
            <StackCard
                imgStackCard={pytorchIcon}
                stackName='PyTorch'
            />
            <StackCard
                imgStackCard={n8nIcon}
                stackName='n8n'
            />
            <StackCard
                imgStackCard={airflowIcon}
                stackName='Apache Airflow'
            />
            <StackCard
                imgStackCard={opencvIcon}
                stackName='OpenCV'
            />
        </div>
    )
}