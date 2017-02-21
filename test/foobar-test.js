var chai = require('chai');
var assert = chai.assert;

describe('foo', function() {
  it('should bar', function() {
    var alternativeFacts = false;
    assert.isFalse(alternativeFacts);
  });
  it('BAD UNIT TEST - should have node_env', function() {
    // BAD
    assert.equal(process.env.NODE_ENV, 'TESTING123');
  })
});
