let obj = {
	5: 'сидит',
	3: 'знать',
	0: 'каждый',
	4: 'где',
	1: 'охотник',
	6: 'фазан',
	2: 'желает',
}
let list = [];
let frase = '';

for (key in obj){
	list.push(obj[key])
	frase += obj[key] + ' '
}
console.log(frase)
console.log(list)
