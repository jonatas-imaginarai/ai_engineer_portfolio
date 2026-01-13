import { NavBarHeader } from '../NavBarHeader'
import { CTAHeader } from '../CTAHeader'
import { LogoHeader } from '../LogoHeader'

export function Header () {
    return (
        
        <header className='flex items-center justify-between relative p-4 mx-4 text-sm'>
            <LogoHeader />
            <NavBarHeader />
            <CTAHeader />
        </header>
        
    )
}