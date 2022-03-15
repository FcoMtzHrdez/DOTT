export const ipv4ValidationFunction = (value) => {
 var ipformat = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

 if(value.value.match(ipformat))
 {
 return true;
 }
 else
 {
 alert("You have entered an invalid IP address!");
 return false;
 }
 

}
