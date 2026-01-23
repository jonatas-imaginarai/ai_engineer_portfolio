import { NavBarHeader } from '../NavBarHeader'
import { CTAHeader } from '../CTAHeader'
import { LogoHeader } from '../LogoHeader'

export function Header () {
    return (

        <div className=''>
            <header className='flex items-center justify-between relative p-8 text-sm h-20 shadow-sm'>
                <LogoHeader />
                <NavBarHeader />
                <CTAHeader />
            </header>
        </div>
        
    )
}