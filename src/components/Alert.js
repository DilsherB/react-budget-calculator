import React from 'react'

const Alert = ({type, text}) => {
  return (
    <div className={`bg-${type}`}>{text}</div>
  )
}

export default Alert

