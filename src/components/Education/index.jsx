import React, {useId} from 'react'

const Education = ({education}) => {

    const idTest = useId()
    console.log(idTest)
  return (
    <div>
    <ul>
      {education.map((item => {
        return (
            <li key={`${idTest + item.date}`}>{item.name} - {item.date} - {item.where}</li>
        )
      }))}
      </ul>
    </div>
  )
}

export default Education
