import React from 'react'
import { Button, AccentButton } from '../atoms/button'
import { EmailInput } from '../atoms/email-input'
import { EmailSignup } from '../molecules/email-signup'
import { SignupSection } from '../organisms/signup-section'
import * as Container from 'react-bootstrap/Container'
import * as Row from 'react-bootstrap/Row'
import * as Col from 'react-bootstrap/Col'
import './styleguide.scss'

export function Styleguide(props) {
  return (
    <>
      <div className="styleguide-sections">
        <Container>
          <h1>Page</h1>
          <p>This "Page" illustrates how elements breakdown in the Atomic system.</p>
        </Container>
      </div>

      {/* Using atoms */}
      <div className="styleguide-sections">
        <Container>
          <h3>Atoms</h3>

          <Row>
            <Col>
              <h5>Input Field</h5>
              <EmailInput placeholder={'atom@gmail.com'}/>
            </Col>

            <Col>
              <h5>Button</h5>
              <Button title={'Atom'} />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Using a molecule */}
      <div className="styleguide-sections">
        <Container>
          <h3>Molecules</h3>

          <Row>
            <Col>
              <h5>Email sign up</h5>
              <EmailSignup placeholder={'molecule@gmail.com'} title={'Molecule'} />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Using an organism */}
      <div className="styleguide-sections">
        <Container>
          <h3>Organisms</h3>
          <h5>Signup Section</h5>
        </Container>

        <SignupSection
          placeholder="organism@gmail.com"
          title="Organism"
          headline="Don't miss out on this Product!"
          cta_copy="This thing is so great and you really need it. Provide your email and we will let you know as soon at it's available."
        />
      </div>
    </>
  )
}
