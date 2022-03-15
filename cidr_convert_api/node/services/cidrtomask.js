export const cidrToMaskFunction = (value) => {
 var mask = [], i, n;
  for(i=0; i<4; i++) {
    n = Math.min(value, 8);
    mask.push(256 - Math.pow(2, 8-n));
    bitCount -= n;
  }
  return mask.join('.')

}
