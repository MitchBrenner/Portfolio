import React from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    name: string
    email: string
    subject: string
    message: string
}

type Props = {}

export default function ContactMe({}: Props) {

    const {
        register,
        handleSubmit,
    } = useForm<Inputs>()

    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        const href = `mailto:mkbrenner8@gmail.com?subject=${formData.subject}&body=Hello, my name is ${formData.name}. ${formData.message} (${formData.email})`
        window.open(href, '_blank')
    }

    return (
        <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-6xl
        px-10 justify-evenly mx-auto items-center'>
            <h3 className='subTitle'>Contact Me</h3>
            <div>
                <h4 className='text-3xl font-semibold text-center mb-10'>
                    {/* I&apos;ve got just what you need. <span className='underline decoration-[#9370DB]'>Lets Talk.</span> */}
                </h4>

                <div className='space-y-10 mb-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon 
                            className='h-7 w-7 text-[#9370DB] animate-pulse'
                        />
                        <p className='text-lg'>715-210-5245</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon 
                            className='h-7 w-7 text-[#9370DB] animate-pulse'
                        />
                        <p className='text-lg'>mkbrenner3@wisc.edu</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon 
                            className='h-7 w-7 text-[#9370DB] animate-pulse'
                        />
                        {/* <p className='text-lg'>123 Developer's Lane</p> */}
                    </div>
                </div>

                <form 
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col space-y-2 w-fit mx-auto'>
                    <div className='flex space-x-2'>
                        <input {...register('name')} placeholder='Name' className='contactInput' type="text" />
                        <input {...register('email')} placeholder='Email' className='contactInput' type="email" />
                    </div>
                    <input {...register('subject')} placeholder='Subject' className='contactInput' type="text" />

                    <textarea {...register('message')} placeholder='Message' className='contactInput' />

                    <button type='submit' className='bg-[#9370DB] py-5 rounded-md text-black font-bold text-lg opacity-100 transition-opacity duration-500 hover:opacity-70'>Submit</button>
                </form>

            </div>
        </div>
    )
}