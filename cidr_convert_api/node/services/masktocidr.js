export const maskToCidrFunction = (value) => {
var maskNodes = value.match(/(\d+)/g);
var cidr = 0;
for(var i in maskNodes)
{
  cidr += (((maskNodes[i] >>> 0).toString(2)).match(/1/g) || []).length;
}
return cidr;

}
