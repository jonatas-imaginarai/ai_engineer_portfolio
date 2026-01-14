type ParagraphHeroProps = {
    label: string,
    className?: string
}

const estiloParagraphHero = 'text-gray-700'

export function ParagraphHero ({label, className}: ParagraphHeroProps ) {
    return (
        <div>
            <p className={`${estiloParagraphHero} ${className}`}>{label}</p>
        </div>
    )
}