export function getRandom(n){
	let randomSet =new Set();
	while(true){
		let random = Math.ceil(Math.random()*n) - 1;
		randomSet.add(random);
		let numbers = Array.from(randomSet);
		if (numbers.length ==n) break;
	}
	let mainNumbers =  Array.from(randomSet);
  return mainNumbers;
}