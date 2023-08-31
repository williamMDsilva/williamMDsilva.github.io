import React from 'react'
import IconBook from './Book'

describe('<IconBook />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<IconBook />)
  })
})