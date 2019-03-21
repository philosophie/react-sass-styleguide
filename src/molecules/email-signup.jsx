import React from 'react'
import { EmailInput } from '../atoms/email-input'
import { Button } from '../atoms/button'
import './email-signup.scss'

export function EmailSignup(props) {
  return (
    <div className="email-signup">
      <EmailInput placeholder={props.placeholder}/>
      <Button title={props.title}/>
    </div>
  )
}
