import React from 'react'
import Arrow from '../public/arrow.svg'

interface Props {
    name?: string | undefined;
    description?: string | undefined;
    imageUrl?: string | undefined;
    bgColor?: string | undefined;
    dark?: boolean | undefined;
    websiteUrl?: string | undefined;
}

const ProjectPreview: React.FC<Props> = ({
    name = "Block name",
    description = "This is an amazing block",
    imageUrl = "/project-1.png",
    bgColor = "#e4e4e7",
    dark = false,
    websiteUrl = "https://www.youtube.com/"
}) => {
  return (
    <div className={`h-[30rem] rounded-3xl overflow-hidden ${dark ? "dark" : ""}`}
    style={{background: `${bgColor}`}}
    >
      <div className='h-full w-full px-10 py-6 duration-[500ms] transition-all ease-in-out hover:scale-105
      bg-cover bg-no-repeat bg-center'
      style={{backgroundImage: `url('${imageUrl}')`}}
      >
        <div className='flex justify-between'>
        <div>
            <h2 className='font-medium text-lg dark:text-white'>{name}</h2>
            <p className='text-sm text-zinc-500 dark:text-zinc-300'>{description}</p>
        </div>
        <div className='h-12 w-12 rounded-full bg-white flex items-center justify-center cursor-pointer'>
            <a href={websiteUrl} target='_blank'>
            <Arrow className="w-6 h-6" />
            </a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectPreview
