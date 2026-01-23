type AvatarAboutMeProps = {
    imgPath: string,
    classNamePhoto?: string,
    classNameDiv?: string
}

const styleAvatarAboutMe = 'rounded-full'

export function AvatarAboutMe ( {imgPath, classNamePhoto, classNameDiv}:AvatarAboutMeProps ) {
    return (
        <div className={classNameDiv}>
            <img src={imgPath} alt="" className={`${styleAvatarAboutMe} ${classNamePhoto}`} />
        </div>
    )
}