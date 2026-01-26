import { StackContainerFront } from '../StackContainerFront'
import { StackContainerBackend } from '../StackContainerBackend'
import { StackContainerAIEngineer } from '../StackContainerAIEngineer'

const estiloStackSection = 'mt-8 px-10 flex gap-8 justify-between grid grid-cols-2'

export function StackSection () {
    return (
        <div className={estiloStackSection}>
            <StackContainerFront />
            <StackContainerBackend />
            <StackContainerAIEngineer />
        </div>
    )
}