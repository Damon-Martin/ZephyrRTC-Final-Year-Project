// E2E testing tests the entire product running
// It's a similar to user testing and is automatic but users will always have extra feedback
describe('template spec', () => {

  it('test-website-loads', () => {
    cy.visit('https://localhost/');
  });

  // Will login and expect the friend page to open
  it('test-login-to-friend-list', () => {
    cy.visit('https://localhost/');
    assert.fail('Test Not Made Yet');
  });
});