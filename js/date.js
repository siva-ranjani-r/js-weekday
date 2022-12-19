var day=String(prompt("enter Date in this format [yyyy,mm,dd] :"));
var x=new Date(day);
var day=x.getDay();
if(day>=1&&day<=6)
{
	document.write("weekday")
}
else
{
	document.write("weekend")
}