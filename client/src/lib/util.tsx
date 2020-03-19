/* eslint-disable import/prefer-default-export */
export function removeSpace(str: string) {
  return str.replace(/\s/gi, '');
}

export function attachZero(str) {
  return +str > 9 ? str : `0${str}`;
}
