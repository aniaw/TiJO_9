var expect = require('chai').expect;
var app = require('../app/app');

describe('testing()', function ()
{
    it('its not prime', function ()
    {
        expect(app.isPrime(13)).to.be.true;
    });
    it('its prime', function ()
    {
        expect(app.isPrime(4)).to.be.false;
    });
});

describe('when paraments are negative numbers', function ()
{
    it('should return false', function ()
    {
        expect(app.areaOfTrapezoid(-5,2,3)).to.eql(false);
    });
});
describe('calcualte areaOfTrapezoid', function ()
{
    it('should calculate areaOfTrapezoid', function ()
    {
        expect(app.areaOfTrapezoid(2,3,2)).to.eql(5);
    });
});