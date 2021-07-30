const { queryString } = require('./queryString');

describe('Query object to string', () => {
  it('should create a valid query string when an object is provided', () => {
    const obj = { name: 'Helder', role: 'developer' };
    const expected = 'name=Helder&role=developer';

    expect(queryString(obj)).toBe(expected);
  });
});
