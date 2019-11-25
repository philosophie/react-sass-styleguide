import React from 'react'
import { Button, AccentButton } from '../atoms/button'
import { EmailInput } from '../atoms/email-input'
import { EmailSignup } from '../molecules/email-signup'
import { SignupSection } from '../organisms/signup-section'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './atomic-page.scss'

export function AtomicPage(props) {
  return (
    <main className="atomic-page">
      <div className="atomic-page__section">
        <Container>
          <h2>Page</h2>
          <p className="atomic-page__paragraph--max-width">
            This "Page" illustrates how elements breakdown in the Atomic system.
            Atoms make up molecules, molecules make up organisms, and organisms
            are used on pages and templates.{' '}
            <a href="http://bradfrost.com/blog/post/atomic-web-design/">
              Click here
            </a>{' '}
            to learn more about Atomic design.
          </p>
        </Container>
      </div>

      {/* Using atoms */}
      <div className="atomic-page__section atomic-page__section--atoms">
        <Container>
          <h2>Atoms</h2>

          <Row>
            <Col>
              <h5>Input Field</h5>
              <EmailInput placeholder={'atom@gmail.com'} />
            </Col>

            <Col xs={12} md={6}>
              <h5>Button</h5>
              <Button title={'Atom'} />
              <AccentButton title={'Atom Accent'} />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Using a molecule */}
      <div className="atomic-page__section">
        <Container>
          <h2>Molecules</h2>

          <Row>
            <Col>
              <h5>Email signup</h5>
              <EmailSignup
                placeholder={'molecule@gmail.com'}
                title={'Molecule'}
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* Using an organism */}
      <div className="atomic-page__section">
        <Container>
          <h2>Organisms</h2>
          <h5>Signup Section</h5>
        </Container>

        <SignupSection
          placeholder="organism@gmail.com"
          title="Organism"
          headline="Don't miss out on this Product!"
          cta_copy="This thing is so great and you really need it. Provide your email and we will let you know as soon at it's available."
        />
      </div>
    </main>
  )
}
