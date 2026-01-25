type CardsServicesProps = {
    titleCardService: string,
    textoCardService: string,
    imgIconCardService: string
}

const estiloCardsService = ' flex border rounded-sm p-8 w-full gap-4 items-center h-24 shadow-md bg-zinc-50'
const estiloTitleCardsService = 'font-bold py-1 border text-slate-700 rounded-md w-fit text-sm bg-slate-100 px-4'
const estiloTextosCardsService = 'flex flex-col justify-items-start'
const estiloContentCardsService = 'mt-1'
const estiloIconCardService = 'size-16'

export function CardsServices ( {titleCardService, textoCardService, imgIconCardService}: CardsServicesProps ) {
    return (
        <div className={estiloCardsService}>
            <img src={imgIconCardService} className={estiloIconCardService} alt="icono Servicio jonatas.imaginar.ai" />
            <div className={estiloTextosCardsService}>
                <h3 className={estiloTitleCardsService}>{titleCardService}</h3>
                <p className={estiloContentCardsService}>{textoCardService}</p>
            </div>
        </div>
    )
}