import { Backend_skill, Frontend_skill, Full_stack, Other_skill } from '@/constants'
import { transform } from 'next/dist/build/swc/generated-native'
import React from 'react'
import SkillDataProvider from '../sub/SkillDataProvider'

const Skills = () => {
  return (
    <section 
    id='skills'
    style={{transform : "scale(0.9)"}}
    className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20'>
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider 
          key={index}
           src={image.Image}
           width={image.width}
           height={image.height}
           index={index}
           />
        ))}
      </div>
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Backend_skill.map((image, index) => (
          <SkillDataProvider 
          key={index}
           src={image.Image}
           width={image.width}
           height={image.height}
           index={index}
           />
        ))}
      </div>
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Full_stack.map((image, index) => (
          <SkillDataProvider 
          key={index}
           src={image.Image}
           width={image.width}
           height={image.height}
           index={index}
           />
        ))}
      </div>
      <div className='flex flex-row justify-around flex-wrap mt-4 gap-5 items-center'>
        {Other_skill.map((image, index) => (
          <SkillDataProvider 
          key={index}
           src={image.Image}
           width={image.width}
           height={image.height}
           index={index}
           />
        ))}
      </div>
    </section>
  )
}

export default Skills