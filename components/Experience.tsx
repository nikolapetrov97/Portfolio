'use client'
import { motion } from "framer-motion"
import { Experience } from "../typings"
import ExperienceCard from "./ExperienceCard"

type Props = {
    experiences: Experience[]
}

function Experience({ experiences }: Props) {
    return (
        <motion.div className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row
         max-w-full px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase xs:tracking-[10px] sm:tracking-[20px] text-gray-500 text-2xl z-40">
                Experience
            </h3>
            <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory xs:mt-12 sm:mt-0
             scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
                {
                    experiences?.map((experience) => (
                        <ExperienceCard key={experience?._id} experience={experience} />
                    ))
                }
            </div>
        </motion.div>
    )
}

export default Experience