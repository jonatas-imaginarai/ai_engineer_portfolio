type ImgAboutMeProps = {
    imgPath: string,
    className?: string
}

export function ImgAboutMe ( {imgPath, className}:ImgAboutMeProps ) {
    return (
        <>
            <img src={imgPath} alt="" className={className}/>
        </>
    )
}