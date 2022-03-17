export const cidrToMaskFunction = (value) => {
var mask=[];
  for(var i=0;i<4;i++) {
    var n = Math.min(value, 8);
    mask.push(256 - Math.pow(2, 8-n));
    value -= n;
  }
  return mask.join('.');

}
