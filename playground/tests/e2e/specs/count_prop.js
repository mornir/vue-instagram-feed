import App from '../../../src/App.vue'

const mountVue = require('cypress-vue-unit-test')

const data = () => ({ count: 2 })

describe('Vue Instagram', () => {
  beforeEach(mountVue(App, { data }))

  mountVue(App, { data })
  it('renders two posts', () => {
    cy.get('#instagram-grid')
      .find('article')
      .should('have.length', 2)
  })
})
