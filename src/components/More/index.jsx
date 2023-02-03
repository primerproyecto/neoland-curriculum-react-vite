import React, {useId} from 'react'

const More = ({languages, habilities, volunteer}) => {
const idText = useId()
  return (
    <div key={`${idText + Math.random() }`}>
     <p> { languages.language} - { languages.wrlevel } - {languages.splevel}</p>
     <p> { habilities.map((hab => {
        return (
            <span key={`${idText + Math.random() }`}>{hab} </span>
        )
     }))}</p>
     <div>{ volunteer.map((item => {
        return (
            <p key={`${idText + item.name}`}>{item.name}</p>
        )
     })) }</div>
    </div>
  )
}

export default More
