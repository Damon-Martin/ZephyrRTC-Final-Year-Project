import LoginPage from "@/app/page";

// Used for mocking State
describe('LoginPage Component Tests: Checking component changes', () => {
  it('test-page-should-be-visable', () => {
    let page = cy.mount(<LoginPage />);

    page.get('input').should('be.visible');
  })
})