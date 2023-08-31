import React from 'react'
import HoverBadge from './Hover'

describe('<HoverBadge />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<HoverBadge />)
  })
})