'use client'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useMediaQuery } from '@mui/material'
import { useForm, SubmitHandler } from 'react-hook-form'
type Props = {}

type Inputs = {
    name: string;
    email: string;
    subject: string;
    message: string;
}

function ContactMe({ }: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const phone = useMediaQuery("(max-width: 600px)")
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:nikolagpetrov97@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. 
        ${formData.message} (${formData.email})`
    };
    return (
        <div className="h-screen relative flex overflow-hidden flex-col text-left md:text-left md:flex-row
        max-w-full justify-evenly mx-auto items-center z-0">
            <h3 className="absolute top-24 uppercase xs:tracking-[10px] sm:tracking-[20px] text-gray-500 text-2xl">
                About
            </h3>

            <div className="xs:max-w-xs sm:max-w-none">
                <h4 className="sm:text-4xl xs:text-xl font-semibold text-center">
                    I have got just what you need.{" "}
                    <span className="underline decoration-[#F7AB0A]/50">
                        Lets Talk.
                    </span>{" "}
                </h4>
                <div className='sm:space-y-6 xs:space-y-2 xs:mt-2 sm:mt-6'>
                    <div className="flex items-center space-x-5 justify-center">
                        <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="sm:text-2xl xs:text-lg">0897538899</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="sm:text-2xl xs:text-lg">nikolagpetrov@gmail.com</p>
                    </div>
                    <div className="flex items-center space-x-5 justify-center">
                        <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                        <p className="sm:text-2xl xs:text-lg">Stara Zagora</p>
                    </div>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto xs:mt-4 sm:mt-6'>

                    <div className={`${phone ? 'flex flex-col space-y-2' : 'flex space-x-2'}`}>
                        <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>

                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />

                    <textarea {...register('message')} placeholder='Message' className='contactInput' />
                    <button type="submit" className='bg-[#F7AB0A] sm:py-5 xs:py-3 px-10 rounded-md text-black font-bold'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactMe