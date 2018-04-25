'use strict';

const appRootPath = require('app-root-path');
const { spyOn } = require(`${appRootPath}/app/iSpy/index.js`);
const { assert } = require('chai');

describe('Basic Tests', () => {
  const adder = (n1, n2) => n1 + n2;
  it('Should be able to call spied function', () => {
    const adderSpy = spyOn(adder);

    assert.equal(adderSpy(2, 4), 6);
    assert.equal(adderSpy(3, 5), 8);
  });

  it('Should have a callCount method that returns the number of times spy has been called', () => {
    const adderSpy = spyOn(adder);

    assert.equal(adderSpy.callCount(), 0);
    adderSpy(2, 4);
    assert.equal(adderSpy.callCount(), 1);
    adderSpy(3, 5);
    assert.equal(adderSpy.callCount(), 2);
  });
  it('Should have a wasCalledWith method that returns true if spy was called with val', () => {
    const adderSpy = spyOn(adder);

    adderSpy(2, 4);
    adderSpy(3, 5);

    assert.isTrue(adderSpy.wasCalledWith(2));
    assert.isTrue(adderSpy.wasCalledWith(4));
    assert.isTrue(adderSpy.wasCalledWith(3));
    assert.isTrue(adderSpy.wasCalledWith(5));
    assert.isFalse(adderSpy.wasCalledWith(1));
    assert.isFalse(adderSpy.wasCalledWith(6));
    assert.isFalse(adderSpy.wasCalledWith(10));
  });
  it('Should have a returned method that returns true if spy has returned val', () => {
    const adderSpy = spyOn(adder);

    adderSpy(2, 4);
    adderSpy(3, 5);

    assert.isTrue(adderSpy.returned(6));
    assert.isTrue(adderSpy.returned(8));
    assert.isFalse(adderSpy.returned(5));
    assert.isFalse(adderSpy.returned(9));
  });
});
