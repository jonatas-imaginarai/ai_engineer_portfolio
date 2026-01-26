

const estiloAboutMeSection = 'flex text-sm w-1/2 items-center gap-2'
const estiloTitleAboutMe = 'text-md font-bold text-zinc-600 text-center bg-slate-100 py-1 px-4 border rounded-md'
const estiloSubTitleAboutMe = 'mt-2 text-2xl font-bold text-gray-500 w-full text-center'

export function AboutMe() {
    return (
        <div className={`${estiloAboutMeSection}`}>
            <div className="w-full border p-8 rounded-md flex flex-col text-center items-center shadow-sm bg-zinc-50">
                <h2 className={estiloTitleAboutMe}>About Me</h2>
                <h3 className={estiloSubTitleAboutMe}><span className="text-blue-400">hands-on builder</span>, always learning<br />and improving  through <span className="text-amber-500">real-world projects</span></h3>
                <p className="mt-6 text-md">I’m an AI & Automation Engineer focused on building production-ready systems that solve real problems. <br /><br />

                    I design and develop AI solutions that go beyond demos and prototypes, aiming for real-world usage and integration with products, workflows, and business processes. <br /><br />

                    My current focus is on LLMs, intelligent agents, workflow automation, and system architecture, always guided by strong engineering principles: reliability, scalability, and maintainability matter as much as intelligence. <br /><br />

                    I’m continuously learning, building, and refining my approach, with a clear goal: to create AI solutions that are useful, reliable, and ready for the real world.
                </p>
            </div>
        </div>
    )
}