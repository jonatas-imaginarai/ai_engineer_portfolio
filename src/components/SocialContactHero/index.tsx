import iconoLinkedin from '../../assets/icons/icons8-linkedin.svg'
import iconoEmail from '../../assets/icons/icons8-email-50.webp'
import iconoInstagram from '../../assets/icons/icons8-instagram-50.webp'
import iconoGitHub from '../../assets/icons/icons8-github-50.webp'
import iconoWhatsapp from '../../assets/icons/icons8-whatsapp-50.webp'

type SocialContactHeroProps = {
    className?: string
}

const SocialContactHeroStyle = 'flex gap-4'

export function SocialContactHero ( {className}:SocialContactHeroProps ) {
    return (
        <div className={`${SocialContactHeroStyle} ${className}`}>
            <a href="" className='h-8 w-8'>
                <img src={iconoLinkedin} alt="Icono Linkedin para Contacto" />
            </a>
            <a href="" className='h-8 w-8'>
                <img src={iconoEmail} alt="Icono Email para Contacto" />
            </a>
            <a href="" className='h-8 w-8'>
                <img src={iconoInstagram} alt="Icono Instagram para Contacto" />
            </a>
            <a href="" className='h-8 w-8'>
                <img src={iconoGitHub} alt="Icono para GitHub" />
            </a>
            <a href="" className='h-8 w-8'>
                <img src={iconoWhatsapp} alt="Icono Whatsapp para contacto" />
            </a>
        </div>
    )
}