import React from 'react'
import { EmailSignup } from '../molecules/email-signup'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './signup-section.scss'

export function SignupSection(props) {
  return (
    <Container>
      <div className="signup-section">
        <Row>
          <Col xs={12} md={6} lg={6}>
            <h2>{props.headline}</h2>
            <p>{props.cta_copy}</p>
          </Col>

          <Col xs={12} md={6} lg={{ span: 5, offset: 1 }}>
            <EmailSignup placeholder={props.placeholder} title={props.title} />
          </Col>
        </Row>
      </div>
    </Container>
  )
}
