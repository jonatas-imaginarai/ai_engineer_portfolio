type CTAHeroProps = {
    className?: string
}

const estiloCTAHeroButtonDownload = 'border border-gray-200 px-12 py-2 rounded-xs hover:bg-blue-200 active:bg-blue-100 cursor-pointer duration-200 ease-in-out'
const estiloCTAHeroButtonTalkToMe = 'border border-gray-200 px-12 py-2 rounded-xs bg-emerald-400 hover:bg-emerald-200 active:bg-emerald-100 cursor-pointer duration-200 ease-in-out text-white font-bold'

const estiloCTAHero = 'flex gap-6';

export function CTAHero ( {className}: CTAHeroProps ) {
    return (
        <div className={`${estiloCTAHero} ${className}`}>
            <button className={`${estiloCTAHeroButtonDownload}`}>Download CV</button>
            <button className={`${estiloCTAHeroButtonTalkToMe}`}>Talk to Me</button>
        </div>
    )
}