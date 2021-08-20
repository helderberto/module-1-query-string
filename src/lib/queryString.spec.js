import { queryString, parse } from './queryString';

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

  it('should convert a query string to an object', () => {
    const qs = 'name=Helder&role=developer';

    expect(parse(qs)).toEqual({ name: 'Helder', role: 'developer' });
  });

  it('should convert a query string of a single key-value pair to an object', () => {
    const qs = 'name=Helder';

    expect(parse(qs)).toEqual({ name: 'Helder' });
  });

  it('should convert a query string to an object taking care of comma separeted cases', () => {
    const qs = 'name=Helder&skills=JS,TDD';

    expect(parse(qs)).toEqual({ name: 'Helder', skills: ['JS', 'TDD'] });
  });
});
