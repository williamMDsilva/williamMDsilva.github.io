import React from 'react'
import IconLinkedIn from './LinkedIn'

describe('<IconLinkedIn />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<IconLinkedIn />)
  })
})