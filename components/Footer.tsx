'use client'
import React from 'react'

type Props = {}

function Footer({ }: Props) {
    return (
        <footer className="sticky bottom-5 w-full cursor-pointer" >
            <div className="flex items-center justify-center">
                <img
                    onClick={() => {
                        const id = `hero`
                        const anchor = document.getElementById(id)
                        if (anchor) {
                            anchor.scrollIntoView({ behavior: "smooth" })
                        }
                    }}
                    className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFvDjsJWZr9roD_KdGd7b_t5h6VGpcf4HVrw&usqp=CAU"
                    alt=""
                />
            </div>
        </footer >
    )
}

export default Footer