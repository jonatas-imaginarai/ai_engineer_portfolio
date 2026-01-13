import { ButtonNavHeader } from '../ButtonNavHeader'

export function NavBarHeader () {
    return (
        <div className='flex items-center justify-center gap-4 absolute left-1/2 -translate-x-1/2'>
            <ButtonNavHeader label='Home'/>
            <ButtonNavHeader label='About'/>
            <ButtonNavHeader label='Portfolio'/>
            <ButtonNavHeader label='Blog'/>
            <ButtonNavHeader label='Contacto'/>
        </div>
    )
}