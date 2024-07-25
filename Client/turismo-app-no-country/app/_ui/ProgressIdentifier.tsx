import React from 'react'
import { useFormState } from './FormContext'

const ProgressIdentifier = () => {
    const { step } = useFormState();
  return (
    <span className="absolute bottom-5 right-5 text-base">{step + 2}/4</span>
  )
}

export default ProgressIdentifier
