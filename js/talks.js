let getTalks = (inputArr) => {

	const sortedObject = {
		talks60Min: [],
		talks45Min: [],
		talks30Min: []
	};

	let lightningArr = [];

	inputArr.forEach(element => {
		
		let lastword = element.split(" ").pop();
		let newObject = {};
		
		if(lastword == 'lightning'){
			
			newObject.title = element;
			newObject.duration = 5;
			lightningArr.push(newObject);
				
		} else {
			
			let time = lastword.replace("min", "");
			
			if(time == 60){
			  
				newObject.title = element;
				newObject.duration = parseInt(time);
				sortedObject.talks60Min.push(newObject);
				
			} else if(time == 45) {
			  
				newObject.title = element;
				newObject.duration = parseInt(time);
				sortedObject.talks45Min.push(newObject);
				
			} else if(time == 30) {
			  
				newObject.title = element;
				newObject.duration = parseInt(time);
				sortedObject.talks30Min.push(newObject);
				
			}
		  
		}

	});
	
	sortedObject.talks30Min.push(...lightningArr);

	return sortedObject;

}



