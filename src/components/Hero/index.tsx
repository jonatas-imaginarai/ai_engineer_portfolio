import { TitleHero } from '../TitleHero'
import { ParagraphHero } from '../ParagraphHero'
import { SocialContactHero } from '../SocialContactHero'
import { CTAHero } from '../CTAHero'

export function Hero () {
    return (
        <div className='flex flex-col flex-1 justify-center items-center w-full mt-16'>
            <TitleHero />
            <ParagraphHero
                label='I build AI Software and Automation Systems for Business.'
                className='px-8 mt-6 text-wrap text-2xl text-slate-600'
            />
            <ParagraphHero
                label='From idea to production.'
                className='px-8 text-wrap text-2xl text-slate-600'
            />
            <SocialContactHero
                className='px-8 mt-6'
            />
            <CTAHero
                className='px-8 mt-6'
            />
        </div>
    )
}