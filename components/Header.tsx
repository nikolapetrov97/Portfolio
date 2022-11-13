'use client'

import React from 'react'
import { SocialIcon } from "react-social-icons"
import { motion } from "framer-motion"
import { Social } from '../typings'

type Props = {
    socials: Social[]
}

function Header({ socials }: Props) {
    return (
        <header className='sticky bg-[rgb(36,36,36)] top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20
        xl:items-center'>
            <motion.div
                initial={{ x: -500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="flex flex-row items-center"
            >
                {
                    socials?.map((social) => {
                        return (
                            <div className='xs:w-[60px] xs:h-[60px] sm:w-[50px] sm:h-[50px]' key={social?._id}>
                                <SocialIcon url={social?.url} fgColor='gray' bgColor='transparent' style={{ width: '100%', height: '100%' }} />
                            </div>
                        )
                    })
                }
            </motion.div>
            <motion.div
                onClick={() => {
                    const id = `contact`
                    const anchor = document.getElementById(id)
                    if (anchor) {
                        anchor.scrollIntoView({ behavior: "smooth" })
                    }
                }}
                initial={{ x: 500, opacity: 0, scale: 0.5 }}
                animate={{ x: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className='flex flex-row items-center text-gray-300 cursor-pointer'
            >
                <div className='xs:w-[60px] xs:h-[60px] sm:w-[50px] sm:h-[50px]'>
                    <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent' style={{ width: '100%', height: '100%' }} />
                </div>
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in touch</p>
            </motion.div>
        </header>
    )
}

export default Header