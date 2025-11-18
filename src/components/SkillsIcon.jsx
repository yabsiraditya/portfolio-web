import { getProfile } from "../assets/api/data";
import { icons } from "../assets/api/icons";

const SkillsIcon = () => {
    return (
        <div className="flex flex-wrap justify-center gap-4 lg:max-w-[500px] mx-auto">
            {getProfile.skills.map((skill, index) => {
                const Icon = icons[skill.icon]
                return (
                    <div
                        key={index}
                        title={skill.name}
                        className="text-6xl lg:text-7xl transition duration-200 hover:-translate-y-1.5"
                    >
                        <Icon />
                    </div>
                );
            })}
        </div>
    )
}

export default SkillsIcon