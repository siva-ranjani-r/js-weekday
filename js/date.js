var n=prompt("Enter the week day as string");
var dt = new Date();
     if(dt.getDay() == 6 || dt.getDay() == 0)
       {
        console.log( "weekend");
        } 
		else
		{
		console.log( "Not a weekend");
		}
