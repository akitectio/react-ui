import React from 'react'
import { BaseInput, BaseInputProps } from './BaseInput'
import '../../assets/scss/input/InputGroup.scss'
interface InputGroupProps extends BaseInputProps {
  icon: React.ReactNode
}

const InputGroup: React.FC<InputGroupProps> = ({ icon, ...props }) => {
  return (
    <div className='input-group'>
      <BaseInput {...props} />
      <div className='input-group-append'>
        <span className='input-group-text'>{icon}</span>
      </div>
    </div>
  )
}

export { InputGroup }
