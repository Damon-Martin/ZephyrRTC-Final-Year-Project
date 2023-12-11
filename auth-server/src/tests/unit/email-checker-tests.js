const chai = require('chai');
const assert = chai.assert;

const { AuthLogic } = require('../../app/business-logic/auth-logic');
const email_test_cases = require('../fixtures/email-test-cases.json')

describe('Email Checker Unit Tests', () => {
    
    let i = 0;
    email_test_cases.forEach(({email, isValid}) => {
        it(`test-email-case-${i}`, () => {
            // Arrange
            let expect = isValid
            let authLogic = new AuthLogic();
            
            // Act
            let actual = authLogic.isValidEmail(email)


            let test_msg = `Test Case ${i} failed`
            i++;
            assert.equal(true, isValid, test_msg)
        })
    })
});