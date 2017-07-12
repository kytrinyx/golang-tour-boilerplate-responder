const expect = require('expect');
const Boilerplate = require('./boilerplate');

describe('bot behavior', function () {
  const boilerplate = new Boilerplate();

  it('recognizes issues with placeholder body', function () {
    const text = "Context: http://example.com\r\n\r\nChange the title above to describe your issue and add your feedback here, including code if necessary"
    expect(boilerplate.hasOnlyDefaultBody(text)).toBe(true);
  })

  it('does not match on custom body text', function() {
    const text = "Something else"
    expect(boilerplate.hasOnlyDefaultBody(text)).toBe(false);
  })

  it('recognizes issues with placeholder title', function () {
    const text = "tour: [REPLACE WITH SHORT DESCRIPTION]"
    expect(boilerplate.hasDefaultTitle(text)).toBe(true);
  })

  it('does not match on custom body text', function() {
    const text = "Something else"
    expect(boilerplate.hasDefaultTitle(text)).toBe(false);
  })

  it('does not match on custom body text containing placeholder body', function() {
    const text = "Context: http://example.com\r\n\r\nChange the title above to describe your issue and add your feedback here, including code if necessary\r\n\r\nSomething else"
    expect(boilerplate.hasOnlyDefaultBody(text)).toBe(false);
  })

  it('recognizes issues with placeholder body including added whitespace', function () {
    const text = "Context: http://example.com\r\n\r\nChange the title above to describe your issue and add your feedback here, including code if necessary\r\n\r\n"
    expect(boilerplate.hasDefaultBody(text)).toBe(true);
  })
})
