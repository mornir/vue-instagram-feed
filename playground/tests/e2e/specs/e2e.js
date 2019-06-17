// https://docs.cypress.io/api/introduction/api.html

describe('VueInstagram Component', () => {
  beforeEach(() => {
    // reset and seed the database prior to every test
    cy.visit('/')
  })

  it('Warns if the browser does not support the Fetch API', () => {
    cy.visit('/', {
      onBeforeLoad(win) {
        delete win.fetch
      },
    })

    cy.contains(
      'This browser does not support the Fetch API natively. A polyfill is needed.'
    )

    /*  const getComponent = () => cy.window().its('app.$children')

    getComponent().then(component => {
      component[0].count = 5
      console.log(component[0].count)
    }) */
  })

  it.only('Load more posts and hides button', () => {
    cy.get('button')
      .click()
      .should('not.exist')

    cy.get('#instagram-grid')
      .find('article')
      .should('have.length', 2)
  })
})
