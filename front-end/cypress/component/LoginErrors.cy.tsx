import LoginPage from "@/app/page";

// Used for mocking State
describe('LoginPage Component Tests: Checking component changes', () => {

  it('test-page-should-be-visable', () => {
    let page = cy.mount(<LoginPage />);

    page.get('input').should('be.visible');
  })

  it('test-page-font-size-be-equal-2em', () => {
    let page = cy.mount(<LoginPage />);

    // 2em == 32px
    page.get('h1').should('have.css', 'font-size', '2em');
  });
})