var tempC=parseInt(prompt('Enter temperature in degrees Celcius'));
var tempF=function(tempC) {
    return (9/5*tempC)+(32);
}
alert(tempF(tempC));
