var chai = require('chai');
var assert = chai.assert;

describe('foo', function() {
  it('should bar', function() {
    var alternativeFacts = false;
    assert.isFalse(alternativeFacts);
  });
  it('should be true', function() {
    let wow = 'wow';
    assert.isEqual(wow, 'wow');
  });
});
