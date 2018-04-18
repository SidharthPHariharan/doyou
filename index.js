module.exports = {
    progressiveAddition: progressiveAddition
}

function progressiveAddition(numArray){
	if (numArray.length === 1) {
		return numArray[0];
	} else {
		return numArray.pop() + progressiveAddition(my_array);
	}
}
