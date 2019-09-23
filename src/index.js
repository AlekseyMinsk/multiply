module.exports = function multiply(first, second) {

	var mainArr = [];
	var firstArr = first.split("").map(i => {
		return +i;
	});
	var secondArr = second.split("").map(i => {
		return +i;
	});

	var bigArr = firstArr.length > secondArr.length ? firstArr : secondArr;
	var smallArr = firstArr.length > secondArr.length ? secondArr : firstArr;
	bigArr.unshift(0);
	bigArr.reverse();
	smallArr.reverse();

	var value = 0;
	smallArr.forEach((smallItem, smallIndex) => {

		var currentArr = bigArr.map(bigItem =>{
			var currentNumber = (bigItem * smallItem + value) % 10;
			value = Math.floor((bigItem * smallItem  + value) / 10);
			return currentNumber;
		})
		value = 0;
		var index = smallIndex;
		var length = smallArr.length - smallIndex;
		while(index) {
			currentArr.unshift(0);
			index--;
		}
		while(length) {
			currentArr.push(0);
			length--;
		}
		mainArr.push(currentArr)

	})

	var nextStep = 0;
	var answer = mainArr[0].map((item, index) => {
		var currentAnswer = 0;
		mainArr.forEach((itemMain) =>{
			currentAnswer += itemMain[index];
		})
		currentAnswer  += nextStep;
		nextStep = Math.floor(currentAnswer / 10);
		return currentAnswer % 10;
	})
	 while(answer[answer.length - 1] === 0) {
		answer.pop()
	}
	answer.reverse();
	answer = answer.join("")
	return answer;
}