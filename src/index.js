module.exports = function longestConsecutiveLength(array) {
  // your solution here
	  let result = 0;
		if(array.length === 0){
			result = 0
		} else if(array.length === 1){
			result = 1
		} else{ 
	  	let newArr = [];
	  	array.sort((a,b)=>{
				return a - b
			})
			let count = 0;		
			for(let a = 0; a<array.length;a++){
				let diff = array[a+1] - array[a] 
				if(diff === 1){
					count++
				} else if(diff === 0){
					continue}
				else{
					count++
				 	newArr.push(count)
				 	count = 0
				}
			}
		newArr.sort((a,b)=>{
			return a - b
		})
		result = newArr[newArr.length-1];
	}
	return result;

}
