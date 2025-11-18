import { getProfile } from "../assets/api/data"
import { icons } from "../assets/api/icons"

const SosmedIcon = () => {
    return (
        <ul className="flex flex-row gap-2 mt-3">
            {getProfile.socialMedia.map((socialmedia, index) => {
                const Icon = icons[socialmedia.icon]
                return (
                    <li key={index} className="transition duration-200 hover:-translate-y-1.5">
                        <a className="text-4xl" target="_blank" href={socialmedia.url}>
                            <Icon />
                        </a>
                    </li>
                )
            })}
        </ul>
    )
}

export default SosmedIcon