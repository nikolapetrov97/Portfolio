'use client'
import { motion } from "framer-motion"
import { urlFor } from "../sanity"
import { PageInfo } from "../typings"

type Props = {
    pageInfo: PageInfo
}

function About({ pageInfo }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col relative text-center md:text-left md:flex-row h-screen
         max-w-7xl px-10 justify-evenly mx-auto items-center"
        >
            <h3 className="absolute top-24 uppercase xs:tracking-[10px] sm:tracking-[20px] text-gray-500 text-2xl">
                About
            </h3>
            <motion.img
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                className='-mb-28 md:mb-0 flex-shrink-1 w-56 h-56 rounded-full object-cover
                md:rounded-full md:w-64 md:h-96 xl:w-[350px] xl:h-[350px]'
                src={urlFor(pageInfo?.profilePic).url()}
                alt=""
            />
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="sm:text-4xl xs:text-xl font-semibold">Here is a{" "}
                    <span className="underline decoration-[#F7AB0A]/50">little</span>{" "}
                    background
                </h4>
                <p className="text-base">
                    {pageInfo?.backgroundInformation}
                </p>
            </div>
        </motion.div>
    )
}

export default About