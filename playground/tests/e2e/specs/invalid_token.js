import App from '../../../src/App.vue'

const mountVue = require('cypress-vue-unit-test')

const data = () => ({ token: '444333' })

describe('Vue Instagram', () => {
  beforeEach(mountVue(App, { data }))

  mountVue(App, { data })
  it('displays error message', () => {
    cy.contains(
      'Error 400 (OAuthAccessTokenException) : The access_token provided is invalid.'
    )
  })
})
