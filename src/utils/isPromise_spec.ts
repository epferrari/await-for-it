import {isPromise} from './isPromise';

describe('isPromise', () => {
  it('returns true for promises', () => {
    // eslint-disable-next-line @typescript-eslint/require-await
    const promise = async () => ({});
    expect(isPromise(promise())).toEqual(true);
  });

  it('returns false for other functions', () => {
    const notPromise = () => ({});
    expect(isPromise(notPromise())).toEqual(false);
  });
});