import * as chai from 'chai';
//import * as chaiIterator from 'chai-iterator';
import chaiIterator = require("chai-iterator");

var expect = chai.expect;

chai.use(chaiIterator);

describe('test', function () {
    it('should be length 3', function () {
        expect([2, 3, 5]).to.iterate.for.lengthOf(3);
    });
});
