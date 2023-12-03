// Mocking MongoDB: Will simulate different scenarios testing if API can handle them
const chai = require('chai');
const assert = chai.assert;

// Using Mocking Framework: Sinon to simulate dbo
const sinon = require('sinon');

describe('Mocking Unique DB Senarios & Reqs', () => {
    it('test-deleting-user-via-controller-from-mocked-db-without-user-should-give-error-404', () => {
        // Arrange: 
        let MockDB; //client id (email) is not present
        let expectedStatusCode = 404;

        // Act: Pass mocked dbo into controller obj. Then Delete User
        

        let actual;
        // Expect: There should be any response
        assert.equal(expectedStatusCode, actual, "Test Fail DB Logic: Can't handle deleting user that doesn't exist")
    });
});