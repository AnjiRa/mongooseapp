const utils = require('./cal')
const assert = require('chai').assert

describe('cal test suite', () => {
    it('add should return 10 if a = 6, b=4', () => {
        assert.equal(10, utils.add(6, 4))
    })

    it('mul should return 30 if a = 5, b=6', () => {
        assert.equal(30, utils.mul(5, 6))
    })
})