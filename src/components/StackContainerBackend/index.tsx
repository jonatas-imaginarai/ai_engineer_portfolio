import { StackCard } from '../StackCard'
import nodeIcon from '../../assets/icons/Node.js.webp'
import fastapiIcon from '../../assets/icons/FastAPI.webp'
import postgresIcon from '../../assets/icons/PostgresSQL.webp'
import mongodbIcon from '../../assets/icons/MongoDB.webp'
import djangoIcon from '../../assets/icons/Django.webp'
import dockerIcon from '../../assets/icons/Docker.webp'

const estiloStackContainerBackend = 'border border-slate-300 shadow-md flex gap-6 w-fit px-8 py-6 rounded-sm relative justify-center items-center'

export function StackContainerBackend () {
    return (
        <div className={estiloStackContainerBackend}>
            <span className= 'absolute -top-3 left-4 font-bold z-10 px-2 text-sm text-slate-600 bg-sky-50 border border-slate-300 rounded-md'>Back-End</span>
            <StackCard
                imgStackCard={nodeIcon}
                stackName='NodeJS'
            />
            <StackCard
                imgStackCard={djangoIcon}
                stackName='Django'
            />
            <StackCard
                imgStackCard={fastapiIcon}
                stackName='FastAPI'
            />
            <StackCard
                imgStackCard={postgresIcon}
                stackName='PostgresSQL'
            />
            <StackCard
                imgStackCard={mongodbIcon}
                stackName='MongoDB'
            />
            <StackCard
                imgStackCard={dockerIcon}
                stackName='Docker'
            />
        </div>
    )
}