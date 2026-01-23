type CardStackProps = {
    titleCard: string,
    imgPath: string,
    textoCardStack: string,
    className?: string
}

const estiloTitleCardStack = 'text-md font-bold text-zinc-600'
const estiloIconCardStack = 'w-6'
const estiloCardStack = 'flex flex-col border rounded-xs p-4 justify-start items-start w-80 h-32 shadow-md bg-zinc-50'

export function CardStack ( {titleCard, imgPath, textoCardStack, className}:CardStackProps ) {
    return (
        <>
            <div className={`${estiloCardStack} ${className}`}>
                <div className="flex justify-start gap-4 mb-2">
                    <img src={imgPath} alt='' className={estiloIconCardStack}/>
                    <h4 className={estiloTitleCardStack}>{titleCard}</h4>
                </div>
                <p>{textoCardStack}</p>
            </div>
        
        
        </>
    )
}