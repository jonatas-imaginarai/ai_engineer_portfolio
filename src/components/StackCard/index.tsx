type StackCardProps = {
    imgStackCard: string,
    stackName: string
}

const estiloStackCard = 'flex flex-col text-center items-center justify-center'
const estiloImgStackCard = 'size-10'
const estiloNameStackCard = 'text-zinc-600 font-bold text-sm mt-2'

export function StackCard ( {imgStackCard, stackName}: StackCardProps ) {
    return (
        <div className={estiloStackCard}>
            <img src={imgStackCard} className={estiloImgStackCard} alt="Icono Stack jonatas.imaginar.ai" />
            <h4 className={estiloNameStackCard}>{stackName}</h4>
        </div>
    )
}