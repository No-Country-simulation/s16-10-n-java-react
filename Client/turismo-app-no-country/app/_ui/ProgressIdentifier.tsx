import React from 'react'
import { useFormState } from '../home/onboarding/FormOnboardingContext'

const ProgressIdentifier = () => {
    const { step } = useFormState();
  return (
    <span className="absolute bottom-6 right-5 text-base text-secondary font-medium">{step + 2}/4</span>
  )
}

export default ProgressIdentifier
