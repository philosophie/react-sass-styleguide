import React from 'react'
import { EmailInput } from '../atoms/email-input'
import { Button } from '../atoms/button'
import { EmailSignup } from '../molecules/email-signup'
import * as Container from 'react-bootstrap/Container'
import * as Row from 'react-bootstrap/Row'
import * as Col from 'react-bootstrap/Col'
import './signup-section.scss'

export function SignupSection(props) {
  return (
    <div className="signup-container">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <h2>{props.headline}</h2>
            <p>{props.cta_copy}</p>
          </Col>

          <Col xs={12} md={6} lg={{ span: 5, offset: 1 }}>
            <EmailSignup placeholder={props.placeholder} title={props.title} />
          </Col>
        </Row>
      </Container>
    </div>
  )
}
