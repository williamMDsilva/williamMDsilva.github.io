import React from 'react'
import IconGitHub from './GitHub'

describe('<IconGitHub />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<IconGitHub />)
  })
})