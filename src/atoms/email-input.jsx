import React from 'react'
import * as Form from 'react-bootstrap/Form'

export function EmailInput(props) {
  return (
    <Form.Control placeholder={props.placeholder} size="lg" className="email-input"/>
  )
}
