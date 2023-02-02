import React, {useId} from 'react'

const Experience = ({experience}) => {
    const idNumber = useId()
  return (
    <div>
      {experience.map((exp =>{
        return (
            <div key={`${idNumber + exp.date}`}>
                    <span>{exp.name} - {exp.date} - {exp.where} - {exp.description}</span>
            </div>
        )
      }))}
    </div>
  )
}

export default Experience
