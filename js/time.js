 let getTime = time => {
 
	let hours = 9;
	let minutes = 0;
	let timeString = "";
	let format = "AM";

	hours =  parseInt(hours) + Math.floor(parseInt(time)/60);
	
	if(hours >= 12){
		format = "PM";
		
		if(hours > 12){		
			hours = hours - 12;		
		}	
	}

	minutes = parseInt(minutes) + parseInt(time)%60;	 	 
	minutes = (parseInt(minutes) == 0)? "00" : minutes;
	timeString += hours + ":" + minutes + format;
	 
	return timeString;
 
 }
