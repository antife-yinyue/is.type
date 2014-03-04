var is = require('../')
require('should')

describe('test()', function() {
  it('is.Array()', function() {
    is.Array([]).should.be.true
    is.Array('').should.be.false
  })

  it('is.Object()', function() {
    is.Object({}).should.be.true
    is.Object([]).should.be.false
    is.Object('').should.be.false
    is.Object(null).should.be.false
    is.Object(0).should.be.false
    is.Object(true).should.be.false
  })

  it('is.String()', function() {
    is.String('').should.be.true
    is.String(new String()).should.be.true
    is.String({}).should.be.false
    is.String([]).should.be.false
    is.String(null).should.be.false
    is.String(0).should.be.false
    is.String(true).should.be.false
  })

  it('is.Number()', function() {
    is.Number(0).should.be.true
    is.Number(-0.1).should.be.true
    is.Number(10e6).should.be.true
    is.Number(Infinity).should.be.true
    is.Number({}).should.be.false
    is.Number([]).should.be.false
    is.Number(null).should.be.false
    is.Number('').should.be.false
    is.Number(true).should.be.false
  })

  it('is.Function()', function() {
    is.Function(function(){}).should.be.true
    is.Function(new Function()).should.be.true
    is.Function({}).should.be.false
    is.Function([]).should.be.false
    is.Function(null).should.be.false
    is.Function('').should.be.false
    is.Function(0).should.be.false
    is.Function(true).should.be.false
  })

  it('is.Date()', function() {
    is.Date(new Date()).should.be.true
    is.Date({}).should.be.false
    is.Date([]).should.be.false
    is.Date(null).should.be.false
    is.Date('').should.be.false
    is.Date(0).should.be.false
    is.Date(true).should.be.false
  })

  it('is.RegExp()', function() {
    is.RegExp(/.*/).should.be.true
    is.RegExp({}).should.be.false
    is.RegExp([]).should.be.false
    is.RegExp(null).should.be.false
    is.RegExp('').should.be.false
    is.RegExp(0).should.be.false
    is.RegExp(true).should.be.false
  })

  it('is.Empty()', function() {
    is.Empty('').should.be.true
    is.Empty('   ').should.be.true
    is.Empty([]).should.be.true
    is.Empty({}).should.be.true
    is.Empty({test:true}).should.be.false
    is.Empty(['']).should.be.false
    is.Empty(null).should.be.false
    is.Empty(undefined).should.be.false
    is.Empty(0).should.be.false
    is.Empty(true).should.be.false
  })

  it('is.Blank()', function() {
    is.Blank('').should.be.true
    is.Blank('   ').should.be.true
    is.Blank([]).should.be.true
    is.Blank({}).should.be.true
    is.Blank(null).should.be.true
    is.Blank(undefined).should.be.true
    is.Blank(NaN).should.be.true
    is.Blank(0).should.be.true
    is.Blank(1).should.be.false
    is.Blank(false).should.be.true
    is.Blank(true).should.be.false
  })
})
