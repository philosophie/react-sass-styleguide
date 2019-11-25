import React from 'react'
import Form from 'react-bootstrap/Form'

export function EmailInput(props) {
  return (
    <Form.Control
      placeholder={props.placeholder}
      size="lg"
      className={
        props.className ? props.className + ' email-input' : 'email-input'
      }
    />
  )
}
