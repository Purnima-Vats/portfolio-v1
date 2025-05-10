import React from 'react'
import { twMerge } from 'tailwind-merge'

const CardHeader = ({title, description, className}:{
    title: string,
    description: string,
    className?: string
}) => {
    return (
        <div className={twMerge('mb-2', className)}>
            <h3 className='text-3xl font-bold'>{title}</h3>
            <p className='text-sm text-white/60 mt-0.5'>{description}</p>
        </div>
    )
}

export default CardHeader