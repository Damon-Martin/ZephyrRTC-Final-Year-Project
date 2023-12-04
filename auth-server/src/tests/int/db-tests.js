const chai = require('chai');
const assert = chai.assert;

// These tests are interested in that can the controllers interact with the db
describe("IntTest: DB Tests (Regarding Controller Logic)", () => {
    it('test-if-reg-success-check-db-that-user-does-not-exist', () => {
        assert.fail('Test Not Written Yet');
    });

    it('test-if-user-deletes-acc-user-does-not-exist', () => {
        assert.fail('Test Not Written Yet');
    });

    it('test-if-registered-db-entity-has-correct-or-close-acc-creation-date', () => {
        assert.fail('Test Not Written Yet');
    });

    // Other Tests Related to auth will be in front-end checking they get the token

    // Other Tests Related to validating a token received by the client in the backend will be in the backend
});
