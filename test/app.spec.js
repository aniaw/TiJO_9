'use strict';

var expect = require('chai').expect;
var app = require('../app/app');
describe('isprime', function ()
{
    describe('prime number', function ()
    {
        it('prime number is prime', function ()
        {
            expect(app.isPrime(2)).to.eql( true);
            expect(app.isPrime(97)).to.eql( true);
        });
        it('prime number is fail because. one parameters is character', function ()
        {
            expect(app.isPrime('o')).to.eql( false);
            expect(app.isPrime('aff')).to.eql(false);
            expect(app.isPrime('fsdg')).to.eql(false);
        });
        it('prime number is not prime ', function ()
        {
            expect(app.isPrime(4)).to.eql( false);
            expect(app.isPrime(-7)).to.eql(false);
            expect(app.isPrime(0)).to.eql(false);
            expect(app.isPrime(1)).to.eql(false);
        });
    });

});


describe('areatrapezium', function ()
{
    describe('number positive area trapezium', function ()
    {
        it('should return area trapezium good', function ()
        {
            expect(app.areaOfTrapezoid(5, 3, 6)).to.eql( 24);
        });
    });
    it('return false when "a" is a negative number', function ()
    {
        expect(app.areaOfTrapezoid(-1, 2, 3)).to.equal(false);
    });
    it('return false when "b" is a negative number', function ()
    {
        expect(app.areaOfTrapezoid(1, -2, 3)).to.equal(false);
    });
    it('false when "h" is a negative number', function ()
    {
        expect(app.areaOfTrapezoid(1, 2, -3)).to.equal(false);
    });


});
