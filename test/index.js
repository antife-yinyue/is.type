var is = require('../')
require('should')

describe('test', function() {
  it('is.array()', function() {
    is.array([]).should.be.true
    is.array({}).should.be.false
    is.array('').should.be.false
    is.array(0).should.be.false
    is.array(function(){}).should.be.false
    is.array(/\d+/).should.be.false
    is.array(true).should.be.false
    is.array(false).should.be.false
    is.array(null).should.be.false
    is.array(undefined).should.be.false
    is.array(new Array()).should.be.true
    is.array(new Object()).should.be.false
    is.array(new String()).should.be.false
    is.array(new Number()).should.be.false
    is.array(new Boolean()).should.be.false
    is.array(new Function()).should.be.false
    is.array(new Date()).should.be.false
    is.array(new RegExp()).should.be.false
    is.array(new Error()).should.be.false
    is.array(Object.create([])).should.be.false
  })

  it('is.object()', function() {
    is.object([]).should.be.false
    is.object({}).should.be.true
    is.object('').should.be.false
    is.object(0).should.be.false
    is.object(function(){}).should.be.false
    is.object(/\d+/).should.be.false
    is.object(true).should.be.false
    is.object(false).should.be.false
    is.object(null).should.be.false
    is.object(undefined).should.be.false
    is.object(new Array()).should.be.false
    is.object(new Object()).should.be.true
    is.object(new String()).should.be.false
    is.object(new Number()).should.be.false
    is.object(new Boolean()).should.be.false
    is.object(new Function()).should.be.false
    is.object(new Date()).should.be.false
    is.object(new RegExp()).should.be.false
    is.object(new Error()).should.be.false
  })

  it('is.string()', function() {
    is.string([]).should.be.false
    is.string({}).should.be.false
    is.string('').should.be.true
    is.string(0).should.be.false
    is.string(function(){}).should.be.false
    is.string(/\d+/).should.be.false
    is.string(true).should.be.false
    is.string(false).should.be.false
    is.string(null).should.be.false
    is.string(undefined).should.be.false
    is.string(new Array()).should.be.false
    is.string(new Object()).should.be.false
    is.string(new String()).should.be.true
    is.string(new Number()).should.be.false
    is.string(new Boolean()).should.be.false
    is.string(new Function()).should.be.false
    is.string(new Date()).should.be.false
    is.string(new RegExp()).should.be.false
    is.string(new Error()).should.be.false
  })

  it('is.number()', function() {
    is.number([]).should.be.false
    is.number({}).should.be.false
    is.number('').should.be.false
    is.number(0).should.be.true
    is.number(-0.1).should.be.true
    is.number(10e6).should.be.true
    is.number(Infinity).should.be.true
    is.number(function(){}).should.be.false
    is.number(/\d+/).should.be.false
    is.number(true).should.be.false
    is.number(false).should.be.false
    is.number(null).should.be.false
    is.number(undefined).should.be.false
    is.number(new Array()).should.be.false
    is.number(new Object()).should.be.false
    is.number(new String()).should.be.false
    is.number(new Number()).should.be.true
    is.number(new Boolean()).should.be.false
    is.number(new Function()).should.be.false
    is.number(new Date()).should.be.false
    is.number(new RegExp()).should.be.false
    is.number(new Error()).should.be.false
  })

  it('is.function()', function() {
    is.function([]).should.be.false
    is.function({}).should.be.false
    is.function('').should.be.false
    is.function(0).should.be.false
    is.function(function(){}).should.be.true
    is.function(/\d+/).should.be.false
    is.function(true).should.be.false
    is.function(false).should.be.false
    is.function(null).should.be.false
    is.function(undefined).should.be.false
    is.function(new Array()).should.be.false
    is.function(new Object()).should.be.false
    is.function(new String()).should.be.false
    is.function(new Number()).should.be.false
    is.function(new Boolean()).should.be.false
    is.function(new Function()).should.be.true
    is.function(new Date()).should.be.false
    is.function(new RegExp()).should.be.false
    is.function(new Error()).should.be.false
  })

  it('is.date()', function() {
    is.date([]).should.be.false
    is.date({}).should.be.false
    is.date('').should.be.false
    is.date(0).should.be.false
    is.date(function(){}).should.be.false
    is.date(/\d+/).should.be.false
    is.date(true).should.be.false
    is.date(false).should.be.false
    is.date(null).should.be.false
    is.date(undefined).should.be.false
    is.date(new Array()).should.be.false
    is.date(new Object()).should.be.false
    is.date(new String()).should.be.false
    is.date(new Number()).should.be.false
    is.date(new Boolean()).should.be.false
    is.date(new Function()).should.be.false
    is.date(new Date()).should.be.true
    is.date(new RegExp()).should.be.false
    is.date(new Error()).should.be.false
  })

  it('is.regexp()', function() {
    is.regexp([]).should.be.false
    is.regexp({}).should.be.false
    is.regexp('').should.be.false
    is.regexp(0).should.be.false
    is.regexp(function(){}).should.be.false
    is.regexp(/\d+/).should.be.true
    is.regexp(true).should.be.false
    is.regexp(false).should.be.false
    is.regexp(null).should.be.false
    is.regexp(undefined).should.be.false
    is.regexp(new Array()).should.be.false
    is.regexp(new Object()).should.be.false
    is.regexp(new String()).should.be.false
    is.regexp(new Number()).should.be.false
    is.regexp(new Boolean()).should.be.false
    is.regexp(new Function()).should.be.false
    is.regexp(new Date()).should.be.false
    is.regexp(new RegExp()).should.be.true
    is.regexp(new Error()).should.be.false
  })

  it('is.empty()', function() {
    is.empty('').should.be.true
    is.empty('  ').should.be.true
    is.empty([]).should.be.true
    is.empty({}).should.be.true
    is.empty(['']).should.be.false
    is.empty(null).should.be.false
    is.empty(undefined).should.be.false
    is.empty(0).should.be.false
    is.empty(false).should.be.false
  })

  it('is.blank()', function() {
    is.blank('').should.be.true
    is.blank('  ').should.be.true
    is.blank([]).should.be.true
    is.blank({}).should.be.true
    is.blank(['']).should.be.false
    is.blank(null).should.be.true
    is.blank(undefined).should.be.true
    is.blank(0).should.be.true
    is.blank(1).should.be.false
    is.blank(NaN).should.be.true
    is.blank(false).should.be.true
    is.blank(true).should.be.false
  })
})
