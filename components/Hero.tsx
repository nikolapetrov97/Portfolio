'use client'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'
import BackgroundCircles from './BackgroundCircles'

type Props = {
    pageInfo: PageInfo
}

function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            `Hi, My name is ${pageInfo?.name}`,
            "I love drinking coffee",
            "<ButILoveCodingMore />"
        ],
        loop: true,
        delaySpeed: 2000
    })
    return (
        <div className='h-screen flex flex-col space-y-8 items-center 
        justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <div className='xs:pt-16 sm:pt-0'>
                <img
                    className='relative rounded-full sm:h-32 sm:w-32 xs:h-24 xs:w-24 mx-auto object-cover'
                    src={urlFor(pageInfo?.heroImage).url()}
                    alt=""
                />
            </div>
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 sm:tracking-[15px] xs:tracking-[5px]'>Software Engineer</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3 xs:text-lg'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>
                <div className='pt-5'>
                    <button onClick={() => {
                        const id = `about`
                        const anchor = document.getElementById(id)
                        if (anchor) {
                            anchor.scrollIntoView({ behavior: "smooth" })
                        }
                    }} className='heroButton'>About</button>
                    <button onClick={() => {
                        const id = `experience`
                        const anchor = document.getElementById(id)
                        if (anchor) {
                            anchor.scrollIntoView({ behavior: "smooth" })
                        }
                    }} className='heroButton'>Experience</button>
                    <button onClick={() => {
                        const id = `skills`
                        const anchor = document.getElementById(id)
                        if (anchor) {
                            anchor.scrollIntoView({ behavior: "smooth" })
                        }
                    }} className='heroButton'>Skills</button>
                    <button onClick={() => {
                        const id = `projects`
                        const anchor = document.getElementById(id)
                        if (anchor) {
                            anchor.scrollIntoView({ behavior: "smooth" })
                        }
                    }} className='heroButton'>Projects</button>
                </div>
            </div>
        </div>
    )
}

export default Hero