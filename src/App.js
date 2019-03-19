import React, { Component } from 'react'
import { Button, AccentButton } from './atoms/button'

class App extends Component {
  render() {
    return (
      <>
        <Button title={'Button'} />
        <AccentButton title={'Accent Button'} />
      </>
    )
  }
}

export default App
