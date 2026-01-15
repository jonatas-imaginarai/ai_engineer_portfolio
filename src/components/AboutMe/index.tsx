

const estiloAboutMeSection = 'px-8 text sm'
const estiloTitleAboutMe = 'text-md font-bold text-zinc-600'
const estiloSubTitleAboutMe = 'mt-2 text-2xl font-bold text-gray-500'

export function AboutMe() {
    return (
        <div className={estiloAboutMeSection}>
            <h2 className={estiloTitleAboutMe}>About Me</h2>
            <p className={estiloSubTitleAboutMe}>Curious mind, <span className="text-blue-400">hands-on builder</span>, always learning<br />and improving  through <span className="text-amber-500">real-world projects</span></p>

        </div>
    )
}