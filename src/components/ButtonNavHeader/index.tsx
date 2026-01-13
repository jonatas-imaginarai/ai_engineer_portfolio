type ButtonNavHeaderProps = {
    label: string
    className?: string
}

const estiloButtonNavHeader = 'hover:bg-emerald-100 active:bg-gray-50 py-2 px-2 rounded-md cursor-pointer text-gray-700 duration-200 ease-in-out'

export function ButtonNavHeader ( {label, className}: ButtonNavHeaderProps ) {
    return (
        <>
            <button className={`${estiloButtonNavHeader} ${className}`}>{label}</button>
        </>
    )
}