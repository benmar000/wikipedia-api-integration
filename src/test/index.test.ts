import chai from 'chai';
import index from '../index';

const { expect } = chai;

describe('src/index', () => {
  it('should return "hello world"', () => {
    // arrange
    const expected = 'hello world';
    // act
    const actual = index();
    // assert
    expect(actual).to.equal(expected);
  });
});
