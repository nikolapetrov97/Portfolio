'use client'
import { motion } from "framer-motion"

type Props = {}

function BackgroundCircles({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                scale: [1, 2, 2, 3, 1],
                opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
                borderRadius: ["20%", "20%", "50%", "80%", "20%"]
            }}
            transition={{ duration: 2.5 }}
            className="relative flex justify-center items-center"
        >
            <div className="relative flex justify-center items-center">
                <div className="absolute border border-[#333333] rounded-full sm:h-[200px] sm:w-[200px] xs:h-[150px] xs:w-[150px] sm:mt-52 xs:mt-72 animate-ping" />
                <div className="absolute border border-[#333333] rounded-full sm:h-[300px] sm:w-[300px] xs:h-[200px] xs:w-[200px] sm:mt-52 xs:mt-72" />
                <div className="absolute border border-[#333333] rounded-full sm:h-[500px] sm:w-[500px] xs:h-[300px] xs:w-[300px] sm:mt-52 xs:mt-72" />
                <div className="absolute rounded-full border border-[#F7AB0A] opacity-20 animate-pulse sm:h-[650px] sm:w-[650px] xs:h-[350px] xs:w-[350px] sm:mt-52 xs:mt-72" />
                <div className="absolute border border-[#333333] rounded-full sm:h-[800px] sm:w-[800px] xs:h-[400px] xs:w-[400px] sm:mt-52 xs:mt-72" />
            </div>
        </motion.div>
    )
}

export default BackgroundCircles