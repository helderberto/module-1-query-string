const { queryString } = require('./queryString');

describe('Query object to string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = { name: 'Helder', role: 'developer' };
    const expected = 'name=Helder&role=developer';

    expect(queryString(obj)).toBe(expected);
  });

  it('should create a valid query string even when an array is passed a value', () => {
    const obj = { name: 'Helder', skills: ['JS', 'TDD'] };
    const expected = 'name=Helder&skills=JS,TDD';

    expect(queryString(obj)).toBe(expected);
  });

  it('should throw an error when an object is passed as value', () => {
    const obj = { name: 'Helder', skill: { first: 'JS', second: 'TDD' } };

    expect(() => queryString(obj)).toThrowError();
  });
});
