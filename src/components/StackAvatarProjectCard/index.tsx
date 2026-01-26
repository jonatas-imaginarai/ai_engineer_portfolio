type StackAvatarProjectCardProps = {
    imgPath: string,
    stackName: string
}

const estiloStackAvatarProjectCard = 'flex flex-col items-center justify-center text-center size-6'
const estiloStackImgProjectCard = 'size-4 rounded-full'
const estiloStackTitleProjectCard = 'border rounded-md bg-slate-100 text-zinc-700 mt-1 text-xs p-2 py-0'

export function StackAvatarProjectCard( {imgPath, stackName}:StackAvatarProjectCardProps ) {
    return (
        <div className={estiloStackAvatarProjectCard}>
            <img src={imgPath} className={estiloStackImgProjectCard} alt={`Stack`} />
            <p className={estiloStackTitleProjectCard}>{stackName}</p>
        </div>
    )
}