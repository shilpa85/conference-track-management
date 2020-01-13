// Function to Create Conference tracks

let trackManagement = (inputList) => {

    let newInputList = inputList;
	let trackList = [];
	let newTrack = []; 
	let trackCounter = 0;


	while(Object.keys(newInputList).length > 0){


		for (obj in newInputList){
				let info = {};
			
				if(parseInt(trackCounter) < 180){ //Morning Session
												
					 
					let shifted = newInputList[obj].shift();			   

					if( (trackCounter + shifted.duration) <= 180){
							
							shifted.start = trackCounter;
							info = shifted;
							trackCounter += parseInt(shifted.duration);
							
					} else {

						 newInputList[obj].push(shifted);
						continue;
					 }
					 
				} else if(parseInt(trackCounter) < 480){ //Afternoon Session
				
					let shifted = newInputList[obj].shift();

					if( (trackCounter + parseInt(shifted.duration)) <= 480){
							
							shifted.start = trackCounter;
							trackCounter += parseInt(shifted.duration);
							info = shifted;
							
					} else {
					
						newInputList[obj].push(shifted);
						continue;
						
					 } 					 				

				} 
				
				
		if(info != null) {
			

			newTrack.push(info);
					
			//Add Lunch 	
			if(trackCounter  === 180){ 
										
				info = {title: "Lunch", duration: 60, start: trackCounter};
				newTrack.push(info);
				trackCounter += 60;	
					
			}
			
			//Add Networking Event
			if( trackCounter == 480 || (trackCounter < 480 && trackCounter > 435 )) {
						
				info = { duration: 60, title: "Networking Event", start: trackCounter};
				newTrack.push(info);
					
						
			}					 
			
		}
		
			  
		if( trackCounter == 480 || (trackCounter < 480 && (trackCounter > 435 || (Object.keys(newInputList).length === 1 && newInputList[obj].length === 0)))) {
		
			trackList.push(newTrack);
			newTrack = [];
			trackCounter = 0;					

		 }
		 
		 //delete empty properties
		 if(newInputList[obj].length === 0){
			 delete newInputList[obj];
		 }
			
	}
	
	//delete empty properties
	//Object.keys(newInputList).forEach((key) => (newInputList[key].length == 0) && delete newInputList[key]); 

	}
	
	return trackList;
 }