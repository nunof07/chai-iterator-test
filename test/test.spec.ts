import chai = require("chai");
import { expect } from 'chai';
import chaiIterator = require("chai-iterator");

chai.use(chaiIterator);

expect([2, 3, 5]).to.iterate.for.lengthOf(3);
